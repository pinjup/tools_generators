import Base from '@/templates/base';
import Image from 'next/image';
import { useRouter } from 'next/router';
import qr_page from '../assets/qr-page.png';
import whois_page from '../assets/whois-page.png';
import password_page from '../assets/password-page.png';
import ip_page from '../assets/ip-page.png';

export default function Home() {
    const tools = [
        { name: 'QR Generator', route: '/tools/qr', img: qr_page },
        { name: 'Whois Info', route: '/tools/whois', img: whois_page },
        {
            name: 'Password Generator',
            route: '/tools/password',
            img: password_page,
        },
        { name: 'IP Lookup', route: '/tools/ip', img: ip_page },
    ];

    const router = useRouter();
    return (
        <main className="flex flex-col gap-16 w-full h-auto pt-16 pb-16">
            <div
                id="title"
                className="w-full h-auto flex justify-center items-center text-center text-[55px] leading-none text-white"
            >
                <h1>Generating Tools</h1>
            </div>

            <div className="grid grid-cols-[70%] gap-10 justify-center min-[500px]:grid-cols-[60%] md:grid-cols-[35%_35%]">
                {tools.map((tool) => (
                    <div
                        className="border rounded-lg cursor-pointer w-full h-[230px] min-[500px]:h-[300px] min-[600px]:h-[350px] md:h-[250px] lg:h-[300px] xl:h-[380px]"
                        key={tool.name}
                        onClick={() => router.push(tool.route)}
                    >
                        <Image
                            className="rounded-t-lg h-[80%] w-full bg-cover bg-center"
                            src={tool.img}
                            alt={tool.name}
                            width="200"
                            height="200"
                        ></Image>

                        <div className="bg-white h-[20%] flex justify-center items-center rounded-b-lg">
                            <span className="font-bold">{tool.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

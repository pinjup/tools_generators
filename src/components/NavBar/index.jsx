import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function NavBar() {
    const links = ['QR', 'Whois', 'Password', 'IP'];
    const router = useRouter();

    const [widthSize, setWidthSize] = useState(0);

    const [hiddenMenu, setHiddenMenu] = useState(true);

    useEffect(() => {
        const handleWindowResize = () => {
            setWidthSize(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);
        window.addEventListener('mouseover', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
            window.removeEventListener('load', handleWindowResize);
        };
    }, []);

    // console.log(widthSize)

    return (
        <header className="flex items-center justify-between h-full p-3 px-6 bg-black border-b border-white relative">
            <div
                id="logo_mobile"
                className="w-14 h-auto border border-gray-700"
            >
                <Link href="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        colorInterpolationFilters="sRGB"
                        version="1"
                        viewBox="0 0 340 250"
                        style={{ margin: 'auto' }}
                    >
                        <rect
                            width="100%"
                            height="100%"
                            fill="#0a0619"
                            className="background"
                        ></rect>
                        <g fill="#12c2e9" className="basesvg">
                            <g
                                fill="url(#cd36c898-4214-4ea4-81c1-f3f5b948f45a)"
                                className="tp-name"
                                data-gra="path-name"
                                transform="translate(108.3 66.669)"
                            >
                                <path d="M53.7.8V8H30.6v59h-7.5V8H0V.8h53.7zM89.8 0q14.8 0 24.3 9.9 9.3 9.6 9.3 24t-9.3 24q-9.5 9.9-24.3 9.9t-24.3-9.9q-9.3-9.6-9.3-24t9.3-24Q75 0 89.8 0zm0 60.5q11.8 0 19.1-7.7 7-7.4 7-18.9 0-11.5-7-18.9-7.3-7.7-19.1-7.7T70.7 15q-7 7.4-7 18.9 0 11.5 7 18.9 7.3 7.7 19.1 7.7z"></path>
                                <path
                                    fill="url(#2f4eb823-4d67-4933-be59-f126fb6e9102)"
                                    d="M22.79 0q10.03 0 16.48 6.71 6.3 6.51 6.3 16.28 0 9.76-6.3 16.27-6.45 6.71-16.48 6.71-10.04 0-16.48-6.71Q0 32.75 0 22.99q0-9.77 6.31-16.28Q12.75 0 22.79 0zm0 41.02q8 0 12.95-5.22 4.75-5.02 4.75-12.81 0-7.8-4.75-12.82-4.95-5.22-12.95-5.22-8 0-12.95 5.22-4.75 5.02-4.75 12.82 0 7.79 4.75 12.81 4.95 5.22 12.95 5.22zM53.71.54h5.08v40.01h24.48v4.88H53.71V.54zM95 7.42q-1.28 1.12-1.73 2.48-.44 1.35-.44 2.88 0 1.53 1.33 2.81 1.32 1.29 3.49 2.17 2.17.89 4.95 1.56 2.78.68 5.66 1.39 2.88.72 5.66 1.63 2.78.92 4.95 2.34 4.82 3.05 4.82 8.34 0 6.31-4.72 9.63-4.71 3.32-13.05 3.32-9.42 0-14.37-3.93-4.41-3.53-5.02-10.04h5.29q.27 4.61 4.47 7.06 3.66 2.1 9.7 2.1 12.61 0 12.61-7.94 0-2.71-2.27-4.27-2.27-1.56-5.7-2.57-3.42-1.02-7.39-1.9-3.96-.88-7.39-2.27-3.42-1.39-5.69-3.67-2.28-2.27-2.28-6.13 0-5.5 4.21-8.95Q96.29 0 104.77 0q8.54 0 13.22 3.93 4.27 3.46 4.54 8.88h-5.22q-.68-5.56-7.18-7.39-2.31-.67-5.73-.67-3.43 0-5.77.77-2.34.78-3.63 1.9z"
                                    data-gra="path-name-1"
                                    transform="translate(0 70.8) scale(.99766)"
                                ></path>
                            </g>
                        </g>
                        <defs>
                            <linearGradient
                                id="cd36c898-4214-4ea4-81c1-f3f5b948f45a"
                                x1="0"
                                x2="0"
                                y1="1"
                                y2="0"
                            >
                                <stop offset="0%" stopColor="#12c2e9"></stop>
                                <stop offset="50%" stopColor="#c471ed"></stop>
                                <stop offset="100%" stopColor="#f64f59"></stop>
                            </linearGradient>
                            <filter
                                id="42443b3f1de60f6b6fd3b6a9844b4764"
                                filterUnits="objectBoundingBox"
                            >
                                <feColorMatrix values="0 0 0 0 0.99609375 0 0 0 0 0.99609375 0 0 0 0 0.99609375 0 0 0 1 0"></feColorMatrix>
                            </filter>
                            <linearGradient
                                id="2f4eb823-4d67-4933-be59-f126fb6e9102"
                                x1="0"
                                x2="0"
                                y1="1"
                                y2="0"
                            >
                                <stop offset="0%" stopColor="#12c2e9"></stop>
                                <stop offset="50%" stopColor="#c471ed"></stop>
                                <stop offset="100%" stopColor="#f64f59"></stop>
                            </linearGradient>
                            <filter
                                id="42443b3f1de60f6b6fd3b6a9844b4764"
                                filterUnits="objectBoundingBox"
                            >
                                <feColorMatrix values="0 0 0 0 0.99609375 0 0 0 0 0.99609375 0 0 0 0 0.99609375 0 0 0 1 0"></feColorMatrix>
                            </filter>
                        </defs>
                    </svg>
                </Link>
            </div>

            {widthSize >= 768 ? (
                <div>
                    <ul className="text-white flex gap-4">
                        {links.map((link) => (
                            <li key={link}>
                                <Link
                                    className={`${
                                        router.pathname ==
                                        `/tools/${link.toLowerCase()}`
                                            ? 'text-white'
                                            : 'bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent'
                                    } `}
                                    href={`/tools/${link.toLowerCase()}`}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div id="menu-lines" onClick={() => setHiddenMenu(!hiddenMenu)}>
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </div>
            )}

            {widthSize >= 768 ? (
                <></>
            ) : (
                <div
                    className={`absolute top-[74px] right-2 bg-black gradient border p-2 text-lg ${
                        hiddenMenu ? 'hidden' : ''
                    }`}
                >
                    <ul className="text-white flex flex-col gap-4 text-center">
                        {links.map((link) => (
                            <li key={link}>
                                <Link
                                    className={`${
                                        router.pathname ==
                                        `/tools/${link.toLowerCase()}`
                                            ? 'text-white'
                                            : 'bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent'
                                    } `}
                                    href={`/tools/${link.toLowerCase()}`}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}

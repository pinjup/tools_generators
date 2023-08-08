import { ToolsContext } from '@/components/Context';
import { useContext } from 'react';
import Image from 'next/image';
import Base from '@/templates/base';

export default function QrTool() {
    const { generateQr, qrValue, setQrValue, qrUrl } = useContext(ToolsContext);

    const handleSubmitQr = (event) => {
        generateQr(qrValue);
        event.preventDefault();
    };
    return (
        <main className="w-full flex flex-col gap-14 justify-start items-center md:gap-[70px] pt-16 pb-16">
            <div
                id="title"
                className="w-full h-auto flex justify-center items-center text-center text-5xl leading-none bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent min-[425px]:text-[55px]"
            >
                <h1>QR Generator</h1>
            </div>

            <form
                className="text-white flex flex-col gap-8 items-center md:flex-row"
                onSubmit={handleSubmitQr}
            >
                <div className="flex items-center gap-4">
                    <label
                        className="bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent min-[425px]:text-xl"
                        htmlFor="url"
                    >
                        URL:
                    </label>
                    <input
                        onChange={(event) => setQrValue(event.target.value)}
                        className="text-black gradient border w-[180px] h-[26px] p-1 min-[425px]:h-[30px] min-[425px]:w-[200px] md:h-9 md:w-60"
                        type="url"
                        id="url"
                        name="url"
                    />
                </div>
                <button
                    className="w-24 h-8 bg-black border-2 gradient min-[425px]:w-[100px] min-[425px]:h-9 min-[425px]:text-lg"
                    type="submit"
                >
                    Submit
                </button>
            </form>

            <div className="w-full max-w-[250px] md:max-w-[320px]">
                {qrUrl == '' ? (
                    <></>
                ) : (
                    <a
                        href={`data:image/png;base64,${qrUrl}`}
                        download="qrcode"
                    >
                        <Image
                            className="gradient border-[4px] w-full"
                            src={`data:image/png;base64,${qrUrl}`}
                            alt={qrValue}
                            width="250"
                            height="250"
                        />
                    </a>
                )}
            </div>
        </main>
    );
}

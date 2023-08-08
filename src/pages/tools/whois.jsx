import { ToolsContext } from '@/components/Context';
import { useContext } from 'react';
import Base from '@/templates/base';
import { useEffect } from 'react';

export default function PasswordTool() {
    const { whoisSearch, whoisValue, whoisUrl, setWhoisUrl } =
        useContext(ToolsContext);

    const embellisher_Text = (key) =>
        (key[0].toUpperCase() + key.substring(1)).replace('_', ' ');

    const handleSubmitWhois = (event) => {
        whoisSearch(whoisUrl);
        event.preventDefault();
    };

    return (
        <main className="w-full flex flex-col gap-12 items-center pt-16 pb-16">
            <div
                id="title"
                className="w-full h-auto flex justify-center items-center text-center  text-5xl leading-none bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent min-[425px]:text-[55px]"
            >
                <h1>WHOIS</h1>
            </div>

            <form
                className="text-white flex flex-col gap-8 items-center md:flex-row"
                onSubmit={handleSubmitWhois}
            >
                <div className="flex items-center gap-4">
                    <label
                        className="bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent min-[425px]:text-xl"
                        htmlFor="url"
                    >
                        URL:
                    </label>
                    <input
                        onChange={(event) => setWhoisUrl(event.target.value)}
                        className="text-black gradient border w-[180px] h-[26px] p-1 min-[425px]:h-[30px] min-[425px]:w-[200px] md:h-9 md:w-60"
                        type="text"
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

            {whoisValue == '' ? (
                <></>
            ) : (
                <div className="text-white bg-black gradient border flex flex-col gap-3 items-center text-center w-[80%] max-w-[350px] pt-3">
                    <span className="bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent">
                        Information:
                    </span>
                    <ul className="flex flex-col gap-1 p-4 pt-0">
                        {Object?.entries(whoisValue)?.map(([key, value]) => (
                            <li className="flex gap-2 break-all" key={key}>
                                <span className="bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent">
                                    {embellisher_Text(key)}:
                                </span>
                                <span>{value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </main>
    );
}

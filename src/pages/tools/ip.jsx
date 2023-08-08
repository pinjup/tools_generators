import { ToolsContext } from '@/components/Context';
import { useContext } from 'react';
import Base from '@/templates/base';

export default function PasswordTool() {
    const { IpLookup, IPValue, IPAddress, setIPAddress } =
        useContext(ToolsContext);

    const embellisher_Text = (key) =>
        (key[0].toUpperCase() + key.substring(1)).replace('_', ' ');

    const handleSubmitIP = (event) => {
        IpLookup(IPAddress);
        event.preventDefault();
    };

    return (
        <main className="w-full flex flex-col gap-12 justify-start items-center pt-16 pb-16">
            <div
                id="title"
                className="w-full h-auto flex justify-center items-center text-center text-5xl leading-none bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent min-[425px]:text-[55px]"
            >
                <h1>IP Lookup</h1>
            </div>

            <form
                className="text-white flex flex-col gap-8 items-center md:flex-row"
                onSubmit={handleSubmitIP}
            >
                <div className="flex items-center gap-4">
                    <label
                        className="bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent min-[425px]:text-xl"
                        htmlFor="password"
                    >
                        Address IP:
                    </label>
                    <input
                        onChange={(event) => setIPAddress(event.target.value)}
                        className="text-black gradient border text-center w-24 h-[26px] p-1 min-[425px]:h-[30px] min-[425px]:w-[120px] md:h-9 md:w-60"
                        type="text"
                        id="password"
                        name="password"
                        min="10"
                        max="100"
                    />
                </div>

                <button
                    className="w-24 h-8 bg-black border-2 gradient min-[425px]:w-[100px] min-[425px]:h-9 min-[425px]:text-lg"
                    type="submit"
                >
                    Submit
                </button>
            </form>

            {IPValue == '' ? (
                <></>
            ) : (
                <div className="text-white bg-black gradient border flex flex-col gap-3 items-center text-center w-[80%] max-w-[300px] pt-3">
                    <span className="bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent">
                        Information:
                    </span>
                    <ul className="flex flex-col gap-1 p-4 pt-0">
                        {Object?.entries(IPValue)?.map(([key, value]) => (
                            <li className="flex gap-2" key={key}>
                                <span className="bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent">
                                    {embellisher_Text(key)}:
                                </span>
                                <span>{value == true ? 'True' : value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </main>
    );
}

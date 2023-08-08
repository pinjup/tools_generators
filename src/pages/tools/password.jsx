import { ToolsContext } from '@/components/Context';
import { useContext } from 'react';
import Base from '@/templates/base';

export default function PasswordTool() {
    const { passValue, setPassLength, passLength, generatePassword } =
        useContext(ToolsContext);

    const { random_password } = passValue;

    const handleSubmitPassword = (event) => {
        generatePassword(passLength);
        event.preventDefault();
    };
    return (
        <main className="w-full flex flex-col gap-12 justify-start items-center pt-16 pb-16">
            <div
                id="title"
                className="w-full h-auto flex justify-center items-center text-center text-5xl leading-none bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent min-[425px]:text-[55px]"
            >
                <h1>Password Generator</h1>
            </div>

            <form
                className="text-white flex flex-col gap-8 items-center md:flex-row"
                onSubmit={handleSubmitPassword}
            >
                <div className="flex items-center gap-4">
                    <label
                        className="bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent min-[425px]:text-xl"
                        htmlFor="number"
                    >
                        Length:
                    </label>
                    <input
                        onChange={(event) => setPassLength(event.target.value)}
                        className="text-black gradient border text-center w-24 h-[26px] p-1 min-[425px]:h-[30px] min-[425px]:w-[120px] md:h-9 md:w-60"
                        type="number"
                        id="number"
                        name="number"
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

            {passValue == '' ? (
                <></>
            ) : (
                <div className="text-white bg-black gradient border flex flex-col gap-3 items-center w-full max-w-[250px] p-6 md:max-w-[350px]">
                    <span className="bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent">
                        Password:
                    </span>
                    <code className="break-all">{random_password}</code>
                </div>
            )}
        </main>
    );
}

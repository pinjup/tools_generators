import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact_me() {
    const [valueInputs, setValueInputs] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [stateMess, setStateMess] = useState('');

    const handleChangeName = (event, value) => {
        setValueInputs({
            ...valueInputs,
            [value]: event.target.value,
        });
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (
            valueInputs.name.trim() === '' ||
            valueInputs.email.trim() === '' ||
            valueInputs.message.trim() === ''
        ) {
            alert(
                'Por favor, completa todos los campos antes de enviar el formulario.'
            );
            return;
        }

        setStateMess('');

        emailjs
            .sendForm(
                'service_94ahpfs',
                'template_cahqfy7',
                form.current,
                'AsXCHzSxWvbhMn7m5'
            )
            .then(
                (result) => {
                    setStateMess(result.text);
                },
                (error) => {
                    setStateMess(error.text);
                }
            );

        setValueInputs({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <main className="text-white py-16 flex flex-col gap-6 items-center">
            <div
                id="title"
                className="w-full h-auto flex justify-center items-center text-center text-5xl leading-none bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent min-[425px]:text-[55px]"
            >
                <h1>Contact Me</h1>
            </div>

            <form
                className="flex flex-col gap-4 [&>div]:flex [&>div]:flex-col [&>div]:gap-1 [&>div>input]:w-[55vw]"
                ref={form}
                onSubmit={sendEmail}
            >
                <div>
                    <label
                        htmlFor="user_name"
                        className="bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent"
                    >
                        Name
                    </label>
                    <input
                        className="text-black p-1"
                        type="text"
                        name="user_name"
                        value={valueInputs.name}
                        onChange={(e) => handleChangeName(e, 'name')}
                    />
                </div>

                <div>
                    <label
                        htmlFor="user_email"
                        className="bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent"
                    >
                        Email
                    </label>
                    <input
                        className="text-black p-1"
                        type="email"
                        name="user_email"
                        value={valueInputs.email}
                        onChange={(e) => handleChangeName(e, 'email')}
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="bg-gradient-to-b from-[#f35266] via-[#cb6dda] to-[#50b4ea] bg-clip-text text-transparent"
                    >
                        Message
                    </label>
                    <textarea
                        className="text-black p-1 h-28"
                        name="message"
                        value={valueInputs.message}
                        onChange={(e) => handleChangeName(e, 'message')}
                    />
                </div>

                <button
                    className="w-24 h-8 bg-black border-2 gradient min-[425px]:w-[100px] min-[425px]:h-9 min-[425px]:text-lg self-center"
                    type="submit"
                    value="Send"
                >
                    Send
                </button>
            </form>

            <div
                className={`${
                    stateMess == 'OK' ? 'text-green-400' : 'text-red-400'
                }`}
            >
                {stateMess}
            </div>
        </main>
    );
}

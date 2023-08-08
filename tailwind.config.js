/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                qrPage: "url('/src/assets/qr-page.png')",
                whoisPage: "url('/src/assets/whois-page.png')",
                passwordPage: "url('/src/assets/password-page.png')",
                ipPage: "url('/src/assets/ip-page.png')",
            },
        },
    },
    plugins: [],
};

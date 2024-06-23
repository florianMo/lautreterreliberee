/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'atl-black': '#2C2E35',
                'atl-red': '#CF171E',
                'atl-brown': '#836E07'
            }
        }
    },
    plugins: [],
}


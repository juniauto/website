/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                background: {
                    deep: '#0a0a0a',
                },
                accent: {
                    yellow: '#ffd600',
                },
            },
            fontFamily: {
                main: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

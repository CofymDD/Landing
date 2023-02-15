/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: true,
    theme: {
        extend: {
            dropShadow: {
                telegram: "0 0 1em rgba(125, 211, 252, 1)",
                replit: "0 0 1em rgba(251, 146, 60, 1)",
                discord: "0 0 1em rgba(129, 140, 248, 1)",
                twitch: "0 0 1em rgba(168, 85, 247, 1)",
                steam: "0 0 1em rgba(243, 244, 246, 1)",
                youtube: "0 0 1em rgba(239, 68, 68, 1)",
                wakatime: "0 0 1em rgba(243, 244, 246, 1)",
                osu: "0 0 1em rgba(249, 168, 212, 1)",
                github: "0 0 1em rgba(243, 244, 246, 1)",
            },
        },
    },
    plugins: [],
};

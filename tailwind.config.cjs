const { theme } = require("tailwindcss/defaultConfig");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*{html,js,svelte,ts}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Open Sans", ...theme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addVariant, e }) => {
    addVariant('empty', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
            return `.${e(`empty${separator}${className}`)}:empty`;
        });
    });
});

const colors = require('./lib/theme/colors');
const plugins = require('./lib/plugins');

module.exports = () => {
    return {
        theme: {
            screens: {
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1280px',
            },
            fontFamily: {
                sans: ['IBM Plex Sans', 'sans-serif'],
                mono: ['IBM Plex Mono', 'monospace'],
            },
            extend: {
                colors,
                lineHeight: {
                    normal: '1.7',
                    relaxed: '1.85',
                },
                minWidth: {
                    initial: 'initial',
                },
                maxWidth: (theme) => {
                    return {
                        'screen-xl': theme('screens.xl'),
                    };
                },
                width: {
                    84: '21rem',
                },
                zIndex: {
                    51: 51,
                    100: 100,
                    modal: 200,
                },
                inset: (theme) => {
                    return {
                        16: theme('spacing.16'),
                    };
                },
                fontSize: {
                    pagetitle: '2.4em',
                    table: '.95em',
                    xxs: '.72rem',
                    base: '1rem',
                    h1: '1.9em',
                    h2: '1.5em',
                    h3: '1.15em',
                    h4: '1.2em',
                },
                listStyleType: {
                    square: 'square',
                },
            },
        },
        plugins,
    };
};

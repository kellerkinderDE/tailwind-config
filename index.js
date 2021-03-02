const createLegacyConfig = require('./lib/legacy');
const plugins = require('./lib/plugins');

module.exports = (config) => {
    const {
        colors,
        fontSize,
    } = createLegacyConfig(config);

    return {
        important: true,
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
                colors: {
                    ...colors,
                    code: {
                        1: '#f4f5f7',
                        2: '#172b4d',
                    },
                    body: '#eff3f6',
                    primary: '#171c21',
                    secondary: '#ec681b',
                    secondaryHover: '#ec3b13',
                    corporate: '#ec681b',
                    corporateHover: '#ec3b13',
                    initial: 'initial',
                },
                borderColor: (theme) => {
                    return {
                        corporate: theme('colors.secondary'),
                    };
                },
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
                    ...fontSize,
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
        variants: {
            backgroundColor: ['responsive', 'odd', 'even', 'hover', 'focus', 'group-hover'],
            borderColor: ['responsive', 'hover', 'focus'],
            borderWidth: ['responsive', 'first', 'last', 'hover', 'focus'],
            display: ['responsive', 'empty', 'group-hover'],
            margin: ['responsive', 'empty'],
            opacity: ['responsive', 'hover', 'focus', 'disabled', 'group-hover'],
        },
        plugins,
    };
};

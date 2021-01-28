module.exports = {
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
                code: {
                    1: '#f4f5f7',
                    2: '#172b4d',
                },
                body: '#171c21',
                corporate: '#ec681b',
                initial: 'initial',
            },
            lineHeight: {
                normal: '1.7',
                relaxed: '1.85',
            },
            maxWidth: (theme) => {
                return {
                    'screen-xl': theme('screens.xl'),
                };
            },
            maxHeight: {
                '(screen-16)': 'calc(100vh - 4rem)',
            },
            spacing: {
                '(screen-16)': 'calc(100vh - 4rem)',
            },
            zIndex: {
                100: '100',
            },
            inset: {
                '-1': '-1rem',
                16: '4rem',
                20: '5rem',
                24: '6rem',
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
            minWidth: {
                initial: 'initial',
            },
            height: {
                500: '500px',
            },
        },
    },
    variants: {
        backgroundColor: ['responsive', 'odd', 'even', 'hover', 'focus'],
        borderColor: ['responsive', 'hover', 'focus'],
        borderWidth: ['responsive', 'first', 'last', 'hover', 'focus'],
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
        fontWeight: ['hover', 'focus'],
    },
    plugins: [
        require('@tailwindcss/ui'),
    ],
};

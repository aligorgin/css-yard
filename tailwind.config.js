module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            outline:{
                xl:['1.5rem solid #55c57a','2rem']
            },
            colors: {
                'primary': '#55c57a',
                'primary-light': '#7ed56f',
                'primary-dark': '#28b485',
                'secondary-light':'#ffb900',
                'secondary-dark':'#ff7730',
                'tertiary-light':'#2998ff',
                'tertiary-dark':'#5643fa',
            },
            scale: {
                '140': '1.4',
                '160': '1.6'
            },
            zIndex: {
                '-1': '-1',
            },
            boxShadow: {
                light: '0 1rem 2rem rgba(0,0,0,.2)',
                lessLight: '0 .5rem 1rem rgba(0,0,0,.2)',
                semiDark: '0 1.5rem 4rem rgba(0,0,0,.2)',
                semiDarkLow: '0 1.5rem 4rem rgba(0,0,0,.15)',
                dark: '0 2.5rem 4rem rgba(0,0,0,.5)',
                super: '0 3rem 6rem rgba(0,0,0,.1)'
            },
            translate: {
                '0.75': '.3rem'
            },
            fontFamily: {
                'lato': ['lato']
            },
            animation: {
                fadeLeft: 'fadeLeft 1s ease-out',
                fadeRight: 'fadeRight 1s ease-out',
                moveInBottom: 'moveInBottom .5s ease-out .75s'
            },
            keyframes: {
                fadeRight: {
                    '0%': {opacity: '0', transform: 'translateX(-10rem)'},
                    '80%': {transform: 'translateX(1rem)'},
                    '100%': {opacity: '1', transform: 'translate(0)'},
                },
                fadeLeft: {
                    '0%': {opacity: '0', transform: 'translateX(10rem)'},
                    '80%': {transform: 'translateX(-1rem)'},
                    '100%': {opacity: '1', transform: 'translate(0)'},
                },
                moveInBottom: {
                    '0%': {opacity: '0', transform: 'translateY(3rem)'},
                    '100%': {opacity: '1', transform: 'translate(0)'},
                },
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}

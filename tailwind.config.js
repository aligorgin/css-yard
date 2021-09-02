module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            scale: {
                '140': '1.4',
                '160': '1.6'
            },
            zIndex: {
                '-1': '-1',
            },
            boxShadow: {
                light: '0 1rem 2rem rgba(0,0,0,.2)',
                lessLight: '0 .5rem 1rem rgba(0,0,0,.2)'
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
    plugins: [],
}

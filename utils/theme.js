import createTheme from '@mui/material/styles/createTheme';

export default theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF'
        },
        secondary: {
            main: '#D0D6F9'
        },
        dark: {
            main: '#0B0D17'
        }
    },
    typography: {
        fontFamily: ['Barlow', 'sans-serif'],
        h1: {
            fontFamily: ['Bellefair', 'serif'],
            fontSize: '9.375rem',
            fontWeight: 400,
        },
        h2: {
            fontFamily: ['Bellefair', 'serif'],
            fontSize: '6.25rem',
            fontWeight: 400,
        },
        h3: {
            fontFamily: ['Bellefair', 'serif'],
            fontSize: '3.5rem',
            fontWeight: 400,
        },
        h4: {
            fontFamily: ['Bellefair', 'serif'],
            fontSize: '2rem',
            fontWeight: 400,
        },
        h5: {
            fontFamily: ['Barlow Condensed', 'sans-serif'],
            fontSize: '1.75rem',
            fontWeight: 400,
            letterSpacing: '4.75px',
        },
        subtitle1: {
            fontFamily: ['Bellefair', 'serif'],
            fontSize: '1.75rem',
            fontWeight: 400,
        },
        subtitle2: {
            fontFamily: ['Barlow Condensed', 'sans-serif'],
            fontSize: '0.875rem',
            fontWeight: 400,
            letterSpacing: '2.35px',
        },
        nav: {
            fontFamily: ['Barlow Condensed', 'sans-serif'],
            fontSize: '1rem',
            fontWeight: 400,
            letterSpacing: '2.7px',
        },
        body1: {
            fontFamily: ['Barlow', 'sans-serif'],
            fontSize: '1.125rem',
        }
    }
})
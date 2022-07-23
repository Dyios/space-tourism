import Head from 'next/head'
import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

let theme = createTheme({
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
    fontFamily: ['sans-serif', 'Barlow'],
    h2: {
      fontFamily: ['serif', 'Bellefair'],
      fontSize: '6.25rem',
      fontWeight: 400,
    },
    h3: {
      fontFamily: ['serif', 'Bellefair'],
      fontSize: '3.5rem',
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: ['serif', 'Bellefair'],
      fontSize: '1.75rem',
      fontWeight: 400,
    },
    subtitle2: {
      fontFamily: ['sans-serif', 'Barlow Condensed'],
      fontSize: '0.875rem',
      fontWeight: 400,
      letterSpacing: '2.35px',
    },
    nav: {
      fontFamily: ['sans-serif', 'Barlow Condensed'],
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '2.7px',
    },
  }
})

theme.typography.h1 = {
  fontFamily: ['serif', 'Bellefair'],
  fontSize: '9.375rem',
  fontWeight: 400,
  [theme.breakpoints.down('sm')]: {
    fontSize: '5rem',
  },
};
theme.typography.h2 = {
  fontFamily: ['serif', 'Bellefair'],
  fontSize: '6.25rem',
  fontWeight: 400,
  [theme.breakpoints.up('xs')]: {
    fontSize: '3.5rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '6.25rem',
  },
};
theme.typography.h4 = {
  fontFamily: ['serif', 'Bellefair'],
  fontSize: '2rem',
  fontWeight: 400,
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem',
  },
};
theme.typography.h5 = {
  fontFamily: ['sans-serif', 'Barlow Condensed'],
  fontSize: '1.75rem',
  fontWeight: 400,
  letterSpacing: '4.75px',
  [theme.breakpoints.up('xs')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.75rem',
  },
};
theme.typography.body1 = {
  fontFamily: ['sans-serif', 'Barlow'],
  fontSize: '1.125rem',
  lineHeight: '32px',
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.938rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.125rem',
  },
};
theme.typography.nav = {
  fontFamily: ['sans-serif', 'Barlow Condensed'],
  fontSize: '1rem',
  fontWeight: 400,
  letterSpacing: '2.7px',
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.875rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  }
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#66BFBF'
    },
   secondary: {
     main: '#FF0063'
   }

  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
    ].join(','),
    fontSize: 16,
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      fontFamily: 'Roboto',
      textTransform: 'uppercase',
      color: '#66BFBF',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      color: 'white',
      backgroundColor: '#66BFBF',
      padding: '0px 10px',
      textAlign: 'center',
      display: 'inline',
      fontFamily: 'Roboto',
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 700,
      fontFamily: 'Roboto',
      textTransform: 'uppercase',
      
    },
    h4: {
      fontSize: '1.15rem',
      fontWeight: 400,
      fontFamily: 'Roboto',
      textTransform: 'uppercase',
      color: '#66BFBF',
    },
    h5: {
      fontSize: '1.07rem',
      fontWeight: 700,
      lineHeight: '1.4',

    },
    h6: {
      fontSize: '1rem',
      fontWeight: 300,
      color: 'black',
      backgroundColor: '#66BFBF',
      padding: '0px 10px',
      lineHeight: '1.4',
      textAlign: 'center',
      display: 'inline',
      fontFamily: 'Roboto',
      margin: '2px'
    },
    body1: {
      fontSize: '1rem',
      fontFamily: 'Roboto',
      textAlign: 'left',
      lineHeight: '1.7',
      marginTop: '5px',
      textDecoration: 'none',
    },
    body2: {
      fontSize: '1rem'
    },
    button: {
      textTransform: 'none'
    },
  }
});

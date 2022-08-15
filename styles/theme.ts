
import { createTheme, PaletteMode, styled } from '@mui/material';
import { amber, deepOrange, green, grey, lime, orange, red } from '@mui/material/colors';


export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#EAF6F6',
            contrastText: '#66BFBF'
          },
          secondary: {
            main: '#fff',
            contrastText: '#FF0063',
          },
          text: {
            primary: 'black',
           secondary: 'white', 
          },
        }
      : {
          // palette values for dark mode
           primary: {
            main: '#121212',
            contrastText: '#D65A31',
          },
          secondary: {
            main: '#181818',
            contrastText: '#EEEEEE',
          },
          text: {
            primary: 'white',
           secondary: 'black', 
          },
        }),
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
    ].join(','),
    fontSize: 16,
  },
});


export const H1 = styled('h1')((props) => ({
    fontSize: '2rem',
    fontWeight: 700,
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
    color: '#66BFBF',
}))

export const H2 = styled('h2')((props) => ({
    fontSize: '1.5rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: 'white',
    backgroundColor: '#66BFBF',
    padding: '0px 10px',
    textAlign: 'center',
    display: 'inline',
    fontFamily: 'Roboto',
}))

export const H3 = styled('h3')((props) => ({
  fontSize: '1.2rem',
  fontWeight: 700,
  fontFamily: 'Roboto',
  textTransform: 'uppercase',
}))

export const H4 = styled('h4')((props) => ({
  fontSize: '1.15rem',
  fontWeight: 400,
  fontFamily: 'Roboto',
  textTransform: 'uppercase',
  color: '#66BFBF',
}))

export const H5 = styled('h5')((props) => ({  
  fontSize: '1.07rem',
  fontWeight: 700,
  lineHeight: '1.4',
}))

export const H6 = styled('h6')((props) => ({
  fontSize: '1rem',
  fontWeight: 300,
  color: 'black',
  backgroundColor: '#66BFBF',
  padding: '0px 10px',
  lineHeight: '1.4',
  textAlign: 'center',
  display: 'inline',
  fontFamily: 'Roboto',
  margin: '2px',
  borderRadius: '2px',
}))  

export const Body1 = styled('p')((props) => ({  
  fontSize: '1rem',
  fontFamily: 'Roboto',
  textAlign: 'left',
  lineHeight: '1.7',
  textDecoration: 'none',
}))


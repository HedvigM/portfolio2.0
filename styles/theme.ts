
import { PaletteMode, styled, Typography } from '@mui/material';


export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#FCD752', // Yellow
            contrastText: '#66BFBF'
          },
          secondary: {
            main: '#61C6C6', // Light blue
            contrastText: '#FF0063',
          },
          tritiary: {
            main: '#FCA3B9', // Pink
            contrastText: '#FCD752'
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
            contrastText: '#F6E9E9',
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


export const H1 = styled(Typography)((props) => ({
     fontSize: '2rem', 
    fontWeight: 700,
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
    color: props.theme.palette.primary.contrastText,
}))

export const H2 = styled(Typography)((props) => ({
    fontSize: '1.5rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    padding: '0px 10px',
    textAlign: 'center',
    display: 'inline',
    fontFamily: 'Roboto',
    backgroundColor: props.theme.palette.primary.contrastText,
    color: props.theme.palette.text.secondary,
}))

export const H3 = styled(Typography)((props) => ({
  fontSize: '1.2rem',
  fontWeight: 700,
  fontFamily: 'Roboto',
  textTransform: 'uppercase',
}))

export const H4 = styled(Typography)((props) => ({
  fontSize: '1.15rem',
  fontWeight: 400,
  fontFamily: 'Roboto',
  textTransform: 'uppercase',
  color: props.theme.palette.primary.contrastText,
}))

export const H5 = styled(Typography)((props) => ({  
  fontSize: '1.07rem',
  fontWeight: 700,
  lineHeight: '1.4',
  /* color: props.theme.palette.text.primary, */
  color: props.theme.palette.secondary.contrastText,
}))

export const H6 = styled(Typography)((props) => ({
  fontSize: '1rem',
  fontWeight: 300,
  color: props.theme.palette.text.primary,
  backgroundColor: props.theme.palette.primary.contrastText,
  padding: '0px 10px',
  lineHeight: '1.4',
  textAlign: 'center',
  display: 'inline',
  fontFamily: 'Roboto',
  margin: '2px',
  borderRadius: '2px',
}))  

export const H6Link = styled(Typography)((props) => ({
  fontSize: '1rem',
  fontWeight: 300,
  color: props.theme.palette.text.secondary,
  backgroundColor: props.theme.palette.secondary.contrastText,
  padding: '0px 10px',
  lineHeight: '1.4',
  textAlign: 'center',
  display: 'inline',
  fontFamily: 'Roboto',
  margin: '2px',
  borderRadius: '2px',

  '&:hover': {
    color: props.theme.palette.text.primary,
    backgroundColor: props.theme.palette.primary.main
  },
}))

export const Body1 = styled(Typography)((props) => ({  
  fontSize: '1rem',
  fontFamily: 'Roboto',
  textAlign: 'left',
  lineHeight: '1.3',
  textDecoration: 'none',
  color: props.theme.palette.text.primary,
}))


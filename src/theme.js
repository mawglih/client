import { createTheme } from '@material-ui/core/styles';

const myBlue = "#0838FF";
const myOrange = "#FF4433";
const myGrey = "#232323"

export const theme = createTheme({
  palette: {
    common: {
      blue: `${myBlue}`,
      orange: `${myOrange}`,
    },
    primary: {
      main: `${myBlue}`,
    },
    secondary: {
      main: `${myOrange}`,
    },
    tertiary: {
      main: 'turqoise',
    },
  },
  typography: {
    fontFamily: 'Lato',
    fontSize: 12,
    fontWeight: 700,
    h2: {
      fontFamily: 'Raleway',
      fontSize: '2.5rem',
      color: `${myBlue}`,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: ['Great Vibes', 'cursive',].join(','),
      fontSize: '2rem',
      color: `${myBlue}`,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: myGrey,
    },
      subtitle2: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: 'white',
    },
    body1: {
      fontFamily: ['Great Vibes', 'cursive',].join(','),
      fontSize: '1.5rem',
    },
    tab: {
      fontWeight: 700, 
      fontSize: '1rem',
      minWidth: 10,
      marginLeft: '25px',
    },
    action: {
      fontFamily: ['Great Vibes', 'cursive',].join(','),
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'none',
      fontSize: '1.3em',
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: myBlue,
        fontSize: '.8rem',
      },
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: `2px solid ${myBlue}`,
        },
        '&:hover:not($disabled):not(#focused):not($error):before': {
          borderBottom: `2px solid ${myBlue}`,
        },
      },
    },
  },
});

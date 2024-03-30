import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4E80EE', // Couleur bleu comme primaire
    },
    secondary:{
      main:'#4A5567',
      light:'#97A3B6',
      dark:'#20293af2',
    },
    black:{
      main:'#121826',
      light:'#20293A',
    },
    yellow:{
      main:'#F6C768'
    },
    white:{
      main:'#F2F9FE'
    }
  },

  
  typography: {
    fontFamily: 'Outfit, sans-serif', // Police par défaut
    h1: {
      "fontWeight": 900,
    },
    h2: {
      "fontWeight": 800,
    },
    h3: {
      "fontWeight": 600,
    },
    h4: {
      "fontWeight": 500,
    },
    h5: {
      "fontWeight": 400,
    },
    h6: {
      "fontWeight": 300,
    },
    subtitle1: {
      "fontWeight": 400,
    },
  },
});

export default theme;

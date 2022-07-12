import { createTheme } from '@mui/material/styles';
import { red,  } from '@mui/material/colors';


export const pastelTheme = createTheme({

  palette: {
    mode: 'light',
    background: {
      default: '#fecedc'
    },
    primary: {
      main: '#1E1E1E'
    },
    secondary: {
      main: '#1E1E1E'
    },
    info: {
      main: '#1E1E1E'
    }

  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: '#fecedc',
          height: 60
        },
      }
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600
        },
        h2: {
          fontSize: 20,
          fontWeight: 400
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600
        }
      }
    },


    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'medium',
        disableElevation: true,
        color: 'primary',
        
      },
      styleOverrides: {
        root: {
          backgroundColor: '#fecedc', 
          color: '#1E1E1E',
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 10,
          ":hover": {
            color: '#fecedc',
            backgroundColor: '#1E1E1E',
            transition: 'all 0.3s ease-in-out'
          }
        }
      }
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#fecedc',
        }
      }
    }

    ,


    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    }
    
  }
});
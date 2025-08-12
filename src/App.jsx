import React, { useEffect } from 'react';
import Home from './screens/Home';
import { Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { DockProvider } from './Components/shared/MacOSDialog/MacOSDialog';
import './App.scss';

const theme = createTheme({
  overrides: {
    MuiButton: {
      containedSecondary: {
        backgroundColor: '#fff',
        color: '#000',
        '&:hover': {
          backgroundColor: '#fff',
        },
      },
    },
    MuiInput: {
      underline: {
        '&:hover:not($disabled):before': {
          borderBottom: `.8px solid white`,
        },
      },
    },
  },
});

export default function App() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <DockProvider>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </DockProvider>
      </ThemeProvider>
    </div>
  );
}

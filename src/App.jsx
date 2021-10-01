import React, { useEffect } from 'react';
import Home from './screens/Home';
import { Route, Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './App.scss';

const theme = createMuiTheme({
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
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </MuiThemeProvider>
    </div>
  );
}

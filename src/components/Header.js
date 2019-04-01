import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';

import '../stylesheet/Header.css'

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[900] }, 
    secondary: { main: '#fff' },
  },
  typography: { useNextVariants: true },
});

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Header(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <img className="header-logo" src="logo.svg" />
          <Typography className="header-text" variant="h6" color="secondary">
            NIJIBOX Member Listtttttt
          </Typography>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
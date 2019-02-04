import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] }, // Purple and green play nicely together.
    secondary: { main: '#fff' },// This is just green.A700 as hex.
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
          <Typography variant="h6" color="secondary">
            NIJIBOX Member List
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
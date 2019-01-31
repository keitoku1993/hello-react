import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import UserSearch from './UserSearch';
import DepartmentSearch from './DepartmentSearch';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ChangeTab extends React.Component {
  state = {
    value: 0,
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="フリーワード検索" />
            <Tab label="部署名で絞り込み" />
          </Tabs>
        </AppBar>
        {value === 1 && <TabContainer><UserSearch  /></TabContainer>}
        {value === 2 && <TabContainer><DepartmentSearch /></TabContainer>}
      </div>
    );
  }
}

ChangeTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChangeTab);
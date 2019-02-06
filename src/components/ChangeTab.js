import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import FreeWordSearch from './FreeWordSearch';
import DepartmentSearch from './DepartmentSearch';
import Update from './Update';

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

  handleChange = (event, value) => {
    this.setState({ value });
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
            <Tab label="部署名で絞り込み" />
            <Tab label="フリーワード検索" />
            <Tab label="プロフィール更新" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><DepartmentSearch loadDepartmentSearch={(id)=>this.props.loadDepartmentSearch(id)}/></TabContainer>}
        {value === 1 && <TabContainer><FreeWordSearch loadFreeWordSearch={(word)=>this.props.loadFreeWordSearch(word)}/></TabContainer>}
        {value === 2 && <TabContainer><Update profileUpdate={(inputData)=>this.props.profileUpdate(inputData)}/></TabContainer>}
      </div>
    );
  }
}

ChangeTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChangeTab);
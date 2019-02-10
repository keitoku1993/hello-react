import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    height: 40,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'baseline'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class FreeWordSearch extends React.Component {
  state = {
    name: '',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="フリーワード"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          onKeyUp={()=>this.props.loadFreeWordSearch(this.state.name)}
          margin="normal"
          placeholder="単語を入れてください"
        />
      </form>
    );
  }
}

FreeWordSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FreeWordSearch);
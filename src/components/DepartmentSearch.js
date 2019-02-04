import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    height: 40,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'baseline',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class DepartmentSearch extends React.Component {
  state = {
    series: '',
  };

  handleChange = event => {
    // this.setState({ [event.target.name]: event.target.value });
    this.props.loadDepartmentSearch(event.target.value);
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple"> 部署名</InputLabel>
          <Select
            value={this.state.series}
            onChange={this.handleChange}
            inputProps={{
              name: 'series',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value='2'>MP事業部</MenuItem>
            <MenuItem value='3'>OS事業部</MenuItem>
            <MenuItem value='8'>UI/UX制作室</MenuItem>
            <MenuItem value='4'>開発室</MenuItem>
            <MenuItem value='5'>クリエイティブ室</MenuItem>
            <MenuItem value='6'>QAグループ</MenuItem>
            <MenuItem value='7'>経営企画室</MenuItem>
            <MenuItem value='1'>ニジボックス</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

DepartmentSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DepartmentSearch);
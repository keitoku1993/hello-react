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

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Series</InputLabel>
          <Select
            value={this.state.series}

            onChange={this.handleChange}
            inputProps={{
              name: 'series',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value='1'>スーパーマリオシリーズ</MenuItem>
            <MenuItem value='2'>ゼルダの伝説シリーズ</MenuItem>
            <MenuItem value='3'>スターフォックスシリーズ</MenuItem>
            <MenuItem value='4'>ファイアーエムブレムシリーズ</MenuItem>
            <MenuItem value='5'>ファイナルファンタジーシリーズ</MenuItem>
            <MenuItem value='6'>メタルギアソリッドシリーズ</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" className={classes.button} onClick={()=>this.props.loadDepartmentSearch(this.state.series)}>
            Search
        </Button>
      </form>
    );
  }
}

DepartmentSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DepartmentSearch);
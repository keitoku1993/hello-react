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

class SeriesSearch extends React.Component {
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
            <MenuItem value='スーパーマリオシリーズ'>スーパーマリオシリーズ</MenuItem>
            <MenuItem value='ゼルダの伝説シリーズ'>ゼルダの伝説シリーズ</MenuItem>
            <MenuItem value='スターフォックスシリーズ'>スターフォックスシリーズ</MenuItem>
            <MenuItem value='ファイアーエムブレムシリーズ'>ファイアーエムブレムシリーズ</MenuItem>
            <MenuItem value='ファイナルファンタジーシリーズ'>ファイナルファンタジーシリーズ</MenuItem>
            <MenuItem value='メタルギアソリッドシリーズ'>メタルギアソリッドシリーズ</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" className={classes.button} onClick={()=>this.props.handleSeriesClick(this.state.series)}>
            Search
        </Button>
      </form>
    );
  }
}

SeriesSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SeriesSearch);
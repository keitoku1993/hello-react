import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import '../stylesheet/Update.css'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    height: 40,
    width: 200,
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

class Update extends React.Component {
  state = {
    adana: this.props.loginUser.nickname,
    enterDate: this.props.loginUser.enter_date,
    pr: this.props.loginUser.description,
  };

  handleChangeAdana = adana => event => {
    this.setState({
      [adana]: event.target.value,
    });
  };
  handleChangeEnterDate = enterDate => event => {
    this.setState({
      [enterDate]: event.target.value,
    });
  };
  handleChangePR = pr => event => {
    this.setState({
      [pr]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    console.log(this.props.loginUser)

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <div className="update-text">{this.props.loginUser.user_name}さんのプロフィールを更新します。</div>
        <TextField
          id="outlined-full-width"
          label="ニックネーム"
          style={{ margin: 8 }}
          placeholder="ニックネームを入力してください"
          fullWidth
          value={this.state.adana}
          onChange={this.handleChangeAdana('adana')}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-full-width"
          label="入社日"
          style={{ margin: 8 }}
          placeholder="入社日を入力してください"
          fullWidth
          value={this.state.enterDate}
          onChange={this.handleChangeEnterDate('enterDate')}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-full-width"
          label="ひとこと"
          style={{ margin: 8 }}
          placeholder="つぶやく"
          fullWidth
          value={this.state.pr}
          onChange={this.handleChangePR('pr')}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained" className={classes.button} onClick={(e)=>this.props.profileUpdate(this.state)}>
          Send
        </Button>
      </form>
    );
  }
}

Update.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Update);
import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { makeStyles } from "@material-ui/core/styles";
import * as appActions from "./../../../app/store/actions";
import { Snackbar, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function AppSnackbar(props) {
  const classes = useStyles(props);
  const { options, state, hideSnackbar } = props;

  return (
    <div className={classes.root}>
      <Snackbar
        open={state}
        {...options}
        autoHideDuration={6000}
        onClose={hideSnackbar}
      >
        <Alert onClose={hideSnackbar} severity={options.variant}>
          <Typography>{options.message}</Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}

const mapStateToProps = ({ brinmi }) => {
  return {
    options: brinmi.snackbar.options,
    state: brinmi.snackbar.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      hideSnackbar: appActions.hideSnackbar,
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppSnackbar)
);

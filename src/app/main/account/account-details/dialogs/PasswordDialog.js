import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import * as Actions from "./../../store/actions";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@brinmi";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-rounded": {
      borderRadius: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  },
}));

const initialForm = {
  oldPassword: "",
  newPassword: "",
};

function ProfileDialog(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const { dialog } = props;
  const [form, setForm] = useState({ ...initialForm });
  const [validate, setValidate] = useState({ password: "", error: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleValidate = (event) => {
    setValidate({
      ...validate,
      [event.target.name]: event.target.value,
      error:
        form.newPassword !== event.target.value
          ? "Password does not match"
          : "",
    });
  };

  const cancel = () => {
    dispatch(Actions.closePasswordDialog());
    setForm({ ...initialForm });
    setValidate({ password: "", error: "" });
  };

  const handleSubmit = () => {};

  console.log(form, "form");
  console.log(validate, "validate");

  return (
    <Dialog
      className={classes.root}
      open={dialog.open}
      onClose={() => dispatch(Actions.closePasswordDialog())}
      aria-labelledby='password-dialog'
      fullWidth
      maxWidth='xs'
    >
      <DialogTitle>Change Password</DialogTitle>
      <DialogContent dividers>
        <div className='flex flex-col items-center space-y-4'>
          <TextField
            label='Old Password'
            name='oldPassword'
            variant='outlined'
            value={form.oldPassword}
            onChange={handleChange}
            margin='dense'
            fullWidth
          />
          <TextField
            label='New Password'
            name='newPassword'
            variant='outlined'
            value={form.newPassword}
            onChange={handleChange}
            margin='dense'
            fullWidth
          />
          <TextField
            label='Repeat New Password'
            name='password'
            variant='outlined'
            value={validate.password}
            onChange={handleValidate}
            margin='dense'
            fullWidth
            helperText={validate.error}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          size='large'
          variant='outlined'
          color='secondary'
          rounded
          onClick={cancel}
        >
          Cancel
        </Button>
        <Button
          size='large'
          variant='contained'
          color='secondary'
          rounded
          onClick={handleSubmit}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = ({ accountReducer, auth }) => {
  return {
    dialog: accountReducer.account.passwordDialog,
    user: auth.user.data,
  };
};

export default withRouter(connect(mapStateToProps)(ProfileDialog));

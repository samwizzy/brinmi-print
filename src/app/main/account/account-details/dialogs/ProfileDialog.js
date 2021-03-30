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
  MenuItem,
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
  address: "",
  email: "",
  fullName: "",
  phoneNumber: "",
  type: "",
};

function ProfileDialog(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const { dialog } = props;
  const [form, setForm] = useState({ ...initialForm });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const cancel = () => {
    dispatch(Actions.closeProfileDialog());
    setForm({ ...initialForm });
  };

  const handleSubmit = () => {};

  return (
    <Dialog
      className={classes.root}
      open={dialog.open}
      onClose={() => dispatch(Actions.closeProfileDialog())}
      aria-labelledby='profile-dialog'
      fullWidth
      maxWidth='xs'
    >
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent dividers>
        <div className='flex flex-col items-center space-y-4'>
          <TextField
            label='Full Name'
            name='fullName'
            variant='outlined'
            value={form.fullName}
            onChange={handleChange}
            margin='dense'
            fullWidth
          />
          <TextField
            label='Email'
            name='email'
            variant='outlined'
            value={form.email}
            onChange={handleChange}
            margin='dense'
            fullWidth
          />
          <TextField
            label='Phone Number'
            name='phoneNumber'
            variant='outlined'
            value={form.phoneNumber}
            onChange={handleChange}
            margin='dense'
            fullWidth
          />
          <TextField
            label='Address'
            name='address'
            variant='outlined'
            value={form.address}
            onChange={handleChange}
            margin='dense'
            fullWidth
            multiline
            rows={3}
            rowsMax={4}
          />
          <TextField
            id='select-type'
            select
            label='Type'
            name='type'
            variant='outlined'
            value={form.type}
            onChange={handleChange}
            margin='dense'
            fullWidth
          >
            <MenuItem value=''>Select Type</MenuItem>
          </TextField>
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
  console.log(accountReducer, "accountReducer profile dialog");
  return {
    dialog: accountReducer.account.profileDialog,
    user: auth.user.data,
  };
};

export default withRouter(connect(mapStateToProps)(ProfileDialog));

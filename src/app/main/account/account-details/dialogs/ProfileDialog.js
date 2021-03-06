import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import * as Actions from './../../store/actions';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@brinmi';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiPaper-rounded': {
      borderRadius: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  },
}));

const initialForm = {
  password: '',
  fullName: '',
  phoneNumber: '',
};

function ProfileDialog(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const {
    user: { id, fullName, phone },
    dialog,
  } = props;
  const [form, setForm] = useState({
    ...initialForm,
    fullName,
    phoneNumber: phone,
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const cancel = () => {
    dispatch(Actions.closeProfileDialog());
    setForm({ ...initialForm });
  };

  const handleSubmit = () => {
    dispatch(Actions.updateProfile(id, form));
  };

  console.log(form, 'form sam');

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
            label='Password'
            name='password'
            type='password'
            variant='outlined'
            value={form.password}
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
    dialog: accountReducer.account.profileDialog,
    user: auth.user.data,
  };
};

export default withRouter(connect(mapStateToProps)(ProfileDialog));

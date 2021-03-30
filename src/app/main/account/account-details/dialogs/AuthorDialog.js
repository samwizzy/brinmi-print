import React, { useState, useEffect } from "react";
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
import { usePaystackPayment } from "react-paystack";

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
  amount: 0,
  transactionReference: "",
  email: "",
};

const initialConfig = {
  reference: new Date().getTime(),
  email: "samwize.inc@gmail.com",
  amount: 20000,
  publicKey: process.env.REACT_APP_PAYSTACK_KEY,
};

function AuthorDialog(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const { dialog } = props;
  const [config, setConfig] = useState({ ...initialConfig });
  const [form, setForm] = useState({ ...initialForm });

  useEffect(() => {
    if (dialog.data) {
      setForm((state) => ({
        ...state,
        transactionReference: dialog.data.reference,
      }));
    }
    return () => {};
  }, [dialog.data]);

  useEffect(() => {
    if (form.email) {
      setConfig((state) => ({
        ...state,
        reference: form.transactionReference,
        email: form.email,
        amount: form.amount * 100,
      }));
    }
    return () => {};
  }, [form]);

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    setForm((state) => ({
      ...state,
      transactionReference: reference.reference,
    }));
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const PaystackHook = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <Button
          size='large'
          rounded
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Pay
        </Button>
      </div>
    );
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const cancel = () => {
    dispatch(Actions.closeAuthorDialog());
    setForm({ ...initialForm });
  };

  const handleSubmit = () => {
    const { email, ...rest } = form;
    dispatch(Actions.becomeAnAuthor(rest));
  };

  console.log(dialog, "become an author dialog");
  console.log(form, "form dialog");
  console.log(config, "config dialog");

  return (
    <Dialog
      className={classes.root}
      open={dialog.open}
      onClose={() => dispatch(Actions.closeAuthorDialog())}
      aria-labelledby='author-dialog'
      fullWidth
      maxWidth='xs'
    >
      <DialogTitle>Become An Author</DialogTitle>
      <DialogContent dividers>
        <div className='flex flex-col items-center space-y-4'>
          <TextField
            id='author-email'
            label='Email'
            name='email'
            variant='outlined'
            value={form.email}
            onChange={handleChange}
            margin='dense'
            fullWidth
          />

          <TextField
            id='author-amount'
            label='Amount'
            name='amount'
            variant='outlined'
            value={form.amount}
            onChange={handleChange}
            margin='dense'
            fullWidth
          />

          <TextField
            id='author-reference'
            label='Transaction Reference'
            name='transactionReference'
            variant='outlined'
            value={form.transactionReference}
            disabled
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
        {form.transactionReference ? (
          <Button
            size='large'
            variant='contained'
            color='secondary'
            rounded
            onClick={handleSubmit}
          >
            Save
          </Button>
        ) : (
          <PaystackHook />
        )}
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = ({ accountReducer, auth }) => {
  return {
    dialog: accountReducer.author.authorDialog,
    user: auth.user.data,
  };
};

export default withRouter(connect(mapStateToProps)(AuthorDialog));

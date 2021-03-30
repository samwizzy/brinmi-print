import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "./../../../store/actions";
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
import { types } from "./../mock";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-rounded": {
      borderRadius: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      margin: theme.spacing(2),
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

function PartnerWithUsDialog(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const dialog = useSelector(({ brinmi }) => brinmi.partner.partnerDialog);
  const [form, setForm] = useState({ ...initialForm });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const cancel = () => {
    dispatch(Actions.closePartnerWithUsDialog());
    setForm({ ...initialForm });
  };

  const handleSubmit = () => {
    dispatch(Actions.createPartner(form));
  };

  console.log(form, "form");

  return (
    <Dialog
      className={classes.root}
      open={dialog.open}
      onClose={() => dispatch(Actions.closePartnerWithUsDialog())}
      aria-labelledby='partner-with-us-dialog'
      fullWidth
      maxWidth='xs'
    >
      <DialogTitle>Partner With Us</DialogTitle>
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
            {types.map((type, i) => (
              <MenuItem key={i} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          size='large'
          variant='contained'
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

export default withRouter(PartnerWithUsDialog);

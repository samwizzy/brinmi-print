import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "./../../../../store/actions";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
} from "@material-ui/core";
import { Button } from "@brinmi";

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: theme.shape.borderRadius * 5,
  },
  dialog: {
    "& .MuiDialogActions-root": {
      margin: theme.spacing(2),
    },
  },
}));

function CategoryDialog(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const dialog = useSelector(({ books }) => books.category.categoryDialog);
  const [form, setForm] = useState({
    description: "",
    title: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(Actions.createCategory(form));
  };

  console.log(form);

  return (
    <Dialog
      onClose={() => dispatch(Actions.closeCategoryDialog())}
      aria-labelledby="subscribe-dialog"
      open={dialog.open}
      className={classes.dialog}
      classes={{ paper: classes.paper }}
    >
      <DialogTitle>New Category</DialogTitle>
      <DialogContent>
        <div className="text-center flex flex-col space-y-6">
          <TextField
            label="Category Name"
            name="title"
            variant="outlined"
            value={form.title}
            onChange={handleChange}
            margin="dense"
            fullWidth
          />

          <TextField
            label="Category Description"
            name="description"
            variant="outlined"
            value={form.description}
            onChange={handleChange}
            fullWidth
            margin="dense"
            multiline
            rows={3}
            rowsMax={4}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          rounded
          onClick={handleSubmit}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default withRouter(CategoryDialog);

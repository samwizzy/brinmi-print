import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "./../../store/actions";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@brinmi";
import { Dialog, DialogContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-rounded": {
      borderRadius: theme.spacing(4),
    },
  },
}));

function SubscribeDialog(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const dialog = useSelector(
    ({ chapterApp }) => chapterApp.chapter.subscribeDialog
  );

  const handleSubmit = () => {};

  return (
    <Dialog
      className={classes.root}
      open={dialog.open}
      onClose={() => dispatch(Actions.closeSubscribeDialog())}
      aria-labelledby="subscribe-dialog"
    >
      <DialogContent>
        <div className="flex flex-col items-center space-y-8 p-16">
          <Button
            size="large"
            variant="contained"
            color="secondary"
            rounded
            onClick={handleSubmit}
          >
            Subscribe
          </Button>
          <p className="text-lg font-extralight text-gray-500">
            To Continue Reading
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SubscribeDialog;

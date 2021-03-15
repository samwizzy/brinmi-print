import React from "react";
import {withRouter} from "react-router-dom"
import { connect, useDispatch } from "react-redux";
import withReducer from "./../../../../store/withReducer";
import reducer from "./../../store/reducers";
import * as Actions from "./../../store/actions";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, DialogContent } from "@material-ui/core";
import { Button } from "@brinmi";

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: theme.shape.borderRadius * 5,
  },
}));

function ChapterSlider({ dialog, history }, props) {
  const dispatch = useDispatch();
  const classes = useStyles(props);

  const handleNavigate = () => {
    history.push("/account/subscriptions")
    dispatch(Actions.closeSubscribeDialog())
  }

  return (
    <Dialog
      onClose={() => dispatch(Actions.closeSubscribeDialog())}
      aria-labelledby="subscribe-dialog"
      open={dialog.open}
      classes={{ paper: classes.paper }}
    >
      <DialogContent>
        <div className="text-center flex flex-col space-y-6 p-8">
          <Button color="secondary" variant="contained" size="large" rounded onClick={handleNavigate}>
            Subscribe
          </Button>
          <p className="text-gray-600 font-extralight">To Continue Reading</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const mapStateToProps = ({ chapterReducer }) => {
  return {
    dialog: chapterReducer.chapter.subscribeDialog,
  };
};

export default withReducer(
  "chapterReducer",
  reducer
)(withRouter(connect(mapStateToProps)(ChapterSlider)));

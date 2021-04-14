import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import withReducer from "./../../../store/withReducer";
import * as Actions from "./../store/actions";
import reducer from "./../store/reducers";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  MobileStepper,
  Typography,
} from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Button } from "@brinmi";
import SubscribeDialog from "./components/SubscribeDialog";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.background.paper,
  },
  stepper: {
    flexGrow: 1,
  },
}));

const chapters = [
  {
    title: "Spiritual Guideline",
    chapter: 1,
    description: "This is the description for this chapter",
  },
  {
    title: "Spiritual Guideline",
    chapter: 2,
    description: "This is the description for this chapter",
  },
  {
    title: "Spiritual Guideline",
    chapter: 3,
    description: "This is the description for this chapter",
  },
  {
    title: "Spiritual Guideline",
    chapter: 4,
    description: "This is the descri[tion for this chapter",
  },
  {
    title: "Spiritual Guideline",
    chapter: 5,
    description: "This is the descri[tion for this chapter",
  },
];

export function BookChapter(props) {
  const classes = useStyles(props);
  const { openSubscribeDialog } = props;
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = chapters.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    openSubscribeDialog();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="w-full bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <Card square elevation={0} className={classes.card}>
          <CardHeader
            title={`Chapter ${chapters[activeStep].chapter} — ${chapters[activeStep].title}`}
          />

          <CardContent>
            <Typography>{chapters[activeStep].description}</Typography>
          </CardContent>

          <CardActions>
            <MobileStepper
              className={classes.stepper}
              steps={maxSteps}
              position="static"
              variant="text"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </CardActions>
        </Card>

        <SubscribeDialog />
      </div>
    </div>
  );
}

const mapStateToProps = ({ chapterApp }) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBookChapters: Actions.getBookChapterById,
      openSubscribeDialog: Actions.openSubscribeDialog,
    },
    dispatch
  );
};

export default withReducer(
  "chapterApp",
  reducer
)(connect(mapStateToProps, mapDispatchToProps)(BookChapter));

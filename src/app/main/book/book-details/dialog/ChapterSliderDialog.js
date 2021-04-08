import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import withReducer from '../../../../store/withReducer';
import reducer from '../../store/reducers';
import * as Actions from '../../store/actions';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  MobileStepper,
  Toolbar,
  Button,
} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
}));

function ChapterSlider({ dialog }, props) {
  const classes = useStyles(props);
  const {
    data: { chapters },
  } = dialog;
  const theme = useTheme();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = chapters?.length;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch(Actions.openSubscribeDialog());
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  console.log(dialog, 'dialog play chapter');

  return (
    <Dialog
      onClose={() => dispatch(Actions.closeChapterSlideDialog())}
      aria-labelledby='chapter-slide-dialog'
      open={dialog.open}
      fullWidth
      maxWidth='md'
    >
      <Toolbar>
        <DialogTitle id='simple-dialog-title'>Chapters</DialogTitle>
        <ArrowRightIcon />
        <DialogTitle id='simple-dialog-title'>
          {chapters ? chapters[activeStep]?.title : ''}
        </DialogTitle>
      </Toolbar>

      <DialogContent dividers>
        <div className={classes.root}>
          <Document
            // file="/assets/doc/studio.pdf"
            file={chapters[activeStep]?.fileUpload.path}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <MobileStepper
            steps={maxSteps}
            position='static'
            variant='text'
            activeStep={activeStep}
            nextButton={
              <Button
                size='small'
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size='small'
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

const mapStateToProps = ({ chapterReducer }) => {
  return {
    dialog: chapterReducer.chapter.chapterSlideDialog,
  };
};

export default withReducer(
  'chapterReducer',
  reducer
)(connect(mapStateToProps)(ChapterSlider));

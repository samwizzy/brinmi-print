import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import withReducer from './../../../../store/withReducer';
import reducer from './../../store/reducers';
import * as Actions from './../../store/actions';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  TextField,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import { Button, BrinmiUtils } from '@brinmi';
import DocDropzone from './DocDropzone';

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

function ChapterUploadDialog({ dialog, book, history }, props) {
  const dispatch = useDispatch();
  const classes = useStyles(props);
  const [form, setForm] = useState({
    chapter: [
      {
        file: '',
        fileExtension: '',
        number: 1,
        title: '',
      },
    ],
  });

  const handleDocUpload = (i) => (files) => {
    files.map((file) => {
      return BrinmiUtils.toBase64(file).then((data) => {
        let doc = {
          title: file.name.split('.')[0],
          file: data,
          fileExtension: `.${file.type.split('/')[1]}`,
        };
        const { chapter } = form;
        chapter[i] = { ...chapter[i], ...doc };
        setForm({ ...form, chapter });
      });
    });
  };

  const handleChange = (i) => (event) => {
    const { chapter } = form;
    chapter[i][event.target.name] = event.target.value;
    // chapter[i].number = i;
    setForm({ ...form, chapter });
  };

  const addChapter = () => {
    const newChapter = {
      file: '',
      fileExtension: '',
      number: form.chapter.length + 1,
      title: '',
    };
    setForm({ ...form, chapter: [...form.chapter, newChapter] });
  };

  const removeChapter = (i) => (event) => {
    setForm({ ...form, chapter: form.chapter.filter((c, k) => k !== i) });
  };

  const handleSubmit = () => {
    dispatch(Actions.uploadBookChapter(book.id, form));
  };

  console.log(form, 'form');
  console.log(book, 'book');

  return (
    <Dialog
      onClose={() => dispatch(Actions.closeChapterUploadDialog())}
      aria-labelledby='subscribe-dialog'
      open={dialog.open}
      className={classes.root}
    >
      <DialogContent dividers>
        <div className=''>
          {form.chapter.map((chapter, i) => (
            <Fragment key={i}>
              <IconButton onClick={removeChapter(i)}>
                <CloseIcon />
              </IconButton>

              <DocDropzone
                form={form}
                handleDocUpload={handleDocUpload(i)}
                row={i}
              />

              <TextField
                label='Title'
                name='title'
                variant='outlined'
                value={chapter.title}
                onChange={handleChange(i)}
                margin='dense'
                fullWidth
              />

              <TextField
                label='Number'
                name='number'
                variant='outlined'
                value={chapter.number}
                onChange={handleChange(i)}
                margin='dense'
                fullWidth
              />
            </Fragment>
          ))}

          <Button
            variant='contained'
            color='secondary'
            onClick={addChapter}
            startIcon={<AddIcon />}
          >
            Add Chapter
          </Button>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          color='secondary'
          variant='outlined'
          size='large'
          rounded
          onClick={() => dispatch(Actions.closeChapterUploadDialog())}
        >
          Close
        </Button>
        <Button
          color='secondary'
          variant='contained'
          size='large'
          rounded
          onClick={handleSubmit}
        >
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = ({ chapterReducer, auth }) => {
  return {
    dialog: chapterReducer.chapter.chapterUploadDialog,
    user: auth.user.data,
  };
};

export default withReducer(
  'chapterReducer',
  reducer
)(withRouter(connect(mapStateToProps)(ChapterUploadDialog)));

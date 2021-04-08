import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Actions from './../../store/actions';
import {
  Link,
  Table,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Button } from '@brinmi';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

export const handleDownload = (path) => (event) => {
  event.stopPropagation();
  const a = document.createElement('a');
  a.setAttribute('href', path);
  a.setAttribute('target', '_blank');
  a.click();
};

function Content(props) {
  const { chapters } = props;
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);

  const handleClick = (event, name) => {
    setSelected([]);
    // dispatch(Actions.openChapterSlideDialog(chapters));
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center space-x-2 px-4 py-2'>
        <h3 className='text-lg'>
          Categories <span>{chapters?.length}</span>
        </h3>
        <Button
          variant='contained'
          color='secondary'
          disableElevation
          onClick={() => dispatch(Actions.openChapterUploadDialog())}
        >
          Upload Chapter
        </Button>
      </div>
      {chapters?.length ? (
        <Table size='small'>
          <TableBody>
            {chapters.map((chapter, i) => {
              const isItemSelected = isSelected(chapter.title);
              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, chapter.title)}
                  role='checkbox'
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={i}
                  selected={isItemSelected}
                >
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>
                    Chapter {i + 1} — {chapter.title}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={handleDownload(chapter.fileUpload.path)}
                    >
                      <CloudDownloadIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <div className='px-4'>
          <Alert severity='info'>
            <AlertTitle>Heads up!</AlertTitle>
            This book has no chapter yet —{' '}
            <strong>
              <Link>upload chapters</Link> to this book!
            </strong>
          </Alert>
        </div>
      )}
    </div>
  );
}

export default withRouter(Content);

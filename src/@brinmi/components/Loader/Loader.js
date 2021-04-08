import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { ClipLoader } from 'react-spinners';

export function Loader(props) {
  return (
    <div className='w-full p-16 flex justify-center items-center'>
      <ClipLoader color='#81BB54' size='35px' />
    </div>
  );
}

export function Loading(props) {
  return (
    <div className='w-full p-16 flex justify-center items-center'>
      <ClipLoader color='#81BB54' size='35px' />
    </div>
  );
}

export function CircularLoader(props) {
  return (
    <div className='w-full p-16 flex justify-center items-center'>
      <CircularProgress />
    </div>
  );
}

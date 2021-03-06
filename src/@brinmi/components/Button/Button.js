import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '&.rounded': {
      borderRadius: theme.spacing(4),
    },
  },
}));

export default function ButtonComponent(props) {
  const classes = useStyles(props);
  const { className, rounded, ...others } = props;

  return (
    <Button
      className={clsx(
        classes.root,
        { rounded },
        className,
        'focus:outline-none'
      )}
      {...others}
    />
  );
}

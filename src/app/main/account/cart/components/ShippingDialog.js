import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from './../../../../store/actions';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@brinmi';
import { Dialog, DialogActions, DialogContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiPaper-rounded': {
      borderRadius: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      paddingBottom: theme.spacing(2),
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}));

function ShippingDialog(props) {
  const classes = useStyles(props);
  const { history } = props;
  const dispatch = useDispatch();
  const dialog = useSelector(({ cart }) => cart.cart.shippingDialog);

  const handleAccept = () => {
    dispatch(Actions.closeShippingDialog());
    history.push('/account/cart/shipping');
  };

  return (
    <Dialog
      className={classes.root}
      open={dialog.open}
      onClose={() => dispatch(Actions.closeShippingDialog())}
      aria-labelledby='shipping-notice'
    >
      <DialogContent>
        <div className='flex flex-col items-center space-y-4 py-4'>
          <h3 className='text-lg text-gray-600'>
            Do you want it shipped to you?
          </h3>
          <p className='text-sm font-extralight text-gray-500'>
            Shipping comes with extra cost
          </p>
        </div>
      </DialogContent>
      <DialogActions>
        <div className='flex flex-col space-y-1'>
          <Button
            size='large'
            variant='contained'
            color='secondary'
            rounded
            onClick={handleAccept}
          >
            Yes
          </Button>
          <Button
            size='large'
            variant='contained'
            color='secondary'
            rounded
            onClick={() => dispatch(Actions.closeShippingDialog())}
          >
            No
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
}

export default withRouter(ShippingDialog);

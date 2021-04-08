import React from 'react';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import withReducer from './../../../store/withReducer';
import * as appActions from './../../../store/actions';
import reducer from './../store/reducers';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Button, BrinmiUtils } from '@brinmi';
import ShippingDialog from './components/ShippingDialog';

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    display: 'flex',
    height: '250px',
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    '& .MuiCardContent-root': {
      width: '100%',
    },
    '& .MuiCardHeader-root': {
      position: 'absolute',
    },
  },
}));

export function Cart(props) {
  const classes = useStyles(props);
  const { openShippingDialog, deleteFromCart } = props;
  const carts = useSelector(({ cart }) => cart.cart.data);

  return (
    <div className='w-full bg-gray-50 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-4'>
          {carts.map((cart, i) => (
            <Card key={i} className={classes.card}>
              <CardHeader
                action={
                  <IconButton onClick={() => deleteFromCart(cart.id)}>
                    <CloseIcon />
                  </IconButton>
                }
              />
              <CardMedia
                className='w-full h-64'
                image='https://image.freepik.com/free-psd/high-angle-turned-open-book-mock-up_23-2148657114.jpg'
              />

              <CardContent>
                <div className='w-full'>
                  <h3 className='text-base'>{cart.book.title}</h3>
                  <p className='text-sm text-gray-600 mb-2 overflow-ellipsis overflow-hidden'>
                    {BrinmiUtils.truncate(cart.book.description, 120)}
                  </p>
                  <h3 className='text-lg font-light text-green mt-2'>
                    {BrinmiUtils.formatCurrency(cart.book.price)}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='flex items-center justify-between mt-8 px-2'>
          <h3 className='text-gray-800'>Total</h3>
          <h3 className='text-green'>
            {BrinmiUtils.formatCurrency(
              carts.reduce((n, row) => n + row.book.price, 0)
            )}
          </h3>
        </div>

        <div className='flex justify-start mt-8'>
          <Button
            variant='contained'
            color='secondary'
            size='large'
            rounded
            onClick={openShippingDialog}
          >
            Checkout
          </Button>
        </div>

        <ShippingDialog />
      </div>
    </div>
  );
}

const mapStateToProps = ({ cartReducer }) => {
  console.log(cartReducer, 'cartReducer');
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      openShippingDialog: appActions.openShippingDialog,
      deleteFromCart: appActions.deleteFromCart,
    },
    dispatch
  );
};

export default withReducer(
  'cartReducer',
  reducer
)(connect(mapStateToProps, mapDispatchToProps)(Cart));

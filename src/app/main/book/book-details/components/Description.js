import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Actions from './../../../../store/actions';
import clsx from 'clsx';
import { Button, BrinmiUtils } from '@brinmi';
import { Rating, Skeleton } from '@material-ui/lab';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';
import { handleDownload } from './Content';

const useStyles = makeStyles((theme) => ({
  button: {
    '&.color': { color: 'red' },
  },
}));

export default function Description(props) {
  const classes = useStyles(props);
  const {
    book,
    rating,
    user,
    cart,
    chapters /*openChapterSlideDialog*/,
  } = props;
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    bookId: 0,
    userId: 0,
  });

  useEffect(() => {
    if (book && user) {
      setForm({ bookId: book.id, userId: user.id });
    }
    return () => {};
  }, [book, user]);

  console.log(form, 'cart form');
  console.log(chapters, 'chapters form');

  const selectedCart = cart.find((c) => c.book.id === book?.id);

  console.log(selectedCart, 'selectedCart ');

  return (
    <div className='flex flex-col px-4'>
      <div className='border-t border-gray-200 mb-4'>
        <dl>
          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Ratings 4.9</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              <Rating
                name='customized-empty'
                size='small'
                value={rating ? rating.averageRatingValue : 0}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize='inherit' />}
              />
            </dd>
          </div>
        </dl>
        <dl>
          <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Price</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {book ? BrinmiUtils.formatCurrency(book.price) : <Skeleton />}
            </dd>
          </div>
        </dl>
        <dl>
          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>ISBN</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {book ? book.isbn : <Skeleton />}
            </dd>
          </div>
        </dl>
        <dl>
          <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Description</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {book ? book.description : <Skeleton />}
            </dd>
          </div>
        </dl>
      </div>

      <div className='flex items-center justify-evenly md:justify-start space-x-4'>
        <Button
          variant='outlined'
          color='secondary'
          className={clsx(classes.button, { color: selectedCart })}
          size='large'
          rounded
          onClick={() =>
            selectedCart
              ? dispatch(Actions.deleteFromCart(selectedCart.id))
              : dispatch(Actions.addToCart(form))
          }
        >
          {selectedCart ? 'Remove from cart' : 'Add to Cart'}
        </Button>
        <Button
          variant='contained'
          color='secondary'
          size='large'
          rounded
          // onClick={() => dispatch(openChapterSlideDialog(chapters))}
          onClick={
            chapters ? handleDownload(chapters[0].fileUpload.path) : () => {}
          }
        >
          Read
        </Button>
      </div>
    </div>
  );
}

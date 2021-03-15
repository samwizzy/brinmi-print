import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Actions from "./../../../../store/actions";
import { Button, BrinmiUtils } from "@brinmi";
import { Rating, Skeleton } from "@material-ui/lab";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default function Description(props) {
  const { book, rating, user, chapters, openChapterSlideDialog } = props;
  const dispatch = useDispatch();
  const [cart, setCart] = useState({
    bookId: 0,
    userId: 0,
  });

  useEffect(() => {
    if (book && user) {
      setCart({ bookId: book.id, userId: user.id });
    }
    return () => {};
  }, [book, user]);

  console.log(cart, "cart form");
  console.log(chapters, "chapters form");

  return (
    <div className="flex flex-col">
      <h3 className="flex items-center space-x-2 mb-2">
        <span className="text-base">Ratings 4.9</span>
        <Rating
          name="customized-empty"
          size="small"
          // defaultValue={2}
          value={rating ? rating.averageRatingValue : 0}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </h3>
      <p className="flex items-center space-x-2 mb-4">
        <span className="text-base text-gray-600">Price</span>
        <span>
          {book ? BrinmiUtils.formatCurrency(book.price) : <Skeleton />}
        </span>
      </p>

      <p className="text-lg mb-8">{book ? book.description : <Skeleton />}</p>

      <div className="flex items-center justify-evenly md:justify-start space-x-4">
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          rounded
          onClick={() => dispatch(Actions.addToCart(cart))}
        >
          Add to Cart
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          rounded
          onClick={() => dispatch(openChapterSlideDialog(chapters))}
        >
          Read
        </Button>
      </div>
    </div>
  );
}

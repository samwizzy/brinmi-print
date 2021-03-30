import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import withReducer from "./../../../store/withReducer";
import reducer from "./../store/reducers";
import * as Actions from "./../store/actions";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Paper,
  Tabs,
  Tab,
  IconButton,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import Description from "./components/Description";
import Content from "./components/Content";
import ChapterSlideDialog from "./dialog/ChapterSliderDialog";
import SubscribeDialog from "./dialog/SubscribeDialog";

const useStyles = makeStyles((theme) => ({
  tabs: {
    "& button:focus": {
      outline: "none",
    },
  },
  currentCard: {
    flexGrow: 1,
    position: "relative",
    borderRadius: theme.spacing(2),
    "& .MuiCardContent-root": {
      borderRadius: theme.spacing(2, 2, 0, 0),
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
    },
    "& .MuiCardHeader-action": {
      marginTop: 0,
      marginRight: 0,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.up("sm")]: {
      minHeight: "48px",
    },
  },
}));

export function BookDetails(props) {
  const classes = useStyles(props);
  const { book, rating, user, cart, openChapterSlideDialog } = props;
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  const { bookId } = useParams();

  useEffect(() => {
    dispatch(Actions.getBookById(bookId));
    dispatch(Actions.getBookRating(bookId));
    return () => { };
  }, [dispatch, bookId]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(bookId, "bookId bookDetailReducer");
  console.log(book, "book bookDetailReducer");
  console.log(user, "user bookDetailReducer");
  console.log(rating, "rating bookDetailReducer");
  console.log(cart, "cart bookDetailReducer");

  return (
    <div className="w-full bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <Card className={classes.currentCard}>
          <CardHeader
            title={book ? book.book.title : <Skeleton />}
            subheader={`by ${book ? book?.book?.publisher?.name : "loading..."
              }`}
            action={
              <IconButton>
                <img src="/assets/icons/upload.svg" className="h-6" alt="" />
              </IconButton>
            }
          />
          <CardMedia
            className="w-full h-screen"
            image="https://image.freepik.com/free-psd/top-view-bookss-with-pen-flowers_23-2148568929.jpg"
          />
          <CardContent>
            <Paper elevation={0}>
              <Tabs
                className={classes.tabs}
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="primary"
                centered
              >
                <Tab label="Description" />
                <Tab label="Content" />
              </Tabs>
            </Paper>

            <div className={classes.toolbar} />

            <div>
              {value === 0 && (
                <Description
                  book={book?.book}
                  rating={rating}
                  chapters={book?.chapters}
                  user={user}
                  cart={cart}
                  openChapterSlideDialog={openChapterSlideDialog}
                />
              )}
            </div>
            <div>{value === 1 && <Content chapters={book?.chapters} />}</div>
          </CardContent>
        </Card>

        <ChapterSlideDialog />
        <SubscribeDialog />
      </div>
    </div>
  );
}

const mapStateToProps = ({ bookDetailReducer, auth, cart }) => {
  console.log(bookDetailReducer, "bookDetailReducer");
  return {
    rating: bookDetailReducer.books.rating,
    book: bookDetailReducer.books.book,
    user: auth.user.data,
    cart: cart.cart.data
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      openChapterSlideDialog: Actions.openChapterSlideDialog,
    },
    dispatch
  );
};

export default withReducer(
  "bookDetailReducer",
  reducer
)(connect(mapStateToProps, mapDispatchToProps)(BookDetails));

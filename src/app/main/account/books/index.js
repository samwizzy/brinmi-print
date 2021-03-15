import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import withReducer from "./../../../store/withReducer";
// import * as Actions from "./../store/actions";
import * as appActions from "./../../../store/actions";
import reducer from "./../store/reducers";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    "& .MuiCardContent-root": {
      width: "100%",
    },
    "& .MuiCardActionArea-root": {
      "&:focus": {
        outline: "none",
      },
    },
  },
}));

const books = [
  {
    title: "Design Your Faith",
    description: "This is the description for this book",
    price: 150000,
  },
  {
    title: "Spiritual Guideline",
    description: "This is the description for this book",
    price: 120000,
  },
  {
    title: "Design Your Faith",
    description: "This is the description for this book",
    price: 450000,
  },
  {
    title: "Spiritual Guideline",
    description: "This is the description for this book",
    price: 720000,
  },
];

export function MyBooks(props) {
  const classes = useStyles(props);

  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-2xl md:text-3xl leading-8 tracking-tight font-extrabold text-gray-800">
            My Books
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {books.map((book, i) => (
            <Card key={i} className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className="w-full h-64"
                  image="https://image.freepik.com/free-psd/high-angle-turned-open-book-mock-up_23-2148657114.jpg"
                />

                <CardContent>
                  <div className="w-full">
                    <h3 className="text-base">{book.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {book.description}
                    </p>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ bookReducer }) => {
  console.log(bookReducer, "bookReducer");
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      openShippingDialog: appActions.openShippingDialog,
    },
    dispatch
  );
};

export default withReducer(
  "bookReducer",
  reducer
)(connect(mapStateToProps, mapDispatchToProps)(MyBooks));

import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import withReducer from "./../../store/withReducer";
import { makeStyles } from "@material-ui/core/styles";
import reducer from "./store/reducers";
import * as Actions from "./store/actions";
import { Card, CardContent } from "@material-ui/core";
import { BookCard, BookReadCard } from "@brinmi";
import ImageSlider from "./components/Slider";

const useStyles = makeStyles((theme) => ({
  cardImage: { width: "48px" },
}));

const promises = [
  {
    title: "Free Delivery",
    subtitle: "For all orders over $99",
    icon: "/assets/icons/startup.svg",
  },
  {
    title: "90 Days Return",
    subtitle: "If goods have problems",
    icon: "/assets/icons/return.svg",
  },
  {
    title: "Secure Payment",
    subtitle: "100% secure payment",
    icon: "/assets/icons/credit-card.svg",
  },
  {
    title: "24/7 Support",
    subtitle: "Dedicated support",
    icon: "/assets/icons/support.svg",
  },
];

function Home(props) {
  const classes = useStyles(props);
  const { books, getBooks } = props;

  useEffect(() => {
    getBooks();
    return () => {};
  }, [getBooks]);

  console.log(books, "books");

  return (
    <div>
      <div className="w-full bg-gray-50 pb-8 pt-4 border-0 border-b border-solid border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageSlider />
        </div>
      </div>

      <div className="w-full bg-green-light">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-8 gap-4 py-8">
            {promises.map((item, i) => (
              <Card key={i} className="col-span-6 md:col-span-2">
                <CardContent>
                  <div className="flex justify-around items-center p-2">
                    <img src={item.icon} alt="" className={classes.cardImage} />
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-base">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left">
            <h2 className=" text-2xl text-gray-800 font-semibold tracking-wide uppercase">
              Featured Books
            </h2>
          </div>

          <div className="mt-6">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
              {books &&
                books.map((book, i) => <BookCard key={i} book={book} />)}
            </dl>
          </div>
        </div>
      </div>

      <div className="py-12 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <p className="text-2xl md:text-3xl leading-8 tracking-tight font-extrabold text-gray-900">
            Currently Reading
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-4">
            {books &&
              books.map((book, i) => <BookReadCard key={i} book={book} />)}
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left">
            <h2 className=" text-2xl text-gray-800 font-semibold tracking-wide uppercase">
              Recently Published Books
            </h2>
          </div>

          <div className="mt-6">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
              {books &&
                books.map((book, i) => <BookCard key={i} book={book} />)}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ booksReducer }) => {
  return {
    books: booksReducer.books.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBooks: Actions.getBooks,
    },
    dispatch
  );
};

export default withReducer(
  "booksReducer",
  reducer
)(connect(mapStateToProps, mapDispatchToProps)(Home));

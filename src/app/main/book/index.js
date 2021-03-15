import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import withReducer from "./../../store/withReducer";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Tabs,
  Tab,
} from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";
import * as Actions from "./store/actions";
import * as appActions from "./../../store/actions";
import reducer from "./store/reducers";
import { BookCard } from "@brinmi";
import {
  Finance,
  Family,
  Relationship,
  Exclusive,
  All,
  Children,
  Adult,
} from "./category";
import CategoryDialog from "./category/components/CategoryDialog";

const useStyles = makeStyles((theme) => ({
  tabs: {
    "& button:focus": {
      outline: "none",
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

function BookApp(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const books = useSelector(({ bookReducer }) => bookReducer.books.books);
  const categories = useSelector(({ books }) => books.category.categories);

  useEffect(() => {
    dispatch(Actions.getBooks());
    return () => {};
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(books, "books");

  return (
    <div>
      <div className="w-full bg-green-light">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className={classes.root}>
            <AppBar position="static" color="default">
              <Tabs
                className={classes.tabs}
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="All" {...a11yProps(0)} />
                <Tab label="Exclusive" {...a11yProps(1)} />
                <Tab label="Finance" {...a11yProps(2)} />
                <Tab label="Relationship" {...a11yProps(3)} />
                <Tab label="Children" {...a11yProps(4)} />
                <Tab label="Family" {...a11yProps(5)} />
                <Tab label="Adult" {...a11yProps(6)} />
              </Tabs>
            </AppBar>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-800 text-xl">Category</h3>
                <IconButton
                  size="small"
                  onClick={() => dispatch(appActions.openCategoryDialog())}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </div>
              <List dense>
                {categories.map((category, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemText primary={category.title} />
                    <ListItemSecondaryAction>
                      <IconButton size="small" edge="end" aria-label="more">
                        <MoreIcon fontSize="small" />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </div>
            <div className="col-span-10">
              <TabPanel value={value} index={0}>
                <All books={books} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Exclusive books={books} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Finance books={books} />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Relationship books={books} />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Children books={books} />
              </TabPanel>
              <TabPanel value={value} index={5}>
                <Family books={books} />
              </TabPanel>
              <TabPanel value={value} index={6}>
                <Adult books={books} />
              </TabPanel>
            </div>
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
              {books.map((book, i) => (
                <BookCard key={i} book={book} />
              ))}
            </dl>
          </div>
        </div>
      </div>

      <CategoryDialog />
    </div>
  );
}

export default withReducer("bookReducer", reducer)(BookApp);

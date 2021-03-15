import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import withReducer from "./../../store/withReducer";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Box, Tabs, Tab } from "@material-ui/core";
import * as Actions from "./store/actions";
import reducer from "./store/reducers";
import { BookCard } from "@brinmi";
import _ from "lodash";
import FinanceCategory from "./books/FinanceCategory";

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

function AccountApp(props) {
  const classes = useStyles(props);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

      <TabPanel value={value} index={0}>
        <FinanceCategory />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FinanceCategory />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FinanceCategory />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <FinanceCategory />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <FinanceCategory />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <FinanceCategory />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <FinanceCategory />
      </TabPanel>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left">
            <h2 className=" text-2xl text-gray-800 font-semibold tracking-wide uppercase">
              Recently Published Books
            </h2>
          </div>

          <div className="mt-6">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
              {_.range(0, 4).map((item, i) => (
                <BookCard key={i} />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ accountReducer }) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBooks: Actions.getBooks,
      getCart: Actions.getCart,
    },
    dispatch
  );
};

export default withReducer(
  "accountReducer",
  reducer
)(connect(mapStateToProps, mapDispatchToProps)(AccountApp));

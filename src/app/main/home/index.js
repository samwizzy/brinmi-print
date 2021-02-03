import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import withReducer from "./../../store/withReducer";
import { makeStyles } from "@material-ui/core/styles";
import reducer from "./../../auth/store/reducers";
import * as authActions from "./../../auth/store/actions";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
} from "@material-ui/core";
import products from "./products.json";
import RegisterForm from "./components/RegisterForm";
import Slider from "./components/Slider";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    "& .MuiCardContent-root": {
      height: "100%",
    },
    "& .MuiCardActions-root": {
      padding: theme.spacing(2),
    },
  },
}));

function Home(props) {
  const classes = useStyles(props);

  return (
    <div>
      <Slider />
      {/* <Banner /> */}

      <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-6 gap-8 py-8">
          <div className="col-span-6 md:col-span-4">
            <h2 className="text-2xl sm:text-3xl text-gray-900 mb-4">
              About Flare
            </h2>
            <p className="tracking-wide text-lg text-gray-800">
              Flare is an Optisoft initiative, over the years, Optisoft has
              built a handful of applications and thought to make our users part
              of this journey. It is bent on this and other request, we would
              like you to collaborate with us to grow sales and patronage and
              receive commission everytime will get engagement on our products &
              services. These are all the good reason that has led to the
              emergence of Flare, a program that allows you to become a
              consultant with us in a bid to get our solutions available to the
              right customers.
            </p>
          </div>
          <div className="col-span-6 md:col-span-2">
            <img
              src="https://image.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg"
              alt=""
              className="w-full"
            />
          </div>
        </div>

        <Divider />
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What it promises
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              The main reason why we are in business is to make life less
              difficult for our clients
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Competitive commission rates
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    You stand a chance of gaining full access to all our
                    in-house products. You can also attract revenue by selling
                    our product, and get an attractive commision everytime you
                    sell.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    No hidden fees
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    You stand a chance of gaining full access to all our
                    in-house products. You can also attract revenue by selling
                    our product, and get an attractive commision everytime you
                    sell.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Transfers are instant
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    You stand a chance of gaining full access to all our
                    in-house products. You can also attract revenue by selling
                    our product, and get an attractive commision everytime you
                    sell.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Mobile notifications
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    You stand a chance of gaining full access to all our
                    in-house products. You can also attract revenue by selling
                    our product, and get an attractive commision everytime you
                    sell..
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="py-12 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <p className="text-2xl md:text-3xl leading-8 tracking-tight font-extrabold text-gray-900">
            Flare Products
          </p>
          <span className="text-gray-600 text-lg">
            Some of our finest products for your day-to-day business operations
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {products.slice(0, 7).map((product, i) => (
              <Card key={i} className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar
                      style={{ background: product.color }}
                      variant="rounded"
                    >
                      {product.name[0]}
                    </Avatar>
                  }
                  titleTypographyProps={{ variant: "h6" }}
                  title={product.name}
                  subheader={product.subtitle}
                />
                <CardContent>
                  <p className="text-gray-600 text-base">
                    {product.description}
                  </p>
                </CardContent>
                <CardActions>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={product.url}
                    className="border border-solid block border-indigo rounded-sm px-4 py-2 uppercase no-underline text-indigo"
                  >
                    Learn more
                  </a>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 px-4" id="register">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4x1 tracking-wider leading-8 text-gray-800 mt-2">
            Let's Onboard You
          </h2>
          <span className="text-gray-600 text-sm">
            Some of our finest products for your day-to-day business operations
          </span>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mt-8">
            <div className="col-span-2">
              <div className="min-h-screen py-2 flex flex-col justify-center">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo to-green-dark shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                  <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                      <div>
                        <img
                          src="/img/logo.svg"
                          alt=""
                          className="h-7 sm:h-8"
                        />
                      </div>
                      <div className="divide-y divide-gray-200">
                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                          <p>
                            An online platform that cares about you enough to
                            keep in touch, help us meet you at the point of your
                            need:
                          </p>
                          <ul className="list-disc space-y-2">
                            <li className="flex items-start">
                              <span className="h-6 flex items-center sm:h-7">
                                <svg
                                  className="flex-shrink-0 h-5 w-5 text-cyan-500"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                              <p className="ml-2">Our Products</p>
                            </li>
                            <li className="flex items-start">
                              <span className="h-6 flex items-center sm:h-7">
                                <svg
                                  className="flex-shrink-0 h-5 w-5 text-cyan-500"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                              <p className="ml-2">Our brands</p>
                            </li>
                            <li className="flex items-start">
                              <span className="h-6 flex items-center sm:h-7">
                                <svg
                                  className="flex-shrink-0 h-5 w-5 text-cyan-500"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                              <p className="ml-2">Our Software</p>
                            </li>
                          </ul>
                          <p>
                            We will never breach on our terms or use your data
                            for reasons against your will.
                          </p>
                        </div>
                        <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                          <p>Want to dig deeper into Flare?</p>
                          <p>
                            <a
                              href="https://flare.optisoft.ng"
                              className="text-cyan-600 hover:text-cyan-700"
                            >
                              {" "}
                              Read more &rarr;{" "}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ auth }) => {
  console.log(auth, "auth");
  return {
    loading: auth.register.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      register: authActions.register,
    },
    dispatch
  );
};

export default withReducer(
  "homeApp",
  reducer
)(connect(mapStateToProps, mapDispatchToProps)(Home));

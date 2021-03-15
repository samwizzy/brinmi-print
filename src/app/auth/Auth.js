import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "./../store/actions";

export class Auth extends Component {
  constructor(props) {
    super(props);

    this.props.getCategories();
  }

  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getCategories: Actions.getCategories,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

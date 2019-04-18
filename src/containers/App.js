import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchShows } from "../actions/actions";
import PageLoader from "./PageLoader";
import TableRenderer from "./TableRenderer";
import SearchRunner from "./SearchRunner";

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchShows());
  }

  render() {
    return (
      <div className="container">
        <SearchRunner />
        <TableRenderer />
        <PageLoader />
      </div>
    );
  }
}

export default connect()(App);

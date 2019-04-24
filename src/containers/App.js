import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchShows } from "../actions/actions";
import PageLoader from "./PageLoader";
import TableRenderer from "./TableRenderer";
import SearchRunner from "./SearchRunner";
import RestoreToInitialState from "./RestoreToInitialState";

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchShows());
  }

  render() {
    return (
      <div className="container">
        <RestoreToInitialState />
        <SearchRunner />
        <TableRenderer />
        <PageLoader />
      </div>
    );
  }
}

export default connect()(App);

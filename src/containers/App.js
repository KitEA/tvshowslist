import React, { Component } from "react";
import ShowsTable from "../components/ShowsTable";
import ShowTableRow from "../components/ShowTableRow";
import PageSelector from "../components/PageSelector";
import { connect } from "react-redux";
import { previousPage, nextPage, sortShows, setSortOrder, fetchShows } from "../actions/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.showTabRow = this.showTabRow.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.sortByHeader = this.sortByHeader.bind(this);
  }

  showTabRow() {
    const { shows, currentPage } = this.props;
    return shows.map((show, index) => (
      <ShowTableRow
        number={index+1 + (currentPage-1)*3}
        title={show.title}
        year={show.year}
        poster={show.poster}
        key={index}
      />
    ));
  }

  sortByHeader(headerKey) {
    const { dispatch, shows, sort } = this.props;
    dispatch(sortShows(shows, headerKey, sort));
    if (sort === "asc") {
      dispatch(setSortOrder("desc"));
    } else if (sort === "desc") {
      dispatch(setSortOrder("asc"));
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchShows());
  }

  previousPage() {
    const { dispatch } = this.props;
    dispatch(previousPage());
    dispatch(fetchShows());
  }

  nextPage() {
    const { dispatch } = this.props;
    dispatch(nextPage());
    dispatch(fetchShows());
  }

  render() {
    return (
      <div>
        {/* SearchBar */}
        <ShowsTable showTabRow={this.showTabRow} sortByHeader={this.sortByHeader} />
        <PageSelector previousPage={this.previousPage} nextPage={this.nextPage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shows: state.shows,
  currentPage: state.currentPage,
  sort: state.sort
});

export default connect(mapStateToProps)(App);

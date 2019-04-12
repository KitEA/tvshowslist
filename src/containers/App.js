import React, { Component } from "react";
import ShowsTable from "../components/ShowsTable";
import ShowTableRow from "../components/ShowTableRow";
import PageSelector from "../components/PageSelector";
import SearchBar from "../components/SearchBar";
import { connect } from "react-redux";
import {
  previousPage,
  nextPage,
  sortShows,
  setSortOrder,
  fetchShows,
  searchByColumn,
  changeSearchValue
} from "../actions/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.showTabRow = this.showTabRow.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.sortByHeader = this.sortByHeader.bind(this);
    this.searchByColumn = this.searchByColumn.bind(this);
  }

  showTabRow() {
    const { shows, searchResults, currentPage } = this.props;
    if (searchResults && searchResults.length === 0) {
      return shows.map((show, index) => (
        <ShowTableRow
          number={index + 1 + (currentPage - 1) * 3}
          title={show.title}
          year={show.year}
          poster={show.poster}
          key={index}
        />
      ));
    } else {
      return searchResults.map((show, index) => (
        <ShowTableRow
          number={index + 1 + (currentPage - 1) * 3}
          title={show.title}
          year={show.year}
          poster={show.poster}
          key={index}
        />
      ));
    }
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

  searchByColumn(event) {
    const { dispatch } = this.props;
    dispatch(changeSearchValue(event.target.value));
    if (this.props.search === "") {
      return;
    } else {
      const { shows, search } = this.props;
      dispatch(searchByColumn(shows, search));
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
        <SearchBar
          searchBarValue={this.props.search}
          searchByColumn={this.searchByColumn}
        />
        <ShowsTable
          showTabRow={this.showTabRow}
          sortByHeader={this.sortByHeader}
        />
        <PageSelector
          previousPage={this.previousPage}
          nextPage={this.nextPage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shows: state.shows,
  currentPage: state.currentPage,
  sort: state.sort,
  search: state.search,
  searchResults: state.searchResults
});

export default connect(mapStateToProps)(App);

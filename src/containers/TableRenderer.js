import { connect } from "react-redux";
import { sortShows, setSortOrder } from "../actions/actions";
import ShowsTable from "../components/ShowsTable";

const mapStateToProps = state => {
  const { shows, searchResults, currentPage, sort } = state;
  return {
    shows: shows,
    searchResults: searchResults,
    currentPage: currentPage,
    sort: sort
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sortByHeader: (headerKey, shows, sort) => {
      dispatch(sortShows(shows, headerKey, sort));
      if (sort === "asc") {
        dispatch(setSortOrder("desc"));
      } else if (sort === "desc") {
        dispatch(setSortOrder("asc"));
      }
    }
  };
};

const mergeProps = (stateProps, dispatchProps) => {
    return {
        ...stateProps,
        ...dispatchProps,
        sortByHeader: headerKey => {
            dispatchProps.sortByHeader(
                headerKey,
                stateProps.shows,
                stateProps.sort
            )
        }
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ShowsTable);

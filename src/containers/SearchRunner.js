import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import { changeSearchValue, searchByColumn } from "../actions/actions";

const mapStateToProps = state => {
  const { search, shows } = state;
  return {
    searchBarValue: search,
    shows: shows
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchByColumn: (event, shows) => {
      const currentSearchBarValue = event.target.value;
      dispatch(changeSearchValue(currentSearchBarValue));
      dispatch(searchByColumn(shows, currentSearchBarValue));
    }
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    searchByColumn: event => {
      dispatchProps.searchByColumn(event, stateProps.shows);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SearchBar);

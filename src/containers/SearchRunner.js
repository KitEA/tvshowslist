import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import { changeSearchValue, fetchShows } from "../actions/actions";

const mapStateToProps = state => {
  const { search, shows } = state;
  return {
    searchBarValue: search,
    shows: shows
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchBarValueChange: event => {
      const currentSearchBarValue = event.target.value;
      dispatch(changeSearchValue(currentSearchBarValue));
    },
    searchByColumn: event => {
      if (event.key === "Enter") {
        dispatch(fetchShows());
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

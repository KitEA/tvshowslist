import { connect } from "react-redux";
import {
  changeSearchValue,
  fetchShows,
  startEndSearch,
  resetPage
} from "../actions/actions";
import Home from "../components/Home";

const mapStateToProps = state => {
  const { searchStatus } = state;
  return {
    searchStatus: searchStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: searchStatus => {
      dispatch(changeSearchValue(""));
      if (searchStatus === true) {
        dispatch(startEndSearch());
      }
      dispatch(resetPage());
      dispatch(fetchShows());
    }
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    onClick: () => {
      dispatchProps.onClick(stateProps.searchStatus);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Home);

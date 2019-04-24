import { connect } from "react-redux";
import {
  changeSearchValue,
  fetchShows,
  resetPage
} from "../actions/actions";
import Home from "../components/Home";

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(changeSearchValue(""));
      dispatch(resetPage());
      dispatch(fetchShows());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);

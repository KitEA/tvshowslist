import { connect } from "react-redux";
import { previousPage, nextPage, fetchShows } from "../actions/actions";
import PageSelector from "../components/PageSelector";

const mapDispatchToProps = dispatch => {
  return {
    previousPage: () => {
      dispatch(previousPage());
      dispatch(fetchShows());
    },
    nextPage: () => {
      dispatch(nextPage());
      dispatch(fetchShows());
    }
  };
};

export default connect(null, mapDispatchToProps)(PageSelector);

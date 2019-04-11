import React, { Component } from "react";
import ShowsTable from "../components/ShowsTable";
import ShowTableRow from "../components/ShowTableRow";
import PageSelector from "../components/PageSelector";
import { connect } from "react-redux";
import { fetchShowsWithPosters, previousPage, nextPage } from "../actions/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.showTabRow = this.showTabRow.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  showTabRow() {
    const { shows, posters, currentPage } = this.props;
    return shows.map((show, index) => (
      <ShowTableRow
        number={index+1 + (currentPage-1)*3}
        title={show.title}
        year={show.year}
        poster={posters[index]}
        key={index}
      />
    ));
  }

  componentDidMount() {
    const { dispatch} = this.props;
    dispatch(fetchShowsWithPosters());
  }

  previousPage() {
    const { dispatch } = this.props;
    dispatch(previousPage());
    dispatch(fetchShowsWithPosters());
  }

  nextPage() {
    const { dispatch } = this.props;
    dispatch(nextPage());
    dispatch(fetchShowsWithPosters());
  }

  render() {
    return (
      <div>
        {/* SearchBar */}
        <ShowsTable showTabRow={this.showTabRow} />
        <PageSelector previousPage={this.previousPage} nextPage={this.nextPage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shows: state.shows,
  posters: state.posters,
  currentPage: state.currentPage
});

export default connect(mapStateToProps)(App);

import React, { Component } from "react";
import ShowsTable from "../components/ShowsTable";
import ShowTableRow from "../components/ShowTableRow";
import { connect } from "react-redux";
import { fetchShowsWithPosters } from "../actions/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.showTabRow = this.showTabRow.bind(this);
  }

  showTabRow() {
    const { shows, showsPosters } = this.props;
    return shows.map((show, index) => (
      <ShowTableRow
        number={index}
        title={show.show.title}
        year={show.show.year}
        poster={showsPosters[index]}
        watchers={show.watchers}
        key={index}
      />
    ));
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchShowsWithPosters());
  }

  render() {
    return (
      <div>
        {/* SearchBar */}
        <ShowsTable showTabRow={this.showTabRow} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shows: state.shows,
  showsPosters: state.showsPosters
});

export default connect(mapStateToProps)(App);

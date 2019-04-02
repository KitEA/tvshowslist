import React, { Component } from "react";
import ShowTableRow from "./ShowTableRow";
import ShowsTable from "./ShowsTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      showsPosters: [],
      search: ""
    };

    this.showTabRow = this.showTabRow.bind(this);
    this.fetchPosterForEachShow = this.fetchPosterForEachShow.bind(this);
  }

  showTabRow() {
    const { shows, showsPosters } = this.state;
    return shows.map((show, index) => <ShowTableRow title={show.show.title} year={show.show.year} showPoster={showsPosters[index]} key={index} /> );
  }

  fetchPosterForEachShow(showId) {
    fetch("http://img.omdbapi.com/?apikey=6f97ef4f&i=" + showId)
      .then(response => response.blob())
      .then(image => {
        let outside = URL.createObjectURL(image);
        console.log(outside);
        this.setState([...this.state.showsPosters, outside], () => {
          console.log(this.state.showsPosters)
        });
      });
  }

  componentDidMount() {
    fetch("https://api.trakt.tv/shows/trending/?page=1&limit=1", {
      headers: {
        "Content-type": "application/json",
        "trakt-api-key":
          "d56205660f8aec540a91eec775156734f9b6c192890babc46c0efa9d95d297fc",
        "trakt-api-version": "2"
      }
    })
      .then(response => response.json())
      .then(shows => {
        this.setState({ shows: shows });

        this.state.shows.map(show => {
          let showId = show.show.ids.imdb;
          this.fetchPosterForEachShow(showId);
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        Search:{" "}
        <input
          value={this.state.search}
          onChange={e => this.setState({ search: e.target.value })}
        />
        <ShowsTable showTabRow={this.showTabRow} />
      </div>
    );
  }
}

export default App;

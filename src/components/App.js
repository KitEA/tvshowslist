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
    return this.state.shows.map((show, index) => {
      return (
        <ShowTableRow title={show.show.title} year={show.show.year} key={index} />
      );
    });
  }

  fetchPosterForEachShow(showsPosters, showId) {
    fetch("http://webservice.fanart.tv/v3/tv/" + showId, {
      headers: {
        "Content-type": "application/json",
        "api-key": "f17f6cf829e8d3c701824f1e86a32770"
      }
    })
      .then(response => {
        response.json();
      })
      .then(showArt => {
        showsPosters.push(showArt.showposter[0].url);
      })
      .catch(error => console.error(error));
  }

  componentDidMount() {
    fetch("https://api.trakt.tv/shows/trending/?page=1&limit=5", {
      headers: {
        "Content-type": "application/json",
        "trakt-api-key":
          "d56205660f8aec540a91eec775156734f9b6c192890babc46c0efa9d95d297fc",
        "trakt-api-version": "2"
      }
    })
      .then(response => response.json())
      .then(shows => {
        this.setState({ shows: shows }, () => console.log(this.state.shows));
        
        let showsPosters = [];
        this.state.shows.map(show => {
          let showId = show.show.ids.tmdb;
          this.fetchPosterForEachShow(showsPosters, showId);
        });

        this.setState({ showsPosters: showsPosters }, () => console.log(this.state.showsPosters));
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
        <ShowsTable
          showTabRow={this.showTabRow}
        />
      </div>
    );
  }
}

export default App;

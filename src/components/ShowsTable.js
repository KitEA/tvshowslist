import React from "react";
import ShowsTableHeader from "./ShowsTableHeader";
import ShowTableRow from "../components/ShowTableRow";

const ShowsTable = ({ sortByHeader, shows, searchResults, currentPage }) => {
  
  const itemsPerPage = 3;
  const ensureProperNumberColumn = 1;
  const firstPageShouldNotMultiplicate = 1;

  const showTabRowComponent = (show, pageCount) => {
    return (
      <ShowTableRow
        number={pageCount + ensureProperNumberColumn + (currentPage - firstPageShouldNotMultiplicate) * itemsPerPage}
        title={show.title}
        year={show.year}
        poster={show.poster}
        key={pageCount}
      />
    );
  };

  const showTabRowGenerator = () => {
    if (searchResults && searchResults.length === 0) {
      return shows.map((show, pageCount) => (
        showTabRowComponent(show, pageCount)
      ));
    } else {
      return searchResults.map((show, pageCount) => (
        showTabRowComponent(show, pageCount)
      ));
    }
  };

  return (
    <table>
      <thead>
        <ShowsTableHeader sortByHeader={sortByHeader} />
      </thead>
      <tbody>{showTabRowGenerator()}</tbody>
    </table>
  );
};

export default ShowsTable;

import React from "react";
import ShowsTableHeader from "./ShowsTableHeader";
import ShowTableRow from "../components/ShowTableRow";
import PropTypes from "prop-types";

const ShowsTable = ({ sortByHeader, shows, isFetching, currentPage }) => {
  const itemsPerPage = 3;
  const numberShouldNotStartFromZero = 1;
  const firstPageShouldNotMultiplicate = 1;

  const showTabRowComponent = (show, pageCount) => {
    return (
      <ShowTableRow
        number={
          pageCount +
          numberShouldNotStartFromZero +
          (currentPage - firstPageShouldNotMultiplicate) * itemsPerPage
        }
        title={show.title}
        year={show.year}
        poster={show.poster}
        key={pageCount}
      />
    );
  };

  const showTabRowGenerator = () => {
    return shows.map((show, pageCount) => showTabRowComponent(show, pageCount));
  };

  const loadingOrData = () => {
    //console.log(isFetching);
    if (shows.length === 0 || isFetching) {
      return <div className="loader" />;
    } else {
      return (
        <table className="data-table">
          <thead>
            <ShowsTableHeader sortByHeader={sortByHeader} />
          </thead>
          <tbody>{showTabRowGenerator()}</tbody>
        </table>
      );
    }
  };

  return loadingOrData();
};

ShowsTable.propTypes = {
  sortByHeader: PropTypes.func.isRequired,
  shows: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default ShowsTable;

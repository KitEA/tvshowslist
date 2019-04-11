import React from "react";
import ShowsTableHeader from "./ShowsTableHeader";

const ShowsTable = ({ sortByHeader, showTabRow }) => {
  return (
    <table>
      <thead>
        <ShowsTableHeader sortByHeader={sortByHeader} />
      </thead>
      <tbody>{showTabRow()}</tbody>
    </table>
  );
};

export default ShowsTable;

import React from "react";
import ShowsTableHeader from "./ShowsTableHeader";

const ShowsTable = ({ showTabRow }) => {
  return (
    <table>
      <thead>
        <ShowsTableHeader />
      </thead>
      <tbody>{showTabRow()}</tbody>
    </table>
  );
};

export default ShowsTable;

import React from "react";

const ShowsTableHeader = ({ sortByHeader }) => {
  return (
    <tr>
      <th>Number</th>
      <th onClick={() => sortByHeader('title')}>Title</th>
      <th onClick={() => sortByHeader('year')}>Year</th>
      <th>Poster</th>
    </tr>
  );
};

export default ShowsTableHeader;
import React from "react";

const ShowsTableHeader = ({ sortByHeader }) => {
  return (
    <tr>
      <th>Number</th>
      <th onClick={() => sortByHeader('title')}>Title</th> {/* onClick={sortByHeader('title')} */}
      <th>Year</th> {/* onClick={sortByHeader('year')} */}
      <th>Poster</th>
    </tr>
  );
};

export default ShowsTableHeader;
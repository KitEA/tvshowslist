import React from "react";

const ShowsTableHeader = (onClick) => {
  return (
    <tr>
      <th onClick={onClick}>Number</th>
      <th onClick={onClick}>Title</th>
      <th onClick={onClick}>Year</th>
      <th onClick={onClick}>Poster</th>
      <th onClick={onClick}>Watchers</th>
    </tr>
  );
};

export default ShowsTableHeader;
import React from "react";
import PropTypes from 'prop-types';

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

ShowsTableHeader.propTypes = {
  sortByHeader: PropTypes.func.isRequired
}

export default ShowsTableHeader;
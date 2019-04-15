import React from "react";
import PropTypes from 'prop-types';

const ShowTableRow = ({number, title, year, poster}) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{title}</td>
      <td>{year}</td>
      <td><img src={poster} alt=""></img></td>
    </tr>
  );
};

ShowTableRow.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired
}

export default ShowTableRow;

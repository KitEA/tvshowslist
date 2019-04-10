import React from "react";

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

export default ShowTableRow;

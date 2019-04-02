import React from "react";

const ShowTableRow = ({title, year, poster}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{year}</td>
      <td><img src={poster} alt=""></img></td>
    </tr>
  );
};

export default ShowTableRow;

import React from "react";

const ShowTableRow = ({number, title, year, poster, watchers}) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{title}</td>
      <td>{year}</td>
      <td><img src={poster} alt=""></img></td>
      <td>{watchers}</td>
    </tr>
  );
};

export default ShowTableRow;

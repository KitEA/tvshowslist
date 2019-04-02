import React from "react";

const ShowTableRow = ({title, year, poster}) => {
  return (
    <tr>
      {/* <td>{this.props.obj.number}</td>
      <td>{this.props.obj.poster}</td> */}
      <td>{title}</td>
      <td>{year}</td>
      <td><img src={poster} alt=""></img></td>
    </tr>
  );
};

export default ShowTableRow;

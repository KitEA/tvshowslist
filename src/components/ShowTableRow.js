import React from "react";

const ShowTableRow = ({title, year}) => {
  return (
    <tr>
      {/* <td>{this.props.obj.number}</td>
      <td>{this.props.obj.poster}</td> */}
      <td>{title}</td>
      <td>{year}</td>
    </tr>
  );
};

export default ShowTableRow;

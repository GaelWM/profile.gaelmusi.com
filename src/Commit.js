import React from "react";

const Commit = props => {
  return (
    <li key={props.index} className="list-group-item list-group-item-action">
      {props.message}
    </li>
  );
};

export default Commit;

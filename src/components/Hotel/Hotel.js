import React from "react";

const Hotel = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.picture}></img>
    </div>
  );
};
export default Hotel;

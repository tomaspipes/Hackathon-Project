import React from "react";

function Testemonials(props) {
  const mystyle={
    textAlign:"center",
    alignSelf:"center",
    margin:"20px"
  }
  return (
    <div className="note">
      <h1 style = {mystyle}>{props.name}</h1>
      <p style = {mystyle}>{props.content}</p>
    </div>
  );
}

export default Testemonials;
import React from "react";
import "./Person.css";
const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>Hello, My name is {props.name} and I'm {props.age} years old. </p>
      <p>{props.children}</p>
      <input typ="text" onChange={props.inputNameChange} value={props.name}/>
    </div>
  )
}

export default person;
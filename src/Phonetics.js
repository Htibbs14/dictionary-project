import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics);
  if (props.phonetics.audio) {
    return (
      <div className="Phonetics">
        <span>
          <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
            Listen
          </a>
        </span>
        <span>{props.phonetics.text}</span>
      </div>
    );
  } else {
    return null;
  }
}

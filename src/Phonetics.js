import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  if (props.phonetics.audio) {
    return (
      <div className="Phonetics">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <br />
        {props.phonetics.text}
      </div>
    );
  } else {
    return null;
  }
}
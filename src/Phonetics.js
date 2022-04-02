import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetics.audio) {
    return (
      <div className="Phonetics">
        <span>
          <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
            <i class="fa-solid fa-volume-high"></i>
          </a>
        </span>
        <span>{props.phonetics.text}</span>
      </div>
    );
  } else {
    return null;
  }
}

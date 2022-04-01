import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  console.log(props.meaning);
  return (
    <div className="Meanings">
      <h3 className="word">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (definition.example) {
          return (
            <div key={index}>
              <p className="definition">
                {definition.definition}
                <br />
                <em className="example">Example: "{definition.example}"</em>
              </p>
              <span>
                <Synonyms synonyms={props.meaning.synonyms} />
              </span>
              <br />
            </div>
          );
        } else {
          return (
            <div key={index}>
              <p className="definition">{definition.definition}</p>
              <br />
            </div>
          );
        }
      })}
    </div>
  );
}

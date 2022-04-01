import React from "react";
import "./Results.css";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="Results-container">
          <section>
            <h2 className="word-result">{props.results.word}</h2>
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetics phonetics={phonetic} />
                </div>
              );
            })}
          </section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meanings meaning={meaning} />
              </section>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

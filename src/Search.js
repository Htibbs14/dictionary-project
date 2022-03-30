import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [searchWord, setSearchWord] = useState();

  function handleResponse(response) {
    console.log(response.data);
  }

  function wordSearch(event) {
    event.preventDefault();
    alert(`Searching for ${searchWord}`);

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(apiURL).then(handleResponse);
  }

  function wordInput(event) {
    setSearchWord(event.target.value);
  }

  return (
    <div className="Search">
      <div className="container form-container">
        <form onSubmit={wordSearch}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a word..."
                className="form-control search-bar"
                onChange={wordInput}
              />
            </div>
            <div className="col-3">
              <input type="submit" className="btn btn-primary" value="Search" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

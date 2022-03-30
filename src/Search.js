import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="container form-container">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a word"
                className="form-control search-bar"
              />
            </div>
            <div className="col-3">
              <input type="submit" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

import "./SearchForm.css";
import React, { useState } from "react";

export default function SearchForm() {
  // ID 받아옴
  const [value, setValues] = useState("");

  // Input에 있는 값(id)를 value에 넣음
  const onValidId = (event) => {
    setValues(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <div className="SearchForm">
      <div className="title">
        <h1>Anonymous LOL viewer</h1>

        <p>Enter username in search bar using forramts username</p>
      </div>
      <form className="f-search" onSubmit={handleSubmit}>
        <div className="f-container">
          <div className="f-input">
            <input
              type="text"
              placeholder="Enter your username"
              onChange={onValidId}
            ></input>
            <button className="search-button"></button>
          </div>
        </div>
      </form>
    </div>
  );
}

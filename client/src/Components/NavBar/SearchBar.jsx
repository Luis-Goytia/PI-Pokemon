import React from "react";
import { useState } from "react";
import { containsSpecialChars } from "../CreatePokemon/validators";
import { Link } from "react-router-dom";
import search from "../../resources/Images/search.png";
import "./SearchBar.css";
export default function SearchBar() {
  const [name, setName] = useState("");

  const [allowButton, setAllowButton] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
  }

  function handleInputChange(e) {
    if (!containsSpecialChars(e.target.value)) {
      setName(e.target.value);
      setAllowButton(false);
    }
  }

  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        
        <input
          type="search"
          className="search-field"
          placeholder="Search Pokemon"
          value={name}
          onChange={(e) => handleInputChange(e)}
        />
        
        <Link to={name.trim() !== "" ? `/results/${name}` : "#"}>
          <button
            type="submit"
            className="search-submit"
            disable={allowButton.toString()}
          ></button>
        </Link>
        <img src={search} alt="" className="icon-search" />
      </form>
    </div>
  );
}

import React from "react";
import { useState } from "react";
import { containsSpecialChars } from '../CreatePokemon/validators';
import { Link } from "react-router-dom";

export default function SearchBar() {
  const[name, setName] = useState("");
  
  const[allowButton, setAllowButton] = useState(true);

  function handleSubmit(e) {
      e.preventDefault()
       setName('')
  }
   
  function handleInputChange(e){
      if(!containsSpecialChars(e.target.value)){
          setName(e.target.value)
          setAllowButton(false)
      } 
  }

  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
            <input type="search" className="search-field" placeholder="Search" value={name} onChange={(e) => handleInputChange(e)} />
        <Link to={name.trim() !== "" ? `/results/${name}` : '#'}>
        <button type="submit" className="search-submit" disable={allowButton.toString()}>
          +
        </button>
        </Link>
    </form>
    </div>
  );
}

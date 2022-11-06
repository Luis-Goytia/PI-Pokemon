import React from "react";
import '../Home/Home.css';

export default function Pagination({ cardsPerPage, pokemonsCopy, page }) {
  let pageNumber = [];
  for (let i = 1; i <= Math.ceil(pokemonsCopy/ cardsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="pagination">
      {pageNumber.map((el) => (
        <button className="pagination-button" key={el} onClick={() => page(el)}>
          {el}
        </button>
      ))}
    </div>
  );
}
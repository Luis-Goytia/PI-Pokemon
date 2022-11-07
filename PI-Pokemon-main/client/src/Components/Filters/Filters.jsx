import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearHome,
  filterByType,
  filterCreated,
  orderByAttack,
  orderByName,
} from "../../Redux/actions/actions";

export default function Filters({ page }) {
  const types = useSelector((state) => state.types);
    const dispatch = useDispatch();
    

  function handleType(e) {
    dispatch(filterByType(e.target.value));
    e.preventDefault();
    page(1);
  }
  function handleCreated(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
    page(1);
  }
  function handleName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    //page(1)
  }
  function handleAttack(e) {
    e.preventDefault();

    dispatch(orderByAttack(e.target.value));
    //page(1)
  }
  function handleClear(e) {
    e.preventDefault();
    dispatch(clearHome());
  }

  return (
    <div className="filters">
      <button className="button-clear" onClick={handleClear}>
        Clear filters
      </button>
      <div>
        <h3>Filter By:</h3>
        <select className="selection" onChange={handleCreated}>
          <option value="All">All</option>
          <option value="Created">Created</option>
        </select>
        <select className="selection" onChange={handleType}>
          <option value="All">All</option>
          {types?.map((el) => (
            <option value={el.name} key={el.id}>
              {el.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h3>Sort By:</h3>
        <select className="selection" onChange={handleName}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select className="selection" onChange={handleAttack}>
          <option value="Lower">Lower</option>
          <option value="Higher">Higher</option>
        </select>
      </div>
    </div>
  );
}

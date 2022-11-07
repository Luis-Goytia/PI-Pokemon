import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearHome, filterByType, filterCreated, orderByAttack, orderByName } from '../../Redux/actions/actions';


export default function Filters({ page }) {
    const types = useSelector((state) => state.types)
    const dispatch = useDispatch();


    function handleType(e) {
        dispatch(filterByType(e.target.value))
        page(1)
    }
    function handleCreated(e) {
        dispatch(filterCreated(e.target.value))
        //page(1)
    }
    function handleName(e) {
        dispatch(orderByName(e.target.value))
        //page(1)
    }
    function handleAttack(e) {
        dispatch(orderByAttack(e.target.value))
        //page(1)
    }
    function handleClear(e) {
        dispatch(clearHome())
    }

    return (
        <div className="filters">
          <button className="button-clear" onClick={handleClear}>
            Clear filters
          </button>
          <div>
            <h3>Filter By:</h3>
            <select className="selection" onChange={handleSource}>
              <option value="All">All</option>
              <option value="Created">Created</option>
              <option value="Database">Database</option>
            </select>
            <select className="selection" onChange={handleGenre}>
              <option value="All">All</option>
              {genres?.map((el) => (
                <option value={el.name} key={el.id + "s"}>
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
            <select className="selection" onChange={handleRating}>
              <option value="Lower">Lower</option>
              <option value="Higher">Higher</option>
            </select>
          </div>
        </div>
      );
}
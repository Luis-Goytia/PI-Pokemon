import React from "react";
import Card from "../Card/Card";
import "./Home.css";

export default function Cards({ data }) {
  return (
    <>
      <div className="container">
        {data?.map((el) => (
          <div key={el.id}>
            <Card id={el.id} name={el.name} types={el.types} image={el.img} />
          </div>
        ))}
      </div>
    </>
  );
}

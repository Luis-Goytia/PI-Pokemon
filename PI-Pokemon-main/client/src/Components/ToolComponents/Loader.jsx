import React from "react";
import LoaderImage from "../../resources/gastly.gif";
import "../Home/Home.css";
import "./style.css"

export default function Loader(){
    return (
      <div className="Loader">
        <img src={LoaderImage} alt="loading..." />
        <span>Loading...</span>
        </div>
    );
}
import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import logo from "../../resources/Images/pokemon.png";
import charizard from "../../resources/no-pokemon.362d9a00.gif";

export default function LandingPage() {
  return (
    <div className={styles.background}>
      
          <Link to="/home">
            <button className={styles.button}>Let's go !</button>
          </Link>
        
    </div>
  );
}

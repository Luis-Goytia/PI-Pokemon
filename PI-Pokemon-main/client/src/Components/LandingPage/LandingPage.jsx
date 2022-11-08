import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import logo from "../../resources/Images/pokemon.png";
export default function LandingPage() {
  return (
    <div className={styles.background}>
      <div>
        <img src={logo} alt="logo" className={styles.logo} />
        <div>
          <h1 className={styles.title}>¡Welcome to your pokedex!</h1>
          <Link to={"/home"}>
            <button className={styles.button}>
              <span>Let's go !</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

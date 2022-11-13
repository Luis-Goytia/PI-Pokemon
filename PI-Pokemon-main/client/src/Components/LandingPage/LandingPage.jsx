import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import logo from "../../resources/Images/pokemon.png";
import pokeball from "../../resources/pokeballanime.gif"
export default function LandingPage() {
  return (
    <div className={styles.background}>
      <div>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.info}>
          <h1 className={styles.title}>¡Welcome to your pokedex!</h1>
          <Link to={"/home"}>
            <button className={styles.button}>
              <span>Let's go !</span>
            </button>
          </Link>
          <img src={pokeball} alt="pokeball" className={styles.pokeball}  />
        </div>
      </div>
    </div>
  );
}

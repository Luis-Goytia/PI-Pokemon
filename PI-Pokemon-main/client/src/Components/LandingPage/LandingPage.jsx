import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import logo from "../../resources/Images/pokemon.png";
import charizard from "../../resources/no-pokemon.362d9a00.gif";

export default function LandingPage() {
  return (
    <div className={styles.background}>
      <div className={styles.contIzq}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.contTitle}>
          <div className={styles.title}>¡Welcome to your pokedex!</div>
          <Link to="/home">
            <button className={styles.button}>Let's go !</button>
          </Link>
        </div>
      </div>

      <div className={styles.contDer}>
        <img src={charizard} alt="charizard" className={styles.charizardImg} />
      </div>
    </div>
  );
}

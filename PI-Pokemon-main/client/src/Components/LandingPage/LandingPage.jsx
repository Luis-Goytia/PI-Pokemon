import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";


export default function LandingPage() {
  return (
    <div className={styles.background}>
      
          <Link to="/home">
            <button className={styles.button}>Let's go !</button>
          </Link>
        
    </div>
  );
}

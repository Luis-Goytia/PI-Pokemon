import React, { useEffect } from "react";
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, getDetail } from "../../Redux/actions/actions";
import styles from "./DetailPokemon.module.css";
import Loader from "../ToolComponents/Loader";
import NavBar from "../NavBar/NavBar"

export default function DetailPokemon() {
    const { id } = useParams();
    const dispatch = useDispatch();
    let pokemonDetail = useSelector((state) => state.detail);

    useEffect(() => {
        dispatch(getDetail(id))
        return () => { dispatch(clearDetail()) }
    }, [dispatch, id]);

    if (pokemonDetail.name) {
      console.log(pokemonDetail);
    return (
        <div>
            <NavBar/>
        <div className={styles.container}>
          <img src={pokemonDetail.img} alt="img-poke" className={styles.img}/>
          <div className={styles.container_data}>
            <div >
              <span className={styles.name} >{pokemonDetail.name.toUpperCase()}</span>
            </div>
            <div>
              <ul className={styles.types}>
                {pokemonDetail.types.map((t) => (
                  <div key={pokemonDetail.name + t} className={t}>
                    {t.toUpperCase()}
                  </div>
                ))}
              </ul>
            </div>
            <div className={styles.data}>
              <div className={styles.contLeft}>
                <div>
                  <h1>HP</h1>
                  <div className={styles.bar}>
                    <div
                      className={styles.hp}
                      style={{
                        width: `${(pokemonDetail.hp / 150) * 100}%`,
                      }}
                    >
                      {pokemonDetail.hp}
                    </div>
                  </div>
                </div>
                <div>
                  <h1>Attack</h1>
                  <div className={styles.bar}>
                    <div
                      className={styles.attack}
                      style={{
                        width: `${(pokemonDetail.attack / 150) * 100}%`,
                      }}
                    >
                      {pokemonDetail.attack}
                    </div>
                  </div>
                </div>
                <div>
                  <h1>Defense</h1>
                  <div className={styles.bar}>
                    <div
                      className={styles.defense}
                      style={{
                        width: `${(pokemonDetail.defense / 150) * 100}%`,
                      }}
                    >
                      {pokemonDetail.defense}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.contLeft}>
                <div>
                  <h1>Speed</h1>
                  <span className={styles.number}>{pokemonDetail.speed}</span>
                </div>
                <div>
                  <h1>Height</h1>
                  <span className={styles.number}>{pokemonDetail.height * 10} cm </span>
                </div>
                <div>
                  <h1>Weight</h1>
                  <span className={styles.number}>{pokemonDetail.weight / 10} kg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Loader />
      </>
    );
  }
}

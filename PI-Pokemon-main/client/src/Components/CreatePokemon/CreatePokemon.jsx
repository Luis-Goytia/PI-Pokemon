import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  getAllPokemons,
  getTypes,
  postPokemon,
} from "../../Redux/actions/actions";
import { validate } from "./validators";
import styles from "./Create.module.css"
import ash from "../../resources/Images/ash.png"
import izq from "../../resources/Images/chevron-left2.png"
import poke from "../../resources/Images/poke.png"


export default function CreatePokemon() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    img: "",
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  
    useEffect(() => {
    setErrors(
      validate({
        ...input,
      })
    );
  }, [input]);

    let btnDisabled = Object.values(validate(input)).length > 0;
   
    

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value.toLowerCase(),
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelect = (e) => {
    if (!input.types.includes(e.target.value)) {
      setInput({
        ...input,
        types: [...input.types, e.target.value],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPokemon(input));
    alert("Pokemon creado");
    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      img: "",
      types: [],
    });
    history.push("/home");
    dispatch(getAllPokemons());
  };

  const handleDeleteType = (e) => {
    setInput({
      ...input,
      types: input.types.filter((t) => t !== e),
    });
  };
    
    console.log("input",input)
  return (
    <div>
      <div className={styles.navBar}>
        <img src={izq} alt="izq"></img>
        <Link to="/home">
          <button className={styles.buttonHome}>Return to home</button>
        </Link>
      </div>
      <div className={styles.contGral}>
        <div className={styles.cardCreate}>
          <img src={ash} alt="ash" className={styles.ash} />
          <div className={styles.redTitle}>
            <img src={poke} alt="poke" className={styles.poke}></img>
            <div className={styles.title}>Create your pokemon</div>
          </div>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.form}>
              <div className={styles.izq}>
                <div>
                  <div>Name:</div>
                  <input
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={(e) => handleChange(e)}
                    placeholder="Name"
                    className={styles.inputs}
                  />
                  {errors.name && (
                    <div className={styles.error}>{errors.name}</div>
                  )}
                </div>

                <div>
                  <div>Hp:</div>
                  <input
                    type="number"
                    value={input.hp}
                    name="hp"
                    onChange={(e) => handleChange(e)}
                    placeholder="1 - 150"
                    className={styles.inputs}
                  />
                  {errors.hp && <div className={styles.error}>{errors.hp}</div>}
                </div>

                <div>
                  <div>Attack:</div>
                  <input
                    type="number"
                    value={input.attack}
                    name="attack"
                    onChange={(e) => handleChange(e)}
                    placeholder="1 - 150"
                    className={styles.inputs}
                  />
                  {errors.attack && (
                    <div className={styles.error}>{errors.attack}</div>
                  )}
                </div>

                <div>
                  <div>Defense:</div>
                  <input
                    type="number"
                    value={input.defense}
                    name="defense"
                    onChange={(e) => handleChange(e)}
                    placeholder="1 - 150"
                    className={styles.inputs}
                  />
                  {errors.defense && (
                    <div className={styles.error}>{errors.defense}</div>
                  )}
                </div>

                <div>
                  <select
                    onChange={(e) => handleSelect(e)}
                    className={styles.select}
                    disabled={input.types.length >= 2}
                    defaultValue="title"
                  >
                    <option value="title" disabled name="types">
                      Types
                    </option>
                    {types.map((t) => {
                      return (
                        <option
                          value={t.name}
                          key={t.name}
                          className={styles.options}
                        >
                          {t.name[0].toUpperCase() + t.name.slice(1)}
                        </option>
                      );
                    })}
                  </select>

                  <ul className={styles.types}>
                    {input.types.map((t) => {
                      return (
                        <li key={t} className={styles.types}>
                          {t[0].toUpperCase() + t.slice(1)}
                          <button
                            onClick={() => handleDeleteType(t)}
                            className={styles.deleteButton}
                          >
                            x
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  {errors.types && (
                    <div className={styles.error}>{errors.types}</div>
                  )}
                </div>
              </div>

              <div className={styles.der}>
                <div>
                  <div>Speed:</div>
                  <input
                    type="number"
                    value={input.speed}
                    name="speed"
                    onChange={(e) => handleChange(e)}
                    placeholder="1 - 150"
                    className={styles.inputs}
                  />
                  {errors.speed && (
                    <div className={styles.error}>{errors.speed}</div>
                  )}
                </div>

                <div>
                  <div>
                    Height <small>(cm)</small>:
                  </div>
                  <input
                    type="number"
                    value={input.height}
                    name="height"
                    onChange={(e) => handleChange(e)}
                    placeholder="Height"
                    className={styles.inputs}
                  />
                </div>

                <div>
                  <div>
                    Weight <small>(kg)</small>:
                  </div>
                  <input
                    type="number"
                    value={input.weight}
                    name="weight"
                    onChange={(e) => handleChange(e)}
                    placeholder="Weight"
                    className={styles.inputs}
                  />
                </div>

                <div>
                  <div>Image:</div>
                  <input
                    type="text"
                    value={input.img}
                    name="img"
                    onChange={(e) => handleChange(e)}
                    className={styles.inputs}
                    placeholder="URL"
                  />
                  {errors.img && (
                    <div className={styles.error}>{errors.img}</div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={btnDisabled}
                  className={styles.button}
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

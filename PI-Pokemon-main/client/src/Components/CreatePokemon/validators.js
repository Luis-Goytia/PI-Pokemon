//Validators for inputs in Create Videogame
/* eslint-disable */

export function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

export function validate(input) {
  let errors = {};
  let isURL = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim;

  if (!input.name || input.name.length < 3) {
    errors.name = "Debe tener un nombre de mas de tres letras";
  } else {
    if (containsSpecialChars(input.name)) {
      errors.name = "No debe tener caracteres especiales";
    }
  }

  if (!input.hp || input.hp < 0 || input.hp > 150) {
    errors.hp = "Debe tener hp entre 1 - 150";
  }

  if (!input.attack || input.attack < 0 || input.attack > 150) {
    errors.attack = "Debe tener ataque entre 1 - 150";
  }

  if (!input.defense || input.defense < 0 || input.defense > 150) {
    errors.defense = "Debe tener defensa entre 1 - 150";
  }

  if (!input.speed || input.speed < 0 || input.speed > 150) {
    errors.speed = "Debe tener velocidad entre 1 - 150";
  }

  if (input.types.length === 0) {
    errors.types = "Debe tener por lo menos un tipo";
  }
  if (!isURL.test(input.img)) {
    return (errors.img = "No es una Url valida");
  }

  return errors;
}

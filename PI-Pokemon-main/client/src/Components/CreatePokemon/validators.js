//Validators for inputs in Create Videogame
/* eslint-disable */
export function checkIfValidDate(str) {
  // Regular expression to check if string is valid date
  const dateRegexp = /^[1-2][089]\d{2}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/

  return dateRegexp.test(str);
}
//04/06/2001
export function isURL(str) {
    var pattern = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi
    return pattern.test(str);
  }

  export function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    return specialChars.test(str);
  }
  
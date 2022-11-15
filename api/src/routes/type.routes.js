const { Router } = require("express");
const {
  getAllPokemonsAPI,
  getAllPokemonsDB,
  getPokemonById,
  getPokemonByName,
} = require("../controllers/pokemonController/getController");
const { getAllTypes } = require("../controllers/typeController/getController");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const types = await getAllTypes();
    if (types) {
      return res.status(202).send(types);
    }
    return res.status(404).send(`No secargaron los types in db`);
  } catch (error) {
    return res.status(404).send(`${error} No secargaron los types in db`);
  }
});

module.exports = router;

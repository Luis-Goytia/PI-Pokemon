const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Pokemon", {
    id: {
      type: DataTypes.UUID,
      allowNull: false, //no puede esta vacio
      primaryKey: true,//no se repiten id´s
      defaultValue: DataTypes.UUIDV4, //fsfsdf-sdfsfs-fsfs-dfghd
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique : true,
    },
    hp:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defense:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img:{
      type: DataTypes.STRING,
      allowNull: false,
    }

  },{timestamps: false});
};

/*
ID (Número de Pokemon) *
Nombre *
Vida
Ataque
Defensa
Velocidad
Altura
Peso
*/

const fs = require("fs");

let listadoPorHacer = [];

const cargarDB = () => {
  try {
    listadoPorHacer = require("../db/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};
const guardarDB = async () => {
  let data = JSON.stringify(listadoPorHacer);

  await fs.writeFile("db/data.json", data, err => {
    if (err) throw err;
  });
};
const crear = description => {
  cargarDB();
  let toDo = {
    description,
    completado: false
  };
  listadoPorHacer.push(toDo);
  guardarDB();
  return toDo;
};

const getListado = () => {
  cargarDB();
  return listadoPorHacer;
};

const actualizar = description => {
  cargarDB();
  let index = listadoPorHacer.findIndex(
    tarea => tarea.description === description
  );
  if (index >= 0) {
    listadoPorHacer[index].completado = true;
    guardarDB();
    return true;
  } else return false;
};

const borrar = description => {
  cargarDB();
  let i = listadoPorHacer.findIndex(tarea => tarea.description === description);
  if (i >= 0) {
    listadoPorHacer.splice(i, 1);
    guardarDB();
    return true;
  } else return false;
};

module.exports = {
  crear,
  guardarDB,
  getListado,
  actualizar,
  borrar
};

const argv = require("./config/yargs").argv;
const toDo = require("./to-do/to-do");
const colors = require("colors");
let command = argv._[0];

switch (command) {
  case "crear":
    let tarea = toDo.crear(argv.description);
    console.log(tarea);
    break;
  case "listar":
    let listado = toDo.getListado();
    for (let tarea of listado) {
      console.log("=====TO DO=====".rainbow);
      console.log("Tarea: ".green + tarea.description);
      console.log("Estado: ".green + tarea.completado);
      console.log("===============".green);
    }
    break;
  case "actualizar":
    let actualizado = toDo.actualizar(argv.description);
    if (actualizado) console.log("Tarea Actualizada".green);
    else console.log("La tarea no se puedo actualizar".red);
    break;

    case "borrar":
    let borrado=toDo.borrar(argv.description);
    if(borrado)console.log("Tarea eliminada con exito".green);
    else console.log("La tarea no se puedo eliminar".red);
    break;
  default:
    console.log("comando no reconocido");
}


const argv = require("yargs").command("crear", "crear tarea por hacer", {
    description:{
        alias:"d",
        demand: true,
        desc:"descripcion de la tarea por hacer"
    }
}).command("actualizar", "actualizar estado de una tarea", {
    description:{
        alias:"d",
        demand: true,
    },
    completado:{
        alias:"c",
        default:true,
        desc:"marca como completado o pendiente la tarea"
    }
}).command("borrar", "borra una tarea pendiente", {
    description:{
        alias:"d",
        demand:true
    }
}).command("listar", "muestra la lista de tareas").argv;
module.exports={
    argv
};


import prompts from "prompts";
import { hint } from "./utils.js"; 

export function mainMenu(disabled = false) {
  return prompts(
    {
      type: "select",
      name: "action",
      message: "¿Qué deseas hacer?",
      choices: [
        { title: "Ver mis tareas", value: "seeTasks", disabled },
        { title: "Buscar una tarea", value: "searchTask", disabled },
        { title: "Agregar una tarea", value: "addTask" },
        { title: "Salir", value: "exit" },
      ],
      warn: "No hay tareas cargadas",
      hint
    },
  )
}

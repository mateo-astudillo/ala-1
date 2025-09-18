import prompts from "prompts";
import { onCancel } from "./utils"; 

export function seeTasksMenu(disabled = { "toDo": false, "inProgress": false, "done": false }) {
  return prompts(
    {
      type: "select",
      name: "filter",
      message: "¿Qué tareas deseas ver?",
      choices: [
        { title: "Todas", value: "all" },
        { title: "Pendientes", value: "to do", disabled: disabled.toDo },
        { title: "En curso", value: "in progress", disabled: disabled.inProgress },
        { title: "Terminadas", value: "done", disabled: disabled.done },
        { title: "Volver", value: "back" },
      ],
      hint: "Usa las flechas y presiona enter en la opción elegida",
      warn: "No hay tareas en este estado"
    },
    { onCancel }
  )
}


import prompts from "prompts";
import { onCancel } from "./utils.js";

export async function selectTaskMenu(choices) {
  return prompts(
    {
      type: "select",
      name: "title",
      message: "Estas son tus tareas",
      choices,
      hint: "Usa las flechas y presiona enter en la opción elegida",
    },
    { onCancel }
  );
}

export async function editTaskConfirm() {
  return prompts(
    {
      type: "toggle",
      name: "edit",
      message: "¿Desea editar la tarea?",
      initial: false,
      active: "sí",
      inactive: "no"
    },
    { onCancel }
  );
}


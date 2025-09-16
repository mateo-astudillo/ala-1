import prompts from "prompts";
import { statusIndex, diffucultyIndex, validate, validateTitle, onCancel, hint } from "./utils.js";

export async function getTask(taskTitles, task = {
  title: "Mi tarea",
  description: "Detalles",
  status: 0,
  difficulty: 0,
  dueDate: new Date()
}) {
  return prompts([
    {
      type: "text",
      name: "title",
      message: "Título",
      initial: task.title,
      format: value => value.toLowerCase(),
      validate: value => validateTitle(value.toLowerCase(), taskTitles)
    },
    {
      type: "text",
      name: "description",
      message: "Descripción",
      initial: task.description,
      format: value => value.toLowerCase(),
      validate
    },
    {
      type: "select",
      name: "status",
      message: "Estado",
      choices: [
        { title: "Pendientes", value: "to do" },
        { title: "En curso", value: "in progress" },
        { title: "Terminadas", value: "done" },
      ],
      initial: statusIndex[task.status],
      hint
    },
    {
      type: "select",
      name: "difficulty",
      message: "Dificultad",
      choices: [
        { title: "Fácil", value: "easy" },
        { title: "Medio", value: "medium" },
        { title: "Difícil", value: "hard" }
      ],
      initial: diffucultyIndex[task.difficulty],
      hint
    },
    {
      type: "date",
      name: "dueDate",
      message: "Vencimiento",
      mask: "DD/MM/YYYY",
      validate: date => date > new Date().setHours(23, 59, 59) ? true : "Debe ser a partir de mañana",
      initial: task.dueDate
    },
  ],
    { onCancel }
  );
}

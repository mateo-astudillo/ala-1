import { imt } from "../app.js"; 

const statusLabels = {
  "done": "Terminada",
  "in progress": "En curso",
  "to do": "Pendiente",
}

const diffucultyLabels = {
  "easy": "Fácil",
  "medium": "Medio",
  "hard": "Difícil",
}

export function printTask(task) {
  console.log(`Título: ${task.title}` +
    `\nDescripción: ${task.description}` +
    `\nEstado: ${statusLabels[task.status]}` +
    `\nDificultad: ${diffucultyLabels[task.difficulty]}` +
    `\nVencimiento: ${task.dueDate.toLocaleString("es-ES")}` +
    `\nCreación: ${task.createdAt.toLocaleString("es-ES")}` +
    `\nModificación: ${task.updatedAt.toLocaleString("es-ES")}`
  );
}

export function insert(task) {
  task.dueDate.setHours(0, 0, 0, 1)
  task.createdAt = new Date();
  task.updatedAt = new Date();
  imt.push(task);
}

export function edit(lastTitle, task ) {
  const index = imt.findIndex(t => t.title === lastTitle);
  task.updatedAt = new Date();
  imt.splice(index, 1, task);
}

export async function notify(message, time) {
  // console.clear();
  console.log(message);
  await new Promise(resolve => setTimeout(resolve, time));
}



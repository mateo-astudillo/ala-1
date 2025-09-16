"use strict";

import { mainMenu } from "./tui/menu.js"
import { seeTasks } from "./tasks/see.js";
import { searchTask } from "./tasks/search.js"; 
import { addTask } from "./tasks/add.js"; 
import { otherTasks } from "./example-tasks.js"

export const imt = []; // in memory tasks

// TODO
// descripción puede ser vacía
// estado "cancelada"
// vencimiento puede ser vacío
// título hasta 100
// descripción hasta 500
// ordenar tareas al mostrarlas
// bonus: elegir el orden
// confirmar edición
// emojis para dificultad

(async () => {
  otherTasks.forEach(t => imt.push(t));
  while (true) {
    console.clear()
    const answer = await mainMenu((imt.length === 0));
    if (answer.action == "exit")
      break;
    switch (answer.action) {
      case "seeTasks":
        await seeTasks();
        break;
      case "searchTask":
        await searchTask();
        break;
      case "addTask":
        await addTask();
        break;
      default:
        break;
    }
  }
})();

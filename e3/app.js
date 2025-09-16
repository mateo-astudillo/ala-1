"use strict";

import { mainMenu } from "./tui/menu.js"
import { seeTasks } from "./tasks/see.js";
import { searchTask } from "./tasks/search.js"; 
import { addTask } from "./tasks/add.js"; 
import { otherTasks } from "./example-tasks.js"

export const imt = []; // in memory tasks

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

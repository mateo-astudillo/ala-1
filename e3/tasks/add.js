import { getTask } from "../tui/get-task.js"
import { insert, notify } from "./utils.js";
import { imt } from "../app.js"; 

export async function addTask() {
  const answer = await getTask(imt.map(t => t.title));
  
  if (answer?.cancelled)
    return;

  insert(answer)
  notify("Se ha insertado la tarea", 2200);
}

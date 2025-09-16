import { searchTaskOption } from "../tui/search-task.js";
import { selectTask } from "./select.js"; 
import { notify } from "./utils.js";
import { imt } from "../app.js"; 

export async function searchTask() {
  const answer = await searchTaskOption();

  if (answer?.cancelled)
    return;

  const tasksFound = imt.filter(t =>
    t.title.includes(answer.word) || t.description.includes(answer.word)
  );

  if (tasksFound.length === 0)
    return await notify("No se encontraron las tareas...", 2200);

  await selectTask(tasksFound);
}

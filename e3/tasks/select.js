import { selectTaskMenu, editTaskConfirm } from "../tui/select-task.js";
import { getTask } from "../tui/get-task.js";
import { printTask, edit, notify } from "./utils.js";
import { imt } from "../app.js";

export async function selectTask(filteredTasks) {
  const choices = filteredTasks.map(t => ({
    title: t.title,
    value: t.title
  }));
  const answer = await selectTaskMenu(choices);

  if (answer?.cancelled)
    return;

  const task = filteredTasks.find(t => t.title === answer.title);
  printTask(task);

  await editTask(task);
}

async function editTask(task) {
  const answer = await editTaskConfirm();

  if (!answer.edit || answer?.cancelled)
    return

  const taskTitles = imt.map(t => (t.title !== task.title) ? t.title : "");
  const editedTask = await getTask(taskTitles, task);

  if (editedTask?.cancelled)
    return;

  editedTask.createdAt = task.createdAt;
  edit(task.title, editedTask);
  await notify("Se ha editado la tarea", 2200);
}

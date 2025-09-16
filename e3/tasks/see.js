import { seeTasksMenu } from "../tui/see-tasks.js"
import { selectTask } from "../tasks/select.js"
import { imt } from "../app.js"; 

export async function seeTasks() {
  const disabled = {
    toDo: !imt.some(t=> t.status === "to do"),
    inProgress: !imt.some(t=> t.status === "in progress"),
    done: !imt.some(t=> t.status === "done"),
  };
  const answer = await seeTasksMenu(disabled);

  if (answer.filter === "back" || answer?.cancelled)
    return

  await selectTask((answer.filter !== "all")
    ? imt.filter(t => t.status === answer.filter)
    : imt
  );
}

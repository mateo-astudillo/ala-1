import prompts from "prompts";
import { validate, onCancel } from "./utils.js";


export async function searchTaskOption() {
  return prompts(
    {
      type: "text",
      name: "word",
      message: "Buscar por nombre",
      format: value => value.toLowerCase(),
      validate
    },
    { onCancel }
  );
}

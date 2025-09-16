export const statusIndex = {
  "to do": 0,
  "in progress": 1,
  "done": 2,
}

export const diffucultyIndex = {
  "easy": 0,
  "medium": 1,
  "hard": 2,
}

export const hint = "Use las flechas y enter para elegir"

export const validate = value => {
  return /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ]+( [a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ]+)*$/.test(value)
    ? true
    : "Solo se permiten letras y números"
}

export const validateTitle = (value, taskTitles) => {
  if (taskTitles.some(t => t === value))
    return "Ya hay una tarea con ese nombre"
  return validate(value);
}

export const onCancel = (_prompt, answers) => {
  answers.cancelled = true;
}


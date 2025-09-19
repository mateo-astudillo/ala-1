// Construye una calculadora que pueda resolver las 4 operaciones básicas (suma, resta, multiplicación y división). La calculadora debe limitarse a operar con un operador y dos operandos, los cuales debe pedir a la persona usuaria.
// const prompt = require("prompt-sync")();
import PromptSync from "prompt-sync";

const prompt = PromptSync();

console.clear();
console.log("Calculadora básica\n");

const operands = []; // Números
const operators = []; // Signos

let operand = "";
let operator = "";
do {
  operand = prompt("Ingrese un número: ");
  if (isNaN(operand) || isNaN(Number.parseFloat(operand))) {
    console.log("Ingrese un número válido");
    continue;
  } else if (operators[operators.length - 1] === "/" && Number.parseFloat(operand) == 0) {
    console.log("No se puede dividir por cero;")
    continue;
  }
  operands.push(Number.parseFloat(operand));

  while (true) {
    operator = prompt("Ingrese un operando (+, -, *, /) o igual (=) para terminar: ");
    if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/" && operator !== "=") {
      console.log("Ingrese un operador válido");
      continue;
    }
    operators.push(operator);
    break;
  }
} while (operator !== "=");

let result = operands.shift();
while (operands.length > 0) {
  switch (operators.shift()) {
    case "+":
      result += operands.shift();
      break;
    case "-":
      result -= operands.shift();
      break;
    case "*":
      result *= operands.shift();
      break;
    case "/":
      result /= operands.shift();
      break;
  }
}
console.log("Resultado: " + result);

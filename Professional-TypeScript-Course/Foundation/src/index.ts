const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;
const button = document.getElementById("btn")! as HTMLButtonElement;
const result = document.getElementById("result")! as HTMLParagraphElement;

function add(num1: number, num2: number): number {
  return num1 + num2;
}

button.addEventListener("click", () => {
  const value = ` Addition Of ${num1.value} and ${num2.value} Is ${add(
    Number(num1.value),
    Number(num2.value)
  )}`;
  num1.value = "";
  num2.value = "";
  result.textContent = String(value);
});

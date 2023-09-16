const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(n1: number, n2: number) {
  return n1 + n2;
}

button.addEventListener("click", () => {
  console.log(add(+input1.value, +input2.value));
});

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const button = document.getElementById("btn");
const result = document.getElementById("result");

function add(num1, num2) {
  return num1 + num2;
}

button.addEventListener("click", () => {
  const value = ` Addition Of ${num1.value} and ${num2.value} Is ${add(
    num1.value,
    num2.value
  )}`;
  num1.value = "";
  num2.value = "";
  result.textContent = value;
});

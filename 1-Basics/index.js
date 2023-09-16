const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(n1, n2) {
  return n1 + n2;
}

button.addEventListener("click", () => {
  console.log(add(input1.value, input2.value));
});

// This Function Will Be Syntatically Correct But Logically
// This Code Will Add Two Strings
//Because input 1 and input2 will return String

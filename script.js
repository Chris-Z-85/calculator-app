// Theme toggle
const calc = document.querySelector("#body");
const allRadios = document.querySelectorAll("input[name='theme-toggle']");

for (const radioButton of allRadios) {
  radioButton.addEventListener("change", changeTheme);
}

function changeTheme(e) {
  switch (e.target.id) {
    case "1":
      calc.classList.remove("theme-2");
      calc.classList.remove("theme-3");
      calc.classList.add("theme-1");
      break;
    case "2":
      calc.classList.remove("theme-1");
      calc.classList.remove("theme-3");
      calc.classList.add("theme-2");
      break;
    case "3":
      calc.classList.remove("theme-1");
      calc.classList.remove("theme-2");
      calc.classList.add("theme-3");
      break;
  }
}

//Calculator
const display = document.querySelector(".calc__display");
const keys = document.querySelectorAll("[data-type='key']");
const delKey = document.querySelector("[data-type='delete']");
const resetKey = document.querySelector("[data-type='reset']");
const equalKey = document.querySelector("[data-type='equal']");

const updateDisplay = (value) => {
  display.textContent += value;
};

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const keyValue = e.target.dataset.value;
    updateDisplay(keyValue);
  });
});

delKey.addEventListener("click", () => {
  display.textContent = display.textContent.substring(
    0,
    display.textContent.length - 1
  );
});

resetKey.addEventListener("click", () => {
  display.textContent = "";
});

equalKey.addEventListener("click", () => {
  calculate(display.textContent);
});

const calculate = (value) => {
  display.textContent
    ? (display.textContent = eval(display.textContent))
    : false;
};

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
const calculator = document.querySelector(".calc");
const keyPad = calculator.querySelector(".calc__keypad");
const display = calculator.querySelector(".calc__display");
const operatorKeys = keyPad.querySelectorAll('[data-type="operator"]');

keyPad.addEventListener("click", (e) => {
  if (!e.target.closest(".key")) return;

  const key = e.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;
  const { type } = key.dataset;
  const { previousKeyType } = calculator.dataset;

  if (type === "number") {
    if (displayValue === "0" || previousKeyType === "operator") {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  }

  if (type === "operator") {
    operatorKeys.forEach((el) => {
      el.dataset.state = "";
    });
    key.dataset.state = "selected";

    calculator.dataset.firstNumber = displayValue;
    calculator.dataset.operator = key.dataset.key;
  }

  if (type === "equal") {
    const firstNumber = calculator.dataset.firstNumber;
    const operator = calculator.dataset.operator;
    const secondNumber = displayValue;

    display.textContent = calculate(firstNumber, operator, secondNumber);
  }

  if (type === "reset") {
    display.textContent = "0";
    delete calculator.dataset.firstNumber;
    delete calculator.dataset.operator;
  }

  calculator.dataset.previousKeyType = type;
});

function calculate(firstNumber, operator, secondNumber) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  if (operator === "plus") return firstNumber + secondNumber;
  if (operator === "minus") return firstNumber - secondNumber;
  if (operator === "times") return firstNumber * secondNumber;
  if (operator === "divide") return firstNumber / secondNumber;
}

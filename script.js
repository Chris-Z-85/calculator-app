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

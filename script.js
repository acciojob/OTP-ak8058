//your JS code here. If required.
const inputs = document.querySelectorAll(".code");
inputs[0].focus();

inputs.forEach((input, index) => {
 input.setAttribute("id", `code-${index + 1}`); 
  input.addEventListener("input", (e) => {
    if (e.target.value.match(/[^0-9]/)) {
      e.target.value = "";
      return;
    }
    if (e.target.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs[index - 1].focus();
    }
  });
});
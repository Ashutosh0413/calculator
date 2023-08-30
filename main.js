document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll("button");
    
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const buttonValue = button.textContent;
        
        if (buttonValue === "AC") {
          display.textContent = "";
        } else if (buttonValue === "DEL") {
          display.textContent = display.textContent.slice(0, -1);
        } else if (buttonValue === "=") {
          try {
            display.textContent = eval(display.textContent);
          } catch (error) {
            display.textContent = "Error";
          }
        } else {
          display.textContent += buttonValue;
        }
      });
    });
  });
  
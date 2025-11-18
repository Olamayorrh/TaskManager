const reUseButton = document.getElementById("sectionBtn");

const createButton = (options) => {
  const template = document.createElement("template");

  template.innerHTML = `
    <button class="buttonn" style="background-color: ${options.backgroundColor};">
      <span id="help">${options.label}</span>
    </button>
  `;

  const button = template.content.firstElementChild;

  if (options.icon) {
    button.insertAdjacentHTML(
      "afterbegin",
      `<span class="fa-regular ${options.icon} fa-lg"></span>`
    );
  }

  if (options.backgroundColor) {
    button.classList.add(`button-${options.backgroundColor}`);
  }
  return button;
};

// Detect page
const isLoginPage = window.location.pathname.includes("login");

// Change label based on page
const newButton = createButton({
  label: isLoginPage ? "Next step" : "Create Account",
  backgroundColor: "warning",
});

const myButton = createButton({
  label: "Help?",
  icon: "fa-circle-question",
  backgroundColor: "white",
});

reUseButton.appendChild(myButton);
reUseButton.appendChild(newButton);

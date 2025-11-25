const reUseButton = document.getElementById("sectionBtn");
// Detect page
const isLoginPage = window.location.pathname.includes("logIn");

//signUp Auth
const mail = document.getElementById("email");
const name = document.getElementById("name");
const password = document.getElementById("password");
const buttonn = document.getElementById("buttonn")

name.value ? console.log(name) : console.log("empty");
const form = document.getElementById("form");
buttonn.addEventListener("click", ()=>{
  alert(name.value)
})





const createButton = (options) => {
  const template = document.createElement("template");

  template.innerHTML = `
    <button class="buttonn"  type="${options.type || "button"}"  style="background-color: ${options.backgroundColor};">
      <span id="help" >${options.label}</span>
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

  if (options.onClick) {
    button.addEventListener("click", options.onClick)
  }

  
  return button;
};

const signUpBtn =()=>{
  alert("signup successfull")
  document.location.href="/index.html"
}

const logInBtn =()=>{
  alert("login successfull")
  document.location.href="/index.html"
}


// Change label based on page
const newButton = createButton({
  label: isLoginPage ? "Next step" : "Create Account",
  backgroundColor: "warning",
  onClick: isLoginPage ? logInBtn : signUpBtn ,
  type : "submit"
});

const myButton = createButton({
  label: "Help?",
  icon: "fa-circle-question",
  backgroundColor: "white",
  
});

reUseButton.appendChild(myButton);
reUseButton.appendChild(newButton);

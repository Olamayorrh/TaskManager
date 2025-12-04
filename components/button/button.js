const reUseButton = document.getElementById("sectionBtn");

// checks for login page
const isLoginPage = window.location.pathname.includes("logIn");


const createButton = (options) => {
  const template = document.createElement("template");

  template.innerHTML = `
    <button class="buttonn"  type="${
      options.type || "button"
    }"  style="background-color: ${options.backgroundColor};">
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
    button.addEventListener("click", options.onClick);
  }

  return button;
};

const signUpBtn = () => {
  const email = document.getElementById("email").value.trim();
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (!email || !name || !password) {
    alert("Please fill in all fields.");
    return;
  }


  const emailPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    alert(
      "Password must be at least 8 characters and include uppercase, lowercase, number, and symbol."
    );
    return;
  }

  if (validator.isEmpty(name)) {
    alert("Username is required");
    return;
  }

  if (!validator.isLength(name, { min: 6 })) {
    alert("Username must be at least 6 characters");
    return;
  }

  
  const duplicate = users.some((user) => user.email === email);
  if (duplicate) {
    alert("Email already exists. Please use a different email.");
    return;
  }

  users.push({
    name,
    email,
    password,
  });

  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful!");
};


const logInBtn = () => {
  
  const email = document.getElementById("l_email").value.trim();
  const password = document.getElementById("l_password").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  if( users.some((user)=>{
     return user.email == email && user.password == password
  })){
    alert("login successful")

    let currentUser = users.filter((user)=>{
        return user.email == email && user.password ==password
    })[0]

    localStorage.setItem("currentUserName", currentUser.name);
    localStorage.setItem("currentUserEmail", currentUser.email);
    window.location.href = "/mainLayout/mainLayout.html";
  }else{
    alert("invalid login credentials")
  }
};



// Change label based on page
const newButton = createButton({
  label: isLoginPage ? "Next step" : "Create Account",
  backgroundColor: "warning",
  onClick: isLoginPage ? logInBtn : signUpBtn,
  type: "submit",
});

const myButton = createButton({
  label: "Help?",
  icon: "fa-circle-question",
  backgroundColor: "white",
});

reUseButton.appendChild(myButton);
reUseButton.appendChild(newButton);

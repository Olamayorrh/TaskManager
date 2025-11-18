const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const nameError = document.getElementById("nameError");

const passError = document.getElementById("passError");

const emailError = document.getElementById("emailError");

const form = document.getElementById("form");



  function validateInputs() {
    const username = name.value.trim();
    const pass = password.value.trim();
    const mail = email.value.trim();

    // Define setError and setSuccess
    const setError = (input, message) => {
      if (input === name) {
        nameError.textContent = message;
      } else if (input === password) {
        passError.textContent = message;
      } else if (input === email) {
        emailError.textContent = message;
      }

      input.classList.add("invalid");
    };

    const setSuccess = (input) => {
      if (input === name) {
        nameError.textContent = "";
      } else if (input === password) {
        passError.textContent = "";
      } else if (input === email) {
        emailError.textContent = "";
      }

      input.classList.remove("invalid");
    };


    // Validate username
    // *****************************************************************************
    if (validator.isEmpty(username)) {
      setError(name, "Username is required");
    } else if (!validator.isAlphanumeric(username)) {
      setError(name, "Username must be alphanumeric");
    } else if (!validator.isLength(username, { min: 6 })) {
      setError(name, "Username must be at least 6 characters");
    } else {
      setSuccess(name);
    }

    // Validate password
    if (validator.isEmpty(pass)) {
      setError(password, "Password is required");
    } else if (
      !validator.isStrongPassword(pass, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setError(password, "Password must be at least 8 characters, at least 1 uppercase, 1 lowercase,1 number and special character");
    } else {
      setSuccess(password);
    }

    if(validator.isEmpty(mail)){
      setError(email, "Email is required")
    }else if(!validator.isEmail(mail)){
      setError(email, "Please enter a valid email address")
    }else{
      setSuccess(email)
    }

    
  }

 uname.addEventListener("input", validateInputs);
 email.addEventListener("input", validateInputs);
 pass.addEventListener("input", validateInputs);

 form.addEventListener("submit", (e) => {
   e.preventDefault();
   validateInputs();

   alert("details successfully submitted");
 });
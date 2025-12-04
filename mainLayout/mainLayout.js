const icon = document.querySelector(".icon");
const sidebarr = document.querySelector("._mainPage__sidebar");
const sideLogo = document.getElementById("sideLogo");
// console.log(sideLogo);

// console.log(icon);

icon.addEventListener("click", ()=>{
    sidebarr.classList.toggle("close-menu");
  
});


window.addEventListener("DOMContentLoaded", () => {
  const fullName = localStorage.getItem("currentUserName") || "";
   const email_ = localStorage.getItem("currentUserEmail") || "";

  // to get firstName from input, also checks if there are two(if it contains both name and surname)
  const firstName = fullName.split(" ")[0];

 
  document.getElementById("displayName").textContent = firstName;
  document.getElementById("email").textContent = email_;

  const name = document.getElementById("fullName");
  // console.log(name);
});




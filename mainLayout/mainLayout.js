const icon = document.querySelector(".icon");
const sidebarr = document.querySelector("._mainPage__sidebar");

// const desc = document.querySelector("desc");

console.log(sidebarr);


console.log(icon);

icon.addEventListener("click", ()=>{
    sidebarr.classList.toggle("close-menu");
  
})
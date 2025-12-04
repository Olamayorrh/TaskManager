const open =document.getElementById("openModal");

const close1 = document.getElementById("modal_close-btn");

const close2 = document.getElementById("btn1");

const close = document.querySelectorAll(".closeModal");
console.log(close);




const dialog = document.querySelector("dialog");

console.log(dialog);



open.addEventListener("click", ()=>{
    dialog.showModal();
});

close.forEach((button) => {
  button.addEventListener("click", (event) => {
   
    dialog.close()
  });
});
const open =document.getElementById("openModal");

const close1 = document.getElementById("modal_close-btn");

const close2 = document.getElementById("btn1");

const close = document.querySelectorAll(".closeModal");


const dialog = document.querySelector("dialog");


open.addEventListener("click", ()=>{
    dialog.showModal();
});

close.forEach((button) => {
  button.addEventListener("click", (event) => {
   
    dialog.close()
  });
});



const form = document.getElementById("taskForm");


form.addEventListener("submit",  (e) =>{
  e.preventDefault(); 

 
  const title = document.querySelector(".inpt_title").value;
  const description = document.getElementById("input_desc").value.trim();
  const priority = document.getElementById("priority").value;
  const dueDate = document.querySelector("input[type='date']").value;

  if (!title || !description) {
    alert("Please fill all fields");
    return;
  }

  let savedTasks = JSON.parse(localStorage.getItem("taskS")) || [];

  const newTask = {
    title: title,
    description: description,
    priority: priority,
    dueDate: dueDate,
  
  };

   savedTasks.push(newTask);
   localStorage.setItem("taskS", JSON.stringify(savedTasks));

   if (savedTasks.length > 0) {
     const task = savedTasks[savedTasks.length - 1]; // get last task
     console.log("Title:", task.title);
     console.log("Description:", task.description);
   }

  alert("Task created successfully!");
  form.reset();
});
const contain = document.querySelector(".sidebar-area");

const lists = document.querySelector(".list");
const ul = document.querySelector("ul");
console.log(ul);

console.log(contain);



    // ul.forEach((item) => {
    //   if(item){
    //     item.classList.add("active");
    //   }

    //   item.classList.remove("active");
    // });

  


const list = [
  {
    path: "/mainLayout/mainLayout.html",
    logo: "dashboard",
    title: "Dashboard",
  },
  {
    path: "#",
    logo: "task",
    title: "Tasks",
  },
  {
    path: "#",
    logo: "group",
    title: "Community",
  },
  {
    path: "#",
    logo: "attach_money",
    title: "Exppenses",
  },

  {
    path: "/modules/dashboard/dashboard.html",
    logo: "description",
    title: "Notes",
  },

  {
    path: "/modules/dashboard/dashboard.html",
    logo: "settings",
    title: "Settings",
  },
];

{/* <ul class="sidebar-area-list">
        <li><a > <span class="material-symbols-outlined">grading</span></a> </li>
        <li><a>DashBoard</a></li>
</ul> */}


function showSidebar(obj) {
  const template = document.createElement("template");

  template.innerHTML = `
     
        <li class="list">
            <a href= ${obj.path}>
                <span class="material-symbols-outlined">${obj.logo}</span>
                <span >${obj.title}</span>
            </a> 
       </li>
  `;

  const menu = template.content.firstElementChild;

  return menu
};



list.forEach((item) => {
  const menuItem = showSidebar(item);
  console.log(menuItem);
  
  contain.appendChild(menuItem);
});


const contain = document.querySelector(".sidebar-area");

const lists = document.querySelector(".list");
const ul = document.querySelector("ul");
// console.log(lists);

function initSidebar() {
  const container = document.querySelector(".sidebar-area");
  if (!container) return;

  const list = [
    {
      path: "/modules/dashBoard/dashBoard.html",
      logo: "dashboard",
      title: "Dashboard",
    },
    { path: "/modules/task/task.html", logo: "task", title: "Tasks" },
    {
      path: "/modules/community/community.html",
      logo: "group",
      title: "Community",
    },
    {
      path: "/modules/expenses/expenses.html",
      logo: "attach_money",
      title: "Expenses",
    },
    { path: "/modules/notes/notes.html", logo: "description", title: "Notes" },
    {
      path: "/modules/settings/settings.html",
      logo: "settings",
      title: "Settings",
    },
  ];

  list.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("list");
    li.innerHTML = `
      <a>
        <span class="material-symbols-outlined">${item.logo}</span>
        <span>${item.title}</span>
      </a>
    `;

    li.addEventListener("click", () => {
      
      document
        .querySelectorAll(".list")
        .forEach((el) => el.classList.remove("active"));
      li.classList.add("active");

      
      localStorage.setItem("activeMenu", item.title);

      
      const main = document.querySelector("main._mainPage__main");
      main.setAttribute("data-import", item.path);
      renderComponent([main]);

      
      if (item.path.includes("dashBoard.html")) {
        setTimeout(() => {
          if (window.renderDashboardCards) window.renderDashboardCards();
          if (window.loadName) window.loadName();
        }, 50);
      }
    });

    container.appendChild(li);
  });

 
  const saved = localStorage.getItem("activeMenu");
  let defaultItem = list[0]; 
  if (saved) {
    const savedItem = list.find((i) => i.title === saved);
    if (savedItem) defaultItem = savedItem;
  }

  const allList = Array.from(document.querySelectorAll(".list"));
  const activeList = allList.find((li) =>
    li.innerText.includes(defaultItem.title)
  );
  if (activeList) activeList.classList.add("active");

  // Load default component
  const main = document.querySelector("main._mainPage__main");
  main.setAttribute("data-import", defaultItem.path);
  renderComponent([main]);

  // If default is Dashboard, render cards and name
  if (defaultItem.path.includes("dashBoard.html")) {
    setTimeout(() => {
      if (window.renderDashboardCards) window.renderDashboardCards();
      if (window.loadName) window.loadName();
    }, 50);
  }
}

initSidebar();



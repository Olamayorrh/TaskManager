window.renderDashboardCards = function () {
  const card1 = document.querySelector(".cardUpper");
  if (!card1) return;
  card1.innerHTML = "";

  const cardItems = [
    {
      title: "Active Tasks",
      logo: "/assets/images/checkBox.png",
      display: "0",
      comment: "0 completed",
      color: "#155DFC",
    },
    {
      title: "Total Expenses",
      logo: "/assets/images/dollar.png",
      display: "0",
      comment: "This period",
      color: "#0092B8",
    },
    {
      title: "Total Notes",
      logo: "/assets/images/note.png",
      display: "0",
      comment: "Saved Notes",
      color: "#00A63E",
    },
    {
      title: "Completion Rate",
      logo: "/assets/images/arrow.png",
      display: "0",
      comment: "Task Completion",
      color: "#4F39F6",
    },
  ];

  cardItems.forEach((child) => {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="dashboard-area__card">
        <div class="dashboard-area__card-top">
          <p>${child.title}</p>
          <img src="${child.logo}" alt="logo" style="background-color: ${child.color};" class="logoImage"/>
        </div>
        <div class="dashboard-area__card-bottom">
          <h1>${child.display}</h1>
          <p>${child.comment}</p>
        </div>
      </div>
    `;
    card1.appendChild(template.content.firstElementChild);
  });


  const quickActions = [
    {
      logo: "/assets/images/check_blue.png",
      title: "Create New Task",
      desc: "Add a task to your list",
      color:"#DBEAFE"
    },

    {
      logo: "/assets/images/dollar_teal.png",
      title: "Track Expense",
      desc: "Record a new expense",
      color:"#CEFAFE"
    },

    {
      logo: "/assets/images/note_green.png",
      title: "Write Note",
      desc: "capture your thoughts",
      color:"#DBFCE7"
    },
  ];

   const section = document.querySelector(".section_card");
    if (!section) return;

     quickActions.forEach((card) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("task_item");
      cardDiv.innerHTML = `
      <div class="logos" style=background-color:${card.color};><img src='${card.logo}'/></div>
      <div class="text">
          <p class="header">${card.title}</p>
          <p class="faint">${card.desc}</p>
      </div>
    `;
      section.appendChild(cardDiv);
      console.log(cardDiv);
      
    });
};

// to get userName
window.loadName = function () {
  const nameElem = document.getElementById("fullName");
  if (!nameElem) return;
  const fullName = localStorage.getItem("currentUserName") || "";
  nameElem.innerText = fullName;
};


document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".cardUpper")) {
    window.renderDashboardCards();
    window.loadName();
  }
});



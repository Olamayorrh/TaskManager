const card1 = document.querySelector(".cardUpper");

console.log(card1);


{/* <div class="dashboard-area__card">
  <div class="dashboard-area__card-top">
    <p>Active Tasks</p>
    <img src="/assets/images/logo_image.svg" alt="" />
  </div>
  <div class="dashboard-area__card-bottom">
    <h1>0</h1>
    <p>0 completed</p>
  </div>
</div>; */}



const cardItems = [
  {
    title: "Active Tasks",
    logo: "/assets/images/logo_image.svg",
    display: "0",
    comment: "0 completed",
  },

  {
    title: "Total Expenses",
    logo: "/assets/images/logo_image.svg",
    display: "0",
    comment: "This period",
  },

  {
    title: "Total Notes",
    logo: "/assets/images/logo_image.svg",
    display: "0",
    comment: "Saved Notes",
  },

  {
    title: "Completion Rate",
    logo: "/assets/images/logo_image.svg",
    display: "0",
    comment: "Task Completion",
  },
];

const createCard1 = (child)=>{
    
  const template = document.createElement("template");

  template.innerHTML = `
     <div class="dashboard-area__card">
        <div class="dashboard-area__card-top">
            <p>${child.title}</p>
            <img src="${child.logo}" alt="logo" />
        </div>
        <div class="dashboard-area__card-bottom">
            <h1>${child.display}</h1>
            <p>${child.comment}</p>
        </div>
    </div>
  `;

  const card1 = template.content.firstElementChild;

  return card1;
}

cardItems.forEach((elem) => {
  const card= createCard1(elem);
  console.log(elem);

  card1.appendChild(card);
});



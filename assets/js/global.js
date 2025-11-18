const componentElements = document.querySelectorAll("[data-import]");

const renderComponent = (elements)=>{
    for (let element of elements) {
      const dataImport = element.getAttribute("data-import");
        fetch(dataImport)
        .then((res) => {
          if (!res.ok) {
            throw "Not found";
          }
          return res.text();
        })
        .then((component) => {
          element.innerHTML = component;
          loadComponentScripts(element);
          const compElements = element.querySelectorAll("[data-import]");
          renderComponent(compElements)
        })
        .catch(() => {
          element.innerHTML = `<h4>Component not found</h4>`;
        });
    }
}



renderComponent(componentElements);

function loadComponentScripts(element) {
  const scripts = element.querySelectorAll("script");
  for (let script of scripts) {
    const newScript = document.createElement("script");
    if (script.src) {
      newScript.src = script.src;
    }
    if (script.textContent) {
      newScript.textContent = script.textContent;
    }
    script.remove();

    document.body.appendChild(newScript);
  }
}


// const fibonacci = (number)=>{
// console.log(number);
    
//  if(number < 0){
//     return (`${number} must be more than 0`)
//  }
//  if( number == 0 || number == 1){
//     return(number)
//  }
 
//  return fibonacci(number - 1) + fibonacci(number - 2)
// }
// console.log(fibonacci(9));



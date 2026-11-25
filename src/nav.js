const contentDiv = document.querySelector(".content");

function render() {
  const nav = document.createElement("nav");
  const buttons = ["Home", "Menu", "About"];
  buttons.forEach((btnName) => {
    btnEl = document.createElement("button");
    btnEl.textContent = btnName;
    nav.appendChild(btnEl);
  });
  contentDiv.appendChild(nav);
}

export { render };

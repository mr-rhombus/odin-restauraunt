const nav = document.querySelector("nav");

function render() {
  const buttons = ["Home", "Menu", "About"];
  buttons.forEach((btnName) => {
    btnEl = document.createElement("button");
    btnEl.textContent = btnName;
    nav.appendChild(btnEl);
  });
}

export { render };

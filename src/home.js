import bannerImg from "../assets/sleep_banner.png";

import { faker } from "@faker-js/faker";

const contentDiv = document.querySelector(".content");

function render() {
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("home-img");
  const imgEl = document.createElement("img");
  imgEl.src = bannerImg;
  imgDiv.appendChild(imgEl);
  contentDiv.appendChild(imgDiv);

  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("home-description");
  descriptionDiv.textContent = faker.lorem.paragraph();
  contentDiv.appendChild(descriptionDiv);
}

export { render };

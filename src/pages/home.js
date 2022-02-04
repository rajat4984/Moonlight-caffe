import "../styles/home.css";
export default function homeFunction() {
  const content = document.querySelector("#content");

  // ----------------------NAVBAR-----------------------------
  const navBar = document.createElement("div");
  const brand = document.createElement("div");
  const moonIcon = document.createElement("i");
  let tabs = document.createElement("div");
  const tabItem1 = document.createElement("div");
  const tabItem2 = document.createElement("div");
  const tabItem3 = document.createElement("div");

  navBar.classList.add("navbar");
  brand.classList.add("brand");
  moonIcon.classList.add("bi", "bi-moon-fill");
  tabs.classList.add("tabs");
  tabItem1.classList.add("tab-item");
  tabItem2.classList.add("tab-item");
  tabItem3.classList.add("tab-item");

  brand.textContent = "Moonlight ";
  tabItem1.textContent = "Home";
  tabItem2.textContent = "Menu";
  tabItem3.textContent = "Contact";

  tabs.append(tabItem1, tabItem2, tabItem3);
  brand.appendChild(moonIcon);
  navBar.append(brand, tabs);
  content.appendChild(navBar);

  // --------------------SLOGAN SECTION ------------------------------
  const sloganSection = document.createElement("div");
  const slogan = document.createElement("div");
  const img = document.createElement("img");

  slogan.textContent =
    " Everyone should believe in something. I believe I will have another coffee";
  img.setAttribute("src", "../src/assets/omid-armin-1UKx5_hhFLA-unsplash.jpg");
  img.setAttribute("alt", "coffee-image");

  sloganSection.classList.add("slogan-section");
  slogan.classList.add("slogan");
  img.classList.add("coffee-img");

  content.appendChild(sloganSection);
  sloganSection.append(slogan);
  sloganSection.append(img);

  // ----------------------TIMING SECTION ------------------------------

  const timingSection = document.createElement("div");
  const timingHeading = document.createElement("h2");
  const clockIcon = document.createElement("i");
  const timingGrid = document.createElement("div");
  const gridItem1 = document.createElement("div");
  const gridItem2 = document.createElement("div");
  const gridItem3 = document.createElement("div");
  const gridItem4 = document.createElement("div");
  const gridItem5 = document.createElement("div");
  const gridItem6 = document.createElement("div");
  const gridItem7 = document.createElement("div");

  timingHeading.textContent = "Timings ";
  gridItem1.textContent = "Sunday: 8am - 8pm";
  gridItem2.textContent = "Monday: 6am - 6pm";
  gridItem3.textContent = "Tuesday: 6am - 6pm";
  gridItem4.textContent = "Wednesday: 6am - 6pm";
  gridItem5.textContent = "Thursday: 6am - 10pm";
  gridItem6.textContent = "Friday: 6am - 10pm";
  gridItem7.textContent = "Saturday: 8am - 10pm";

  timingSection.classList.add("timing-section");
  timingHeading.classList.add("timing-heading");
  timingGrid.classList.add("timing-grid");
  clockIcon.classList.add("bi", "bi-alarm-fill");

  gridItem1.classList.add("grid-item");
  gridItem2.classList.add("grid-item");
  gridItem3.classList.add("grid-item");
  gridItem4.classList.add("grid-item");
  gridItem5.classList.add("grid-item");
  gridItem6.classList.add("grid-item");
  gridItem7.classList.add("grid-item");

  timingHeading.append(clockIcon);
  timingGrid.append(gridItem1);
  timingGrid.append(gridItem2);
  timingGrid.append(gridItem3);
  timingGrid.append(gridItem4);
  timingGrid.append(gridItem5);
  timingGrid.append(gridItem6);
  timingGrid.append(gridItem7);

  timingSection.appendChild(timingHeading);
  timingSection.appendChild(timingGrid);

  content.appendChild(timingSection);

  // -------------------------FOOTER-------------------------------
  const footer = document.createElement("div");
  const anchorTag = document.createElement("a");
  const gitIcon = document.createElement("i");

  footer.textContent = "Made by Rajat ";
  anchorTag.setAttribute("target", "blank");
  anchorTag.setAttribute("href", "https://github.com/rajat4984");

  footer.classList.add("footer");
  gitIcon.classList.add("bi", "bi-github");

  footer.appendChild(anchorTag);
  footer.appendChild(gitIcon);

  content.appendChild(footer);

  console.log(typeof tabs);
  let newTabs = document.querySelectorAll(".tabs");

  newTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      return e.target.textContent;
    });
  });
}

export default function navbarComponent() {
  const navBar = document.createElement("div");
  const brand = document.createElement("div");
  const moonIcon = document.createElement("i");
  const tabs = document.createElement("div");
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
}

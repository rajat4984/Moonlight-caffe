export default function menuFunction() {
  // ----------------------NAVBAR-----------------------------
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

  // ----------------------------CONTACT CONTAINER------------------------
  const contactContainer = document.createElement("div");
  const menu = document.createElement("div");
  const glassIcon = document.createElement("i")
  const menuHeading = document.createElement("h1");
  const menuGrid = document.createElement("div");
  let menuItem1 = document.createElement("div");
  let menuItem2 = document.createElement("div");
  let menuItem3 = document.createElement("div");
  let menuItem4 = document.createElement("div");
  let menuItem5 = document.createElement("div");
  let menuItem6 = document.createElement("div");
  let menuItem7 = document.createElement("div");
  let menuItem8 = document.createElement("div");
  let menuItem9 = document.createElement("div");
  let menuItem10 = document.createElement("div");
  let menuItem11 = document.createElement("div");
  let menuItem12 = document.createElement("div");
  let menuItem13 = document.createElement("div");
  let menuItem14 = document.createElement("div");
  let menuItem15 = document.createElement("div");
  let menuItem16 = document.createElement("div");
  let menuItem17 = document.createElement("div");
  let menuItem18 = document.createElement("div");
  let menuItem19 = document.createElement("div");
  let menuItem20 = document.createElement("div");
  let menuItem21 = document.createElement("div");

  const menuItemArray = [
    menuItem1,
    menuItem2,
    menuItem3,
    menuItem4,
    menuItem5,
    menuItem6,
    menuItem7,
    menuItem8,
    menuItem9,
    menuItem10,
    menuItem11,
    menuItem12,
    menuItem13,
    menuItem14,
    menuItem15,
    menuItem16,
    menuItem17,
    menuItem18,
    menuItem19,
    menuItem20,
    menuItem21,
  ];

  menuHeading.textContent = "Menu "

  menuItem2.textContent = "Short"
  menuItem2.textContent = "Tall"
  menuItem2.textContent = "Caffee Latte"
  menuItem2.textContent = "215"
  menuItem2.textContent = "245"
  menuItem2.textContent = "Cappuccino"
  menuItem2.textContent = "215"
  menuItem2.textContent = "245"
  menuItem2.textContent = ""
  menuItem2.textContent = "Short"
  menuItem2.textContent = "Short"
  menuItem2.textContent = "Short"
  menuItem2.textContent = "Short"
  menuItem2.textContent = "Short"
  menuItem2.textContent = "Short"
  menuItem2.textContent = "Short"
  menuItem2.textContent = "Short"

  classListFunc([contactContainer],"contact-container")
  classListFunc([menu],"menu")
  classListFunc([menuGrid],"menu-grid")
  classListFunc([menuHeading],"menu-heading")
  glassIcon.classList.add("bi","bi-cup-straw")


  classListFunc(menuItemArray,"menu-item")

  appendElement(content,[contactContainer])
  appendElement(contactContainer,[menu])
  appendElement(menu,[menuHeading])
  appendElement(menu,[menuGrid])
  appendElement(menuGrid,menuItemArray)
  appendElement(menuHeading,[glassIcon])

  function appendElement(el, arr) {
    for (let i = 0; i < arr.length; i++) {
      el.append(arr[i]);
    }
  }

  //classlist function
  function classListFunc(arr, className) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.add(className);
    }
  }
}

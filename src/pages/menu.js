import "../styles/menu.css";
import footerFunction from "./footer";

export default function menuFunction() {

  // ----------------------------CONTACT CONTAINER------------------------
  const contactContainer = document.createElement("div");
  const menu = document.createElement("div");
  const glassIcon = document.createElement("i");
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

  menuHeading.textContent = "Menu ";

  const menuItemText = [
    "",
    "Short",
    "Tall",
    "Caffee Latte",
    "215",
    "245",
    "Cappuccino",
    "215",
    "245",
    "Flat",
    "275",
    "305",
    "Americano",
    "250",
    "285",
    "Carramel Maechiato",
    "275",
    "300",
    "Chocolate Cappucino",
    "285",
    "310",
  ];

  appendText(menuItemArray, menuItemText);

  classListFunc([contactContainer], "contact-container");
  classListFunc([menu], "menu");
  classListFunc([menuGrid], "menu-grid");
  classListFunc([menuHeading], "menu-heading");
  glassIcon.classList.add("bi", "bi-cup-straw");

  classListFunc(menuItemArray, "menu-item");

  appendElement(content, [contactContainer]);
  appendElement(contactContainer, [menu]);
  appendElement(menu, [menuHeading]);
  appendElement(menu, [menuGrid]);
  appendElement(menuGrid, menuItemArray);
  appendElement(menuHeading, [glassIcon]);

  // ------------------------------FOOTER----------------------------------------------
  footerFunction()

  // -------------------------------FUNCTIONS----------------------------------------

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

  function appendText(menuItemArr, menuTextArr) {
    for (let i = 0; i < menuItemArr.length; i++) {
      menuItemArr[i].textContent = menuTextArr[i];
    }
  }
}

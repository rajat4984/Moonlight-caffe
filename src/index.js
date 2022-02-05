import homeFunction from "./pages/home.js";
import contactFunction from "./pages/contact.js";
import menuFunction from "./pages/menu.js";
import navbarComponent from "./pages/navbar.js";


navbarComponent();
let newFunction = homeFunction;

newFunction();
const content = document.querySelector("#content");
const tabs = document.querySelector(".tabs");

function removeElements(content) {
  while (content.childNodes.length > 1) {
    content.removeChild(content.lastChild);
  }
}
tabs.childNodes.forEach((node) => {
  node.addEventListener("click", (e) => {
    if (e.target.textContent === "Home") {
      removeElements(content);
      newFunction = homeFunction;
    } else if (e.target.textContent === "Menu") {
      removeElements(content);
      newFunction = menuFunction;
    } else if (e.target.textContent === "Contact") {
      removeElements(content);
      newFunction = contactFunction;
    }
    newFunction();
  });
});

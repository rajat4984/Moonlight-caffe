import "../styles/home.css";
import coffeeImage from "../../dist/92a122096778c03b71e3.jpg"
import footerFunction from "./footer";

export default function homeFunction() {
  const content = document.querySelector("#content");

  // --------------------SLOGAN SECTION ------------------------------
  const sloganSection = document.createElement("div");
  const slogan = document.createElement("div");
  const img = document.createElement("img");
  const myCoffeeImage = new Image();
  myCoffeeImage.src = coffeeImage;

  slogan.textContent =
    " Everyone should believe in something. I believe I will have another coffee";
  img.setAttribute("src", "assets/coffee.jpg");
  myCoffeeImage.setAttribute("alt", "coffee-image");

  sloganSection.classList.add("slogan-section");
  slogan.classList.add("slogan");
  myCoffeeImage.classList.add("coffee-img");

  content.appendChild(sloganSection);
  sloganSection.append(slogan);
  sloganSection.append(myCoffeeImage);

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

  classListFunc(
    [
      gridItem1,
      gridItem2,
      gridItem3,
      gridItem4,
      gridItem5,
      gridItem6,
      gridItem7,
    ],
    "grid-item"
  );

  appendElement(timingHeading, [clockIcon]);
  appendElement(timingGrid, [
    gridItem1,
    gridItem2,
    gridItem3,
    gridItem4,
    gridItem5,
    gridItem6,
    gridItem7,
  ]);

  appendElement(timingSection, [timingHeading, timingGrid]);

  appendElement(content, [timingSection]);

  // -------------------------FOOTER-------------------------------
  footerFunction()
  
  //Apending function
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

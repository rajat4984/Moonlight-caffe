import "../styles/contact.css";
import menuFunction from "../pages/home.js";
import navbarComponent from "./navbar";

export default function contactFunction() {
  const content = document.querySelector("#content");

  //   ---------------------CONTACT FORM----------------------------
  const contactContainer = document.createElement("div");
  const contactMenu = document.createElement("div");
  const contactHeading = document.createElement("div");
  const callIcon = document.createElement("i");
  const contactGrid = document.createElement("div");
  const contactItem1 = document.createElement("div");
  const contactItem2 = document.createElement("div");
  const contactItem3 = document.createElement("div");
  const contactItem4 = document.createElement("div");
  const contactItem5 = document.createElement("div");
  const contactItem6 = document.createElement("div");
  const contactItem7 = document.createElement("div");
  const contactItem8 = document.createElement("div");
  const contactItem9 = document.createElement("div");
  const label1 = document.createElement("label");
  const label2 = document.createElement("label");
  const label3 = document.createElement("label");
  const label4 = document.createElement("label");
  const input1 = document.createElement("input");
  const input2 = document.createElement("input");
  const input3 = document.createElement("input");
  const input4 = document.createElement("input");
  const submitBtn = document.createElement("button");

  label1.textContent = "First name";
  label2.textContent = "Last name";
  label3.textContent = "Work email";
  label4.textContent = "Mobile number";
  submitBtn.textContent = "Submit";
  contactHeading.textContent = "Contact us ";


  classListFunc([contactContainer], "contact-container");
  classListFunc([contactMenu], "menu");
  classListFunc([contactHeading], "menu-heading");
  classListFunc([contactGrid], "contact-grid");

  classListFunc(
    [
      contactItem1,
      contactItem2,
      contactItem3,
      contactItem1,
      contactItem4,
      contactItem5,
      contactItem6,
      contactItem7,
      contactItem8,
      contactItem9,
    ],
    "contact-item"
  );

  callIcon.classList.add("bi", "bi-telephone-fill");
  classListFunc([label1, label2, label3, label4], "form-label");
  classListFunc([input1, input2, input3, input4], "form-input");
  classListFunc([submitBtn], "submit-btn");
  appendElement(contactItem9, [submitBtn]);

  appendElement(contactItem1, [label1]);
  appendElement(contactItem2, [input1]);
  appendElement(contactItem3, [label2]);
  appendElement(contactItem4, [input2]);
  appendElement(contactItem5, [label3]);
  appendElement(contactItem6, [input3]);
  appendElement(contactItem7, [label4]);
  appendElement(contactItem8, [input4]);

  appendElement(contactGrid, [
    contactItem1,
    contactItem2,
    contactItem3,
    contactItem4,
    contactItem5,
    contactItem6,
    contactItem7,
    contactItem8,
    contactItem9,
  ]);

  appendElement(contactHeading, [callIcon]);
  appendElement(contactMenu, [contactHeading, contactGrid]);
  appendElement(contactContainer, [contactMenu]);
  appendElement(content, [contactContainer]);

  //Apending function
  function appendElement(el, arr) {
    for (let i = 0; i < arr.length; i++) {
      el.append(arr[i]);
    }
  }

  function classListFunc(arr, className) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.add(className);
    }
  }
}

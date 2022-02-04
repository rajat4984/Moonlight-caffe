import "../styles/contact.css";
export default function contactFunction() {
  const content = document.querySelector("#content");

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

  brand.textContent = "Contact us ";
  tabItem1.textContent = "Home";
  tabItem2.textContent = "Menu";
  tabItem3.textContent = "Contact";

  tabs.append(tabItem1, tabItem2, tabItem3);
  brand.appendChild(moonIcon);
  navBar.append(brand, tabs);
  content.appendChild(navBar);

  //   ---------------------CONTACT FORM----------------------------
  const contactContainer = document.createElement("div");
  const contactForm = document.createElement("contact-form");
  const flexItem1 = document.createElement("div");
  const flexItem2 = document.createElement("div");
  const flexItem3 = document.createElement("div");
  const flexItem4 = document.createElement("div");
  const flexItem5 = document.createElement("div");
  const label1 = document.createElement("label");
  const label2 = document.createElement("label");
  const label3 = document.createElement("label");
  const label4 = document.createElement("label");
  const input1 = document.createElement("input");
  const input2 = document.createElement("input");
  const input3 = document.createElement("input");
  const input4 = document.createElement("input");
  const submitBtn = document.createElement("button")

  label1.textContent = "First name"
  label2.textContent = "Last name"
  label3.textContent = "Work email"
  label4.textContent = "Mobile number"
  submitBtn.textContent = "Submit"


  classListFunc([contactContainer],"contact-container")
  classListFunc([contactForm],"contact-form")

  classListFunc([flexItem1,flexItem2,flexItem3,flexItem4,flexItem5],"flex-item")

  classListFunc([label1,label2,label3,label4],"form-label")

  classListFunc([input1,input2,input3,input4],"form-input")
  classListFunc([submitBtn],"submit-btn")

  appendElement(flexItem5,[submitBtn])

  appendElement(flexItem4,[label4,input4])
  appendElement(flexItem3,[label3,input3])
  appendElement(flexItem2,[label2,input2])
  appendElement(flexItem1,[label1,input1])

  appendElement(contactForm,[flexItem1,flexItem2,flexItem3,flexItem4,flexItem5])

  appendElement(contactContainer,[contactForm])
  appendElement(content,[contactContainer])


  //Apending function
  function appendElement(el,arr){
    for (let i = 0; i < arr.length; i++) {
      el.append(arr[i])
    }
  }

  function classListFunc(arr,className){
    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.add(className)
    }
  }
}


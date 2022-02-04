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

  contactContainer.classList.add("contact-container")
  contactForm.classList.add("contact-form")
  flexItem1.classList.add("flex-item")
  flexItem2.classList.add("flex-item")
  flexItem3.classList.add("flex-item")
  flexItem4.classList.add("flex-item")
  flexItem5.classList.add("flex-item")

  label1.classList.add("form-label")
  label2.classList.add("form-label")
  label3.classList.add("form-label")
  label4.classList.add("form-label")

  input1.classList.add("form-input")
  input2.classList.add("form-input")
  input3.classList.add("form-input")
  input4.classList.add("form-input")
  submitBtn.classList.add("submit-btn")

  flexItem5.append(submitBtn)

  flexItem4.append(label4)
  flexItem4.append(input4)
  flexItem3.append(label3)
  flexItem3.append(input3)
  flexItem2.append(label2)
  flexItem2.append(input2)
  flexItem1.append(label1)
  flexItem1.append(input1)

  contactForm.appendChild(flexItem1)
  contactForm.appendChild(flexItem2)
  contactForm.appendChild(flexItem3)
  contactForm.appendChild(flexItem4)
  contactForm.appendChild(flexItem5)

  contactContainer.appendChild(contactForm)

  content.appendChild(contactContainer)



  // --------------------FOOTER-----------------------------
}


export default function footerFunction() {
  const footer = document.createElement("div");
  const anchorTag = document.createElement("a");
  const gitIcon = document.createElement("i");

  footer.textContent = "Made by Rajat ";
  anchorTag.setAttribute("target", "blank");
  anchorTag.setAttribute("href", "https://github.com/rajat4984");

  gitIcon.classList.add("bi", "bi-github");
  footer.classList.add("footer");
  footer.append(anchorTag);
  footer.append(gitIcon);
  content.append(footer);

}

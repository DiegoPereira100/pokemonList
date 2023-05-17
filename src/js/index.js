const btnChangeTheme = document.getElementById("button-changeTheme")
const body = document.querySelector("body");
const icon = document.querySelector(".button-image")

btnChangeTheme.addEventListener("click", () => {
  const themeDarkStatus = body.classList.contains("dark-mode")

  body.classList.toggle("dark-mode")

  if (themeDarkStatus) {
    icon.setAttribute("src", "./src/imgs/sun.png")
  } else {
    icon.setAttribute("src", "./src/imgs/moon.png")
  }
});
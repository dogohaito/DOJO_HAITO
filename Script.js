const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
const cookieBox = document.querySelector(".wrapper");
const buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  if (document.cookie.includes("chouaibi-developer")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      if (button.id == "acceptBtn") {
        /* 60 * 60 * 24 * 30 = 1 month */
        document.cookie = "cookieBy=chouaibi-developer; max-age=" + 60 * 60 * 24 * 30;
      }
    })
  })
}

window.addEventListener("load", executeCodes)

function videoslider(links){
  document.querySelector(".sli").src = links;
}



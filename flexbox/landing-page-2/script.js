const menuBtn = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu-bar");

const displayMenu = (menu) => {
  menu.classList.toggle("hide");
};

menuBtn.addEventListener("click", () => {
  displayMenu(menu);
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    document.querySelector("header").classList.add("header-shadow");
  } else {
    document.querySelector("header").classList.remove("header-shadow");
  }

  console.log(window);
});

(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header__active");
      console.log("work");
    } else {
      header.classList.remove("header__active");
      console.log("dont work");
    }
  };
})();

//Burger handler

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuCloseItem = document.querySelector(".header__nav__close");
  console.log(burgerItem);
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav__active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__nav__active");
  });
})();

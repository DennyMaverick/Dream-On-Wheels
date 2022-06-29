const menuIcon = document.querySelector(".header__menu-icon")
// const menuArrows = document.querySelectorAll(".header__arrow-left");
const menuArrowOne = document.querySelector(".header__arrow-left--first")
const menuArrowTwo = document.querySelector(".header__arrow-left--second")
const menuArrowThree = document.querySelector(".header__arrow-left--third ")
const allContent = document.querySelector(".all-content")
const menu = document.querySelector(".header__menu")
const bodyEl = document.querySelector("body")
const munuLinks = document.querySelectorAll(".menu__item")

// * При изменении размера экрана отображать меню

menuIcon.addEventListener("click", function () {
  // * Превращение стрелок меню в крестик

  menuArrowOne.classList.toggle("header__arrow-left--rotate")
  menuArrowTwo.classList.toggle("header__arrow-left--translate")
  menuArrowThree.classList.toggle("hidden")

  // * На экранах выше 1399 px раскрывать меню, смещая весь контент страницы влево
  if (document.documentElement.clientWidth >= 1399) {
    menu.classList.toggle("header__menu--active")

    // * Смещение всего контента влево

    allContent.classList.toggle("all-content--replace")
  } else {
    // * Если экран меньше 1399px, то меню появляется не путем смещения контента, а плавным появлением

    menu.classList.toggle("header__menu--active-mobile")
  }
  bodyEl.classList.toggle("no-scroll")
})

munuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    //* скрытие меню

    menu.classList.remove("header__menu--active")
    menu.classList.remove("header__menu--active-mobile")

    //* превращение крестика в стрелки

    menuArrowOne.classList.remove("header__arrow-left--rotate")
    menuArrowTwo.classList.remove("header__arrow-left--translate")
    menuArrowThree.classList.remove("hidden")

    //* Возвращение контента на место

    allContent.classList.remove("all-content--replace")

    // * Добавление возможности скроллить

    bodyEl.classList.remove("no-scroll")
  })
})

const headerRegisterButton = document.querySelector(".header__register")
const footerRegisterButton = document.querySelector(".footer__register")
const popUp = document.querySelector(".pop-up")
const popUpCloseButton = document.querySelector(".pop-up__close")
const popUpSubmitButton = document.querySelector(".pop-up__submit")
const form = document.querySelector(".pop-up__main-container")
// Функции поп-апа

function popUpOpen() {
    popUp.classList.remove("pop-up_is-closed")
}

function popUpClose() {
    popUp.classList.add("pop-up_is-closed")
}

function formSubmit(evt) {
    evt.preventDefault();
    popUpClose()
}

// Слушатели событий

headerRegisterButton.addEventListener("click", popUpOpen)
footerRegisterButton.addEventListener("click", popUpOpen)
popUpCloseButton.addEventListener("click", popUpClose)
form.addEventListener("submit", formSubmit)


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
      },
  });
  
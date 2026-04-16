const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".open-button");
const modalBtnClose = document.querySelector(".close-button");

const toggleModal = () => modal.classList.toggle("is-hiden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);

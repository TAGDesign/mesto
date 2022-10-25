const content = document.querySelector('.content');
const popup__opened = content.querySelector('.popup__opened');
const editButton = content.querySelector('.profile__editButton');
const closeButton = content.querySelector('div.popup form.popup__container .popup__closeButton');

function popupWork() {
  popup__opened.classList.toggle('popup__opened')
}

editButton.addEventListener('click', popupWork);
closeButton.addEventListener('click', popupWork);

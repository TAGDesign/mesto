const content = document.querySelector('.content');
const popup__opened = content.querySelector('.popup__opened');
const editButton = content.querySelector('.profile__editButton');
const form = content.querySelector('div.popup .popup__container');
const closeButton = form.querySelector('.popup__closeButton');

function popupWork() {
  popup__opened.classList.toggle('popup__opened')
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault()
})

editButton.addEventListener('click', popupWork);
closeButton.addEventListener('click', popupWork);

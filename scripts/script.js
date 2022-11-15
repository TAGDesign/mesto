const content = document.querySelector('.content');
const modalWindow = document.querySelector('.popup');
const form = modalWindow.querySelector('.popup__container');
const closeButton = form.querySelector('.popup__closeButton');
const editButton = content.querySelector('.profile__editButton');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__subtitle');
const titleInputValue = form.querySelector('.popup__name');
const descriptionInputValue = form.querySelector('.popup__job');

function openModalWindow() {
  modalWindow.classList.remove('popup_is-open');
  titleInputValue.value = profileTitle.textContent;
  descriptionInputValue.value = profileDescription.textContent;
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileTitle.textContent = titleInputValue.value;
  profileDescription.textContent = descriptionInputValue.value;
  modalWindow.classList.add('popup_is-open');
  })

editButton.addEventListener('click', openModalWindow);

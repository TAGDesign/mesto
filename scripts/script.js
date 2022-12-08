import {initialCards} from './data.js'

const initialListCard = document.querySelector('.elements');
const modalWindow = document.querySelector('.popup');
const form = document.querySelector('.popup__form');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupEditButton = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__subtitle');
const titleInputValue = document.querySelector('.popup__input_content_name');
const descriptionInputValue = document.querySelector('.popup__input_content_job');


function createElement(item) {
  const template = `
    <article class="element">
      <img class="element__image" src="${item.link}" alt="руины каменного храма на фоте леса">
      <div class="element__line">
        <h2 class="element__title">${item.name}</h2>
        <button class="element__favorite-button" aria-label="Избранное" type="button"></button>
      </div>
    </article>
  `
  console.log(template);
  initialListCard.innerHTML += template;
};

initialCards.forEach(function(item) {
  createElement(item);
});

function importFormData() {
  titleInputValue.value = profileTitle.textContent;
  descriptionInputValue.value = profileDescription.textContent;
}

function exportFormData() {
  profileTitle.textContent = titleInputValue.value;
  profileDescription.textContent = descriptionInputValue.value;
}

function openModalWindow() {
  modalWindow.classList.add('popup_is-open');
}

function closeModalWindow() {
  modalWindow.classList.remove('popup_is-open');
}

function openEditForm() {
  openModalWindow();
  importFormData();
}

function closeEditForm(evt) {
  evt.preventDefault();
  exportFormData();
  closeModalWindow();
}

popupEditButton.addEventListener('click', openEditForm);
form.addEventListener('submit', closeEditForm);
popupCloseButton.addEventListener('click', closeModalWindow);

import {initialCards} from './data.js'

const initialListCard = document.querySelector('.elements');
const cardTemplate =
    document.querySelector('#cardList-template').content.querySelector('.element');
const modalWindow = document.querySelector('.popup');
const form = document.querySelector('.popup__form');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupEditButton = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__subtitle');
const titleInputValue = document.querySelector('.popup__input_content_name');
const descriptionInputValue = document.querySelector('.popup__input_content_job');

function createElement(item) {
  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.element__title');
  cardTitle.textContent = item.name;
  const cardImage = card.querySelector('.element__image');
  cardImage.src = item.link;
  const cardAlt = card.querySelector('.element__image');
  cardImage.alt = item.alt;
  return card;
};

initialCards.forEach(function(item) {
  const element = createElement(item);
  initialListCard.append(element);
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

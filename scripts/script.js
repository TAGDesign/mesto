import { initialCards } from './data.js'

const initialListCard = document.querySelector('.elements');
const cardTemplate =
  document.querySelector('#cardList-template').content.querySelector('.element');
const modalWindow = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupEditButton = document.querySelector('.profile__edit-button');
const popupSubmitButton = document.querySelector('.popup__submit-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__subtitle');
const titleInputValue = document.querySelector('.popup__input_content_name');
const descriptionInputValue = document.querySelector('.popup__input_content_job');

const modalAddWindow = document.querySelector('.popup-add');
const popupAddCloseButton = document.querySelector('.popup-add__close-button');
const popupAddButton = document.querySelector('.profile__add-button');
const popupAddSubmitButton = document.querySelector('.popup-add__submit-button');
const cardTitleInputValue = document.querySelector('.popup-add__input_card_name');
const cardLinkInputValue = document.querySelector('.popup-add__input_card_link');

const modalCardWindow = document.querySelector('.popup-card');
const popupCardCloseButton = document.querySelector('.popup-card__close-button');
const popupCardImage = document.querySelector('.popup-card__image');
const popupCardTitle = document.querySelector('.popup-card__title');


//cards
function createElement(item) {
  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.element__title');
  cardTitle.textContent = item.name;
  const cardImage = card.querySelector('.element__image');
  cardImage.src = item.link;
  const cardAlt = card.querySelector('.element__image');
  cardImage.alt = item.alt;
  const cardLikeButton = card.querySelector('.element__favorite-button');
  cardLikeButton.addEventListener('click', likeButtonClick);
  const cardDeleteButton = card.querySelector('.element__delete-button');
  cardDeleteButton.addEventListener('click', deleteButtonClick);
  cardImage.addEventListener('click', () => openCardWindow(item),);

  return card;
};

function likeButtonClick(evt) {
  evt.target.classList.toggle('element__favorite-button_is-active');
}

function deleteButtonClick(evt) {
  evt.target.closest('.element').remove();
}

initialCards.forEach(function (item) {
  const element = createElement(item);
  initialListCard.append(element);
});

//editPopup
function importFormData() {
  titleInputValue.value = profileTitle.textContent;
  descriptionInputValue.value = profileDescription.textContent;
}

function exportFormData() {
  profileTitle.textContent = titleInputValue.value;
  profileDescription.textContent = descriptionInputValue.value;
}

function openModalWindow() {
  modalWindow.classList.remove('popup_is-close');
  modalWindow.classList.add('popup_is-open');
}

function closeModalWindow() {
  modalWindow.classList.remove('popup_is-open');
  modalWindow.classList.add('popup_is-close');
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
popupSubmitButton.addEventListener('click', closeEditForm);
popupCloseButton.addEventListener('click', closeModalWindow);

//addPopup
function openAddWindow() {
  modalAddWindow.classList.remove('popup-add_is-close');
  modalAddWindow.classList.add('popup-add_is-open');
  cardTitleInputValue.value = "";
  cardLinkInputValue.value = "";
}

function closeAddWindow() {
  modalAddWindow.classList.remove('popup-add_is-open');
  modalAddWindow.classList.add('popup-add_is-close');
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  const card = {
    name: cardTitleInputValue.value,
    link: cardLinkInputValue.value
  }

  const element = createElement(card);
  initialListCard.prepend(element);

  closeAddWindow();

}

popupAddButton.addEventListener('click', openAddWindow);
popupAddCloseButton.addEventListener('click', closeAddWindow);
popupAddSubmitButton.addEventListener('click', handleAddFormSubmit);


//cardPopup

function openCardWindow(item) {
  modalCardWindow.classList.add('popup-card_is-open');
  modalCardWindow.classList.remove('popup-card_is-close');
  popupCardImage.src = item.link;
  popupCardTitle.textContent = item.name;
  popupCardImage.alt = item.alt;
}

function closeCardWindow() {
  modalCardWindow.classList.remove('popup-card_is-open');
  modalCardWindow.classList.add('popup-card_is-close');
}

popupCardCloseButton.addEventListener('click', closeCardWindow);


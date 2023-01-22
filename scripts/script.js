import { initialCards } from './data.js'

const initialListCard = document.querySelector('.elements');
const cardTemplate =
  document.querySelector('#cardList-template').content.querySelector('.element');
const profilePopup = document.querySelector('.popup-profile');
const profilePopupCloseButton = document.querySelector('.popup__close-button');
const profilePopupEditButton = document.querySelector('.profile__edit-button');
const profilePopupSubmitButton = document.querySelector('.popup__submit-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__subtitle');
const profileTitleInputValue = document.querySelector('.popup__input_content_name');
const profileDescriptionInputValue = document.querySelector('.popup__input_content_job');

const cardPopup = document.querySelector('.popup-add');
const cardPopupCloseButton = document.querySelector('.popup-add__close-button');
const cardPopupButton = document.querySelector('.profile__add-button');
const cardPopupSubmitButton = document.querySelector('.popup-add__submit-button');
const cardPopupTitleInputValue = document.querySelector('.popup-add__input_card_name');
const cardPopupLinkInputValue = document.querySelector('.popup-add__input_card_link');

const imagePopup = document.querySelector('.popup-card');
const imagePopupCardCloseButton = document.querySelector('.popup-card__close-button');
const imagePopupCardImage = document.querySelector('.popup-card__image');
const imagePopupCardTitle = document.querySelector('.popup-card__title');

//cards
function createElement(item) {
  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.element__title');
  cardTitle.textContent = item.name;
  const cardImage = card.querySelector('.element__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
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

//profilePopup
function closePopup() {
  profilePopup.classList.remove('popup_is-open');
  profilePopup.classList.add('popup_is-close');
}

function importFormData() {
  profileTitleInputValue.value = profileTitle.textContent;
  profileDescriptionInputValue.value = profileDescription.textContent;
}

function exportFormData() {
  profileTitle.textContent = profileTitleInputValue.value;
  profileDescription.textContent = profileDescriptionInputValue.value;
}

function openProfileForm() {
  profilePopup.classList.remove('popup_is-close');
  profilePopup.classList.add('popup_is-open');
  importFormData();
}

function closeProfileForm(evt) {
  evt.preventDefault();
  exportFormData();
  profilePopup.classList.remove('popup_is-open');
}

profilePopupEditButton.addEventListener('click', openProfileForm);
profilePopupSubmitButton.addEventListener('click', closeProfileForm);
profilePopupCloseButton.addEventListener('click', closePopup);

//cardPopup
function openAddWindow() {
  cardPopup.classList.remove('popup-add_is-close');
  cardPopup.classList.add('popup-add_is-open');
  cardPopupTitleInputValue.value = "";
  cardPopupLinkInputValue.value = "";
}

function closeAddWindow() {
  cardPopup.classList.remove('popup-add_is-open');
  cardPopup.classList.add('popup-add_is-close');
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  const card = {
    name: cardPopupTitleInputValue.value,
    alt: cardPopupTitleInputValue.value,
    link: cardPopupLinkInputValue.value
  }

  const element = createElement(card);
  initialListCard.prepend(element);

  closeAddWindow();

}

cardPopupButton.addEventListener('click', openAddWindow);
cardPopupCloseButton.addEventListener('click', closeAddWindow);
cardPopupSubmitButton.addEventListener('click', handleAddFormSubmit);


//cardPopup

function openCardWindow(item) {
  imagePopup.classList.add('popup-card_is-open');
  imagePopup.classList.remove('popup-card_is-close');
  imagePopupCardImage.src = item.link;
  imagePopupCardTitle.textContent = item.name;
  imagePopupCardImage.alt = item.alt;
}

function closeCardWindow() {
  imagePopup.classList.remove('popup-card_is-open');
  imagePopup.classList.add('popup-card_is-close');
}

imagePopupCardCloseButton.addEventListener('click', closeCardWindow);

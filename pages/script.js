// Темплейты
const content = document.querySelector('.content');

// Врапперы
const modalWindow = content.querySelector('.popup');
const form = modalWindow.querySelector('.popup__container');

//Кнопки и прочие дом узлы
const editButton = content.querySelector('.profile__editButton');
const closeButton = form.querySelector('.popup__closeButton');

//DOM узлы профиля
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__subtitle');

// Данные форм и элементы форм
const titleInputValue = form.querySelector('.popup__name');
const descriptionInputValue = form.querySelector('.popup__job');

function openModalWindow() {
  modalWindow.classList.remove('popup__opened');
  titleInputValue.value = profileTitle.textContent;
  descriptionInputValue.value = profileDescription.textContent;
}

function closeModalWindow() {
  modalWindow.classList.add('popup__opened');
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileTitle.textContent = titleInputValue.value;
  profileDescription.textContent = descriptionInputValue.value;
  modalWindow.classList.add('popup__opened');
  })

editButton.addEventListener('click', openModalWindow);

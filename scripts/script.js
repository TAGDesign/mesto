const content = document.querySelector('.content');
const modalWindow = document.querySelector('.popup');
const form = modalWindow.querySelector('.popup__container');
const popupCloseButton = form.querySelector('.popup__close-button');
const popupEditButton = content.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__subtitle');
const titleInputValue = form.querySelector('.popup__input_content_name');
const descriptionInputValue = form.querySelector('.popup__input_content_job');

function formImport() {
  titleInputValue.value = profileTitle.textContent;
  descriptionInputValue.value = profileDescription.textContent;
}

function formExport() {
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
  formImport();
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  formExport();
  closeModalWindow()
})

popupEditButton.addEventListener('click', openEditForm);
popupCloseButton.addEventListener('click', closeModalWindow);

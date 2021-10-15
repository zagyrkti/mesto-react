/*------------------Elements------------------*/

const profileEditBtn = document.querySelector(".profile__edit");
const profileEditForm = document.querySelector(".popup-form_type_profile-edit");

const addCardBtn = document.querySelector(".profile__add");
const addCardForm = document.querySelector(".popup-form_type_add-card");

const changeAvatarBtn = document.querySelector(".profile__avatar")
const changeAvatarForm = document.querySelector(".popup-form_type_change-avatar");
/*------------------Selectors------------------*/

const cardTemplateSelector = ".card-template";
const cardsContainerSelector = ".cards";

const popupSelectors = {
  profileEdit : ".popup_type_profile-edit",
  addCard : ".popup_type_add-card",
  figure : ".popup_type_figure",
  changeAvatar : ".popup_type_change-avatar",
  confirmation : ".popup_type_confirmation",
}

const profileSelectors = {
  name : ".profile__name",
  status : ".profile__status",
  avatar : ".profile__img",
}

const selectorConfig = {
  formSelector: '.popup-form',
  inputSelector: '.popup-form__input',
  submitButtonSelector: '.popup-form__save',
  inactiveButtonClass: 'popup-form__save_disabled',
  inputErrorClass: 'popup-form__input_type_error',
};

const options = {
  token: "29656b2d-ee52-401a-a717-4267ea0b7d96",
  cardsUrl: "https://mesto.nomoreparties.co/v1/cohort-24/cards",
  userUrl: "https://mesto.nomoreparties.co/v1/cohort-24/users/me",
  avatarUrl: "https://mesto.nomoreparties.co/v1/cohort-24/users/me/avatar",
  likesUrl: "https://mesto.nomoreparties.co/v1/cohort-24/cards/likes",
  headers: {
    authorization: "29656b2d-ee52-401a-a717-4267ea0b7d96",
    'Content-Type': 'application/json',
  }
}

/*------------------------------------*/

export {
  profileEditBtn,
  profileEditForm,
  addCardBtn,
  addCardForm,
  selectorConfig,
  popupSelectors,
  cardTemplateSelector,
  profileSelectors,
  cardsContainerSelector,
  options,
  changeAvatarBtn,
  changeAvatarForm,
}

/*const consts = {
  profileEditBtn: document.querySelector(".profile__edit"),
  profileEditForm: document.querySelector(".popup-form_type_profile-edit"),
  addCardBtn: document.querySelector(".profile__add"),
  addCardForm: document.querySelector(".popup-form_type_add-card"),
}*/

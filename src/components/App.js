import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React, {useState} from "react";
import PopupWithImage from "./PopupWithImage";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = useState({})

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData)
  }

  /*Вызывать все сеттеры чтобы закрыть один конкретный попап это какое-то дно
    сделал через передачу сеттера, ничего лучше не придумалось, если есть вариант получше буду благодарен*/
/*  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
  }*/

  return (
      <>
        <div className="page">
          <Header/>
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
          <Footer/>
        </div>

        <PopupWithForm title='Редактировать профиль' name='profile-edit' submitText='Сохранить'
                       isOpen={isEditProfilePopupOpen}
                       onClose={setIsEditProfilePopupOpen}>
          <label>
            <input type="text" name="name" minLength="2" maxLength="40" required
                   className="popup-form__input popup-form__input_type_top popup-form__input_data_profile-name"
                   placeholder="Имя"
                   defaultValue="Имя"/>
            <span className="popup-form__input-error popup-form__input-error_type_name"></span>
          </label>
          <label>
            <input type="text" name="status" minLength="2" maxLength="200" required defaultValue="Статус"
                   className="popup-form__input popup-form__input_type_normal popup-form__input_data_profile-status"
                   placeholder="Статус"/>
            <span className="popup-form__input-error popup-form__input-error_type_status"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm title='Изменить аватар' name='change-avatar' submitText='Сохранить'
                       isOpen={isEditAvatarPopupOpen}
                       onClose={setIsEditAvatarPopupOpen}>
          <label>
            <input type="url" name="link" required
                   className="popup-form__input popup-form__input_type_top popup-form__input_data_avatar-link"
                   placeholder="Ссылка на картинку"/>
            <span className="popup-form__input-error popup-form__input-error_type_avatar-link"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm title='Новое место' name='add-card' submitText='Сохранить'
                       isOpen={isAddPlacePopupOpen}
                       onClose={setIsAddPlacePopupOpen}>
          <label>
            <input type="text" name="name" minLength="2" maxLength="30" required
                   className="popup-form__input popup-form__input_type_top popup-form__input_data_card-name"
                   placeholder="Название"/>
            <span className="popup-form__input-error popup-form__input-error_type_card-name"></span>
          </label>
          <label>
            <input type="url" name="link" required
                   className="popup-form__input popup-form__input_type_normal popup-form__input_data_card-link"
                   placeholder="Ссылка на картинку"/>
            <span className="popup-form__input-error popup-form__input-error_type_card-link"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm title='Вы уверены?' name='confirmation' submitText='Да'/>
        <PopupWithImage card={selectedCard} onClose={setSelectedCard}/>
      </>
  );
}

export default App;

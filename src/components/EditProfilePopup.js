import PopupWithForm from "./PopupWithForm";
import {useState, useContext, useEffect} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext)
  const [name, setName] = useState("")
  const [about, setAbout] = useState("")
  const [processing, setProcessing] = useState(false)

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleAboutChange(e) {
    setAbout(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser(name, about, setProcessing);
  }

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser, props.isOpen]);

  return (
      <PopupWithForm title='Редактировать профиль' name='profile-edit' submitText={processing ? "Сохранение..." : "Сохранить"}
                     isOpen={props.isOpen}
                     onClose={props.onClose}
                     onSubmit={handleSubmit}>
        <label>
          <input type="text" name="name" minLength="2" maxLength="40" required
                 className="popup-form__input popup-form__input_type_top popup-form__input_data_profile-name"
                 value={name}
                 onChange={handleNameChange}
                 placeholder="Имя"/>
          <span className="popup-form__input-error popup-form__input-error_type_name"></span>
        </label>
        <label>
          <input type="text" name="status" minLength="2" maxLength="200" required
                 className="popup-form__input popup-form__input_type_normal popup-form__input_data_profile-status"
                 value={about}
                 onChange={handleAboutChange}
                 placeholder="Статус"/>
          <span className="popup-form__input-error popup-form__input-error_type_status"></span>
        </label>
      </PopupWithForm>
  )
}

export default EditProfilePopup
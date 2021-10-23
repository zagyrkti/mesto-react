import PopupWithForm from "./PopupWithForm";
import {useState} from "react";


function AddPlacePopup(props) {
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [processing, setProcessing] = useState(false)

  function reset() {
    setName('')
    setLink('')
  }

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleLinkChange(e) {
    setLink(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace(name, link, setProcessing, reset);
  }

  return (
      <PopupWithForm title='Новое место' name='add-card' submitText={processing ? "Сохранение..." : "Сохранить"}
                     isOpen={props.isOpen}
                     onClose={props.onClose}
                     onSubmit={handleSubmit}>
        <label>
          <input type="text" name="name" minLength="2" maxLength="30" required value={name}
                 className="popup-form__input popup-form__input_type_top popup-form__input_data_card-name"
                 placeholder="Название" onChange={handleNameChange}/>
          <span className="popup-form__input-error popup-form__input-error_type_card-name"></span>
        </label>
        <label>
          <input type="url" name="link" required value={link}
                 className="popup-form__input popup-form__input_type_normal popup-form__input_data_card-link"
                 placeholder="Ссылка на картинку" onChange={handleLinkChange}/>
          <span className="popup-form__input-error popup-form__input-error_type_card-link"></span>
        </label>
      </PopupWithForm>
  )
}

export default AddPlacePopup
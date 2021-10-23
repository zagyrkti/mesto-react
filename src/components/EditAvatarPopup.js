import PopupWithForm from "./PopupWithForm";
import {useState, useRef} from "react";


function EditAvatarPopup(props) {
  const [processing, setProcessing] = useState(false)
  const inputRef = useRef()

  function resetInput() {
    inputRef.current.value = ""
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(inputRef.current.value, setProcessing, resetInput);
  }

  return (
      <PopupWithForm title='Изменить аватар' name='change-avatar' submitText={processing ? "Сохранение..." : "Сохранить"}
                     isOpen={props.isOpen}
                     onClose={props.onClose}
                     onSubmit={handleSubmit}>
        <label>
          <input type="url" name="link" required
                 className="popup-form__input popup-form__input_type_top popup-form__input_data_avatar-link"
                 placeholder="Ссылка на картинку"
                 ref={inputRef}/>
          <span className="popup-form__input-error popup-form__input-error_type_avatar-link"></span>
        </label>
      </PopupWithForm>
  )
}

export default EditAvatarPopup
import {useEffect, useCallback} from "react";

function PopupWithForm(props) {
  const {onClose} = props
  const handlePopupClose = useCallback((evt) => {
    if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close") || (evt.key === "Escape")) {
      if (onClose) {
        onClose()
      }
    }
  }, [onClose])

  useEffect(() => {
    if (props.isOpen) {
      document.addEventListener("keydown", handlePopupClose);

      return () => {
        document.removeEventListener("keydown", handlePopupClose);
      }
    }
  }, [props.isOpen, handlePopupClose])

  return (
      <div className={`popup_type_${props.name} popup ${props.isOpen && 'popup_opened'}`}
           onClick={handlePopupClose}>
        <form className={`popup-form popup-form_type_${props.name}`} name={props.name} onSubmit={props.onSubmit}>
          <h2 className="popup-form__title">{props.title}</h2>
          {props.children}
          <button type="submit"
                  className={`popup-form__save popup-form__save_owner_${props.name} link link_type_save`}>
            {props.submitText}
          </button>
          <button type="button"
                  className={`popup__close popup-form__close popup-form__close_owner_${props.name} link link_type_normal`}>
          </button>
        </form>
      </div>
  )
}

export default PopupWithForm
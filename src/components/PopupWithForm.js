function PopupWithForm(props) {
  const handlePopupClose = () => {
    props.onClose(false)
  }

  return (
      <div className={`popup_type_${props.name} popup ${props.isOpen && 'popup_opened'}`}>
        <form className={`popup-form popup-form_type_${props.name}`} name={props.name}>
          <h2 className="popup-form__title">{props.title}</h2>
          {props.children}
          <button type="submit"
                  className={`popup-form__save popup-form__save_owner_${props.name} link link_type_save`}>
            {props.submitText}
          </button>
          <button type="button"
                  className={`popup__close popup-form__close popup-form__close_owner_${props.name} link link_type_normal`}
                  onClick={handlePopupClose}>
          </button>
        </form>
      </div>
  )
}

export default PopupWithForm
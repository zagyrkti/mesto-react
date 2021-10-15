
function PopupWithImage(props) {
  function handleClose() {
    props.onClose({})
  }

  return (
      <div className={`popup_type_figure popup ${props.card.link && 'popup_opened'}`}>
        <figure className="popup-figure">
          <img src={props.card.link} className="popup-figure__image" alt={props.card.name} />
            <button type="button" className="popup__close popup-figure__close link link_type_normal"
            onClick={handleClose}
            ></button>
            <figcaption className="popup-figure__caption"></figcaption>
        </figure>
      </div>
  )
}

export default PopupWithImage
import {useEffect} from "react";

function ImagePopup(props) {
  function handleClose(evt) {
    if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close") || (evt.key === "Escape")) {
      if (props.onClose) {
        props.onClose({})
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleClose);

    return () => {
      document.removeEventListener("keydown", handleClose);
    }
  })

  return (
      <div className={`popup_type_figure popup ${props.card.link && 'popup_opened'}`}
           onClick={handleClose}>
        <figure className="popup-figure">
          <img src={props.card.link} className="popup-figure__image" alt={props.card.name}/>
          <button type="button" className="popup__close popup-figure__close link link_type_normal"></button>
          <figcaption className="popup-figure__caption">{props.card.name}</figcaption>
        </figure>
      </div>
  )
}

export default ImagePopup
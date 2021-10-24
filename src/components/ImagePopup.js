import {useEffect, useCallback} from "react";

function ImagePopup(props) {
  const {onClose} = props
  const handlePopupClose = useCallback((evt) => {
    if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close") || (evt.key === "Escape")) {
      if (onClose) {
        onClose()
      }
    }
  }, [onClose])

  useEffect(() => {
    if (props.card.link) {
      document.addEventListener("keydown", handlePopupClose);

      return () => {
        document.removeEventListener("keydown", handlePopupClose);
      }
    }
  }, [props.card.link, handlePopupClose])

  return (
      <div className={`popup_type_figure popup ${props.card.link && 'popup_opened'}`}
           onClick={handlePopupClose}>
        <figure className="popup-figure">
          <img src={props.card.link} className="popup-figure__image" alt={props.card.name}/>
          <button type="button" className="popup__close popup-figure__close link link_type_normal"></button>
          <figcaption className="popup-figure__caption">{props.card.name}</figcaption>
        </figure>
      </div>
  )
}

export default ImagePopup
import {useContext} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card(props) {

  const currentUser = useContext(CurrentUserContext)

  const isOwn = props.cardData.owner._id === currentUser._id;
  const isLiked = props.cardData.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = `cards__like link link_type_like ${isLiked && "cards__like_clicked"}`

  function handleClick() {
    props.onCardClick(props.cardData);
  }

  function handleLike() {
    props.onCardLike(props.cardData)
  }

  function handleDeleteClick() {
    props.onCardDelete(props.cardData)
  }

  return (
      <li className="cards__item">
        <div className="cards__photo-sizer">
          <img className="cards__photo link" src={props.cardData.link} alt={props.cardData.name}
               onClick={handleClick}/>
          {isOwn && <button type="button" className="cards__delete link link_type_normal"
                            onClick={handleDeleteClick}></button>}
        </div>
        <div className="cards__info">
          <p className="cards__title">{props.cardData.name}</p>
          <div className="cards__like-area">
            <button type="button" className={cardLikeButtonClassName} onClick={handleLike}></button>
            <p className="cards__like-number">{props.cardData.likes.length}</p>
          </div>
        </div>
      </li>
  )
}

export default Card
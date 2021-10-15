function Card(props) {
  function handleClick() {
    props.onCardClick(props.cardData);
  }

  return (
      <li className="cards__item">
        <div className="cards__photo-sizer">
          <img className="cards__photo link" src={props.cardData.link} alt={props.cardData.name}
               onClick={handleClick}
          />
          <button type="button" className="cards__delete link link_type_normal"></button>
        </div>
        <div className="cards__info">
          <p className="cards__title">{props.cardData.name}</p>
          <div className="cards__like-area">
            <button type="button" className="cards__like link link_type_like"></button>
            <p className="cards__like-number">{props.cardData.likes.length}</p>
          </div>
        </div>
      </li>
  )
}

export default Card
import {useContext} from "react";
import avatarPlaceholder from "../images/ava_placeholder.png";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {

  const currentUser = useContext(CurrentUserContext)

  return (
      <main>
        <section className="profile">
          <button type="button" className="profile__avatar link"
                  onClick={props.onEditAvatar}>
            <img className="profile__img" src={currentUser.avatar ? currentUser.avatar : avatarPlaceholder}
                 alt="аватарка"/>
          </button>
          <div className="profile__wrapper">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button type="button" className="profile__edit link link_type_normal"
                    onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__status">{currentUser.about}</p>
          <button type="button" className="profile__add link link_type_normal"
                  onClick={props.onAddPlace}></button>
        </section>

        <section className="content">
          <ul className="cards">
            {/*cards container*/}
            {props.cardsData.map((cardData) => (
                <Card cardData={cardData}
                      key={cardData._id}
                      onCardClick={props.onCardClick}
                      onCardLike={props.onCardLike}
                      onCardDelete={props.onCardDelete}
                />
            ))}
          </ul>
        </section>
      </main>
  )
}

export default Main
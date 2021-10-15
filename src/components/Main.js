import {useEffect, useState} from "react";
import avatarPlaceholder from "../images/ava_placeholder.png";
import {api} from "../utils/Api";
import Card from "./Card";

function Main(props) {

  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cardsData, setCardsData] = useState([])


  useEffect(() => {
    api.getUser()
        .then((userData) => {
          setUserName(userData.name)
          setUserDescription(userData.about)
          setUserAvatar(userData.avatar)
        })
        .catch(console.log)
  })

  useEffect(() => {
    api.getCards()
        .then((cardsData) => {
          setCardsData(cardsData)
        })
        .catch(console.log)
  })


  return (
      <main>
        <section className="profile">
          <button type="button" className="profile__avatar link"
                  onClick={props.onEditAvatar}>
            <img className="profile__img" src={userAvatar ? userAvatar : avatarPlaceholder} alt="аватарка"/>
          </button>

          <div className="profile__wrapper">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__edit link link_type_normal"
                    onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__status">{userDescription}</p>
          <button type="button" className="profile__add link link_type_normal"
                  onClick={props.onAddPlace}></button>
        </section>

        <section className="content">
          <ul className="cards">
            {/*cards container*/}
            {cardsData.map((cardData) => (
                <Card cardData={cardData} key={cardData._id} onCardClick={props.onCardClick}/>
            ))}
          </ul>
        </section>
      </main>
  )
}

export default Main
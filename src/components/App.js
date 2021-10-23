import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React, {useState, useEffect} from "react";
import ImagePopup from "./ImagePopup";
import {api} from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [currentUser, setCurrentUser] = useState({
    name: "loading...",
    about: "loading...",
    avatar: "",
    _id: "",
    cohort: ""
  })

  const [cardsData, setCardsData] = useState([])

  function handleCardLike(currentCard) {
    const isLiked = currentCard.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(currentCard._id, isLiked)
        .then((resCard) => {
          setCardsData((cardsData) => cardsData.map((card) => card._id === currentCard._id ? resCard : card));
        })
        .catch(console.log)
  }

  function handleCardDelete(currentCard) {
    api.deleteCard(currentCard._id)
        .then(() => {
          setCardsData((cardsData) => cardsData.filter(card => card._id !== currentCard._id))
        })
        .catch(console.log)
  }

  useEffect(() => {
    api.getCards()
        .then((cardsData) => {
          setCardsData(cardsData)
        })
        .catch(console.log)
  }, [])


  useEffect(() => {
    api.getUser()
        .then((userData) => {
          setCurrentUser(userData)
        })
        .catch(console.log)
  }, [])

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData)
  }

  const handleUpdateUser = (name, about, processing) => {
    processing(true);
    api.setUser(name, about)
        .then((userData) => {
          setCurrentUser(userData)
        })
        .finally(() => {
          processing(false);
          setIsEditProfilePopupOpen(false)
        })
        .catch(console.log)
  }
  /*https://i.ibb.co/XVHWHmy/ava.jpg*/
  const handleUpdateAvatar = (link, processing, reset) => {
    processing(true);
    api.setUserAvatar(link)
        .then((userData) => {
          setCurrentUser(userData)
        })
        .finally(() => {
          processing(false);
          setIsEditAvatarPopupOpen(false)
          reset()
        })
        .catch(console.log)
  }

  const handleAddPlaceSubmit = (name, link, processing, reset) => {
    processing(true);
    api.addCard(name, link)
        .then((cardData) => {
          setCardsData([cardData, ...cardsData]);
        })
        .finally(() => {
          processing(false);
          setIsAddPlacePopupOpen(false)
          reset()
        })
        .catch(console.log)
  }

  /*Вызывать все сеттеры чтобы закрыть один конкретный попап это какое-то дно
    сделал через передачу сеттера, ничего лучше не придумалось, если есть вариант получше буду благодарен*/
  /*  const closeAllPopups = () => {
      setIsEditAvatarPopupOpen(false)
      setIsEditProfilePopupOpen(false)
      setIsAddPlacePopupOpen(false)
      setSelectedCard({})
    }*/

  return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header/>
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}
                cardsData={cardsData} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
          <Footer/>
        </div>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={setIsEditProfilePopupOpen}
                          onUpdateUser={handleUpdateUser}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={setIsEditAvatarPopupOpen}
                         onUpdateAvatar={handleUpdateAvatar}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen}
                       onClose={setIsAddPlacePopupOpen}
                       onAddPlace={handleAddPlaceSubmit}/>
        <PopupWithForm title='Вы уверены?' name='confirmation' submitText='Да'/>
        <ImagePopup card={selectedCard} onClose={setSelectedCard}/>
      </CurrentUserContext.Provider>
  );
}

export default App;

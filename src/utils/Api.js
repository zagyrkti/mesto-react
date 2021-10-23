import {options} from "./constants.js";

class Api {
  constructor(options) {
    /*this._token = options.token;*/
    this._cardsUrl = options.cardsUrl;
    this._userUrl = options.userUrl;
    this._headers = options.headers;
    this._avatar = options.avatarUrl;
    this._likes = options.likesUrl;
  }

  getCards() {
    return fetch(this._cardsUrl, {
      headers: this._headers
    })
      .then(this._processResponse)
  }
     
  getUser() {
    return fetch(this._userUrl, {
      headers: this._headers
    })
      .then(this._processResponse)
  }

  addCard(name, link) {
    return fetch(this._cardsUrl, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link : link
      })
    })
      .then(this._processResponse)
  }

  setUserAvatar(link) {
    return fetch(this._avatar, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar : link
      })
    })
      .then(this._processResponse)
  }

  setUser(name, about) {
    return fetch(this._userUrl, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(this._processResponse)
  }


  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._likes}/${id}`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._headers,
    })
        .then(this._processResponse)
  }

  setLike(id) {
    return fetch(`${this._likes}/${id}`, {
      method: "PUT",
      headers: this._headers,
    })
      .then(this._processResponse)
  }

  removeLike(id) {
    return fetch(`${this._likes}/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._processResponse)
  }

  deleteCard(id) {
    return fetch(`${this._cardsUrl}/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._processResponse)
  }


  _processResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

}

export const api = new Api(options)
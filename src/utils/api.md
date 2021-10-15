```
headers: {
authorization: "29656b2d-ee52-401a-a717-4267ea0b7d96",
'Content-Type': 'application/json',
}
```

### Загрузка информации о пользователе с сервера

```
GET 
https://nomoreparties.co/v1/cohort-24/users/me
```

Response

```
{
  "name": "Jacques Cousteau",
  "about": "Sailor, researcher",
  "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
  "_id": "e20537ed11237f86bbb20ccb",
  "cohort": "cohort0"
} 
```

### Загрузка карточек с сервера

```
GET 
https://mesto.nomoreparties.co/v1/cohort-24/cards
```

Response

```
[
  {
    "likes": [],
    "_id": "5d1f0611d321eb4bdcd707dd",
    "name": "Байкал",
    "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    "owner": {
      "name": "Jacques Cousteau",
      "about": "Sailor, researcher",
      "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
      "_id": "ef5f7423f7f5e22bef4ad607",
      "cohort": "local"
    },
    "createdAt": "2019-07-05T08:10:57.741Z"
  }
]
```

### Редактирование профиля

```
PATCH 
https://mesto.nomoreparties.co/v1/cohort-24/users/me
```

body

```
{
  name: 'Marie Skłodowska Curie',
  about: 'Physicist and Chemist'
}
```

Response

```
{
  "name": "Marie Skłodowska Curie",
  "about": "Physicist and Chemist",
  "avatar": "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg",
  "_id": "e20537ed11237f86bbb20ccb",
  "cohort": "cohort0",
}
```

###Добавление новой карточки

```
POST
https://mesto.nomoreparties.co/v1/cohort-24/cards
```

body

```
{
  "name": "drops",
  "link": "https://images.unsplash.com/photo-1565660761890-0ecd9606690f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
}
```

Response

```
{
    "likes": [],
    "_id": "60ae84e85a5d3b0036d41568",
    "name": "drops",
    "link": "https://images.unsplash.com/photo-1565660761890-0ecd9606690f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "owner": {
        "name": "Пракхар",
        "about": "Естествоиспытатель",
        "avatar": "https://storage.yandexcloud.net/zrnpxr-pictures/ava.jpg",
        "_id": "2fa589e1524e078a64661a5b",
        "cohort": "cohort-24"
    },
    "createdAt": "2021-05-26T17:27:04.280Z"
}
```

### Удаление карточки
```
DELETE
https://mesto.nomoreparties.co/v1/cohort-24/cards/cardId
```
###Постановка лайка
```
PUT
https://mesto.nomoreparties.co/v1/cohort-24/cards/likes/cardId
```
###Убрать лайк
```
DELETE
https://mesto.nomoreparties.co/v1/cohort-24/cards/likes/cardId
```

###Обновление аватара
```
PATCH
https://mesto.nomoreparties.co/v1/cohort-24/users/me/avatar
```
body

```
{
  "avatar": "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg",
}
```
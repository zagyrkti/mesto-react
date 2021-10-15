export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open () {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._closeByEsc);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    this._popupElement.classList.add("popup_closed");
    document.removeEventListener("keydown", this._closeByEsc);
  }

  _closeByEsc = (evt) => {
    if (evt.key === "Escape") {
      this.close()
    }
  }

  setEventListeners() {
    /*close by close btn + close by click on overlay*/
    /*mousedown for UX\click slip*/
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close")) {
        this.close()
      }
    });

    /*fade out for popups used to avoid visibility hidden*/
    this._popupElement.addEventListener('animationend', (evt) => {
      if (evt.animationName === 'fade-out') {
        evt.target.classList.remove('popup_closed');
      }
    });
  }
}
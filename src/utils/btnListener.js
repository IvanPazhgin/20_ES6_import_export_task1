import {getRandomColor} from "./getRandomColor";

export default class BtnListener {
  #button

  constructor(button) {
    this.#button = button
    this.listener()
  }

  listener() {
    this.#button.addEventListener('click', event => {
      event.preventDefault()
      document.body.style.background = getRandomColor()
    })
  }
}
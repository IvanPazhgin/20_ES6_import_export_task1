import BtnListener from "../utils/btnListener";

export default class Button {
  #button
  #listener

  constructor() {
    this.#button = document.createElement('button')
    this.#listener = new BtnListener(this.#button)
  }

  render() {
    this.#button.className = 'button'
    this.#button.innerText = 'Изменить цвет страницы'
    return this.#button
  }
}
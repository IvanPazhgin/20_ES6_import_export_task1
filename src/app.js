import Button from "./UI/button";

export default class App {
  #button

  constructor() {
    this.#button = new Button()
  }

  initApp(){
    const buttonHTML = this.#button.render()
    document.body.append(buttonHTML)
  }

}
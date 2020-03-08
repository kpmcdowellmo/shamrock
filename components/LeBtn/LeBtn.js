import { define, html, render } from "heresy";

class LeBtn extends HTMLButtonElement {
  static get tagName(){
    return "button";
  }
  static get name(){
    return "le-btn"
  }
  static style(LeBtn) {
    return `${LeBtn}
                background-color: #000;
                color: #fff;
            `;
  }

  // observed attributes for use with onattributechanged (like HyperHTMLElement)
  // get observedAttributes(){
  //   return ["text"];
  // }

  get mappedAttributes() {
    return ["text"];
  }

  // onattributechanged(event = {attributeName, oldValue, newValue}){
  //   console.log("please god something happen???")
  // }
  ontext(event){
    console.log("text")
  }

  render() {
    this.html`${this.props.text}`;
  }
}

const luckyButton = define("LeBtn<button>", LeBtn);

export { luckyButton };

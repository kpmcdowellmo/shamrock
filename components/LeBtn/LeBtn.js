import { define } from "heresy";

class LeBtn extends HTMLElement {
  static style(LeBtn) {
    return `${LeBtn}
                background-color: #000;
                color: #fff;
            `;
  }

  oninit(e) {
    console.log("init");
    this.text = this.getAttribute("text") || "submit";
  }

  render() {
    this.html`<button>${this.text}</button>`;
  }

  onclick(e){
  }
}

const luckyButton = define("LeBtn", LeBtn);

export { luckyButton, LeBtn };

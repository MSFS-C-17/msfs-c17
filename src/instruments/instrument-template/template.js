"use strict";

/* global Airliners */

// eslint-disable-next-line camelcase
class C17_INSTRUMENT_NAME_Logic extends Airliners.EICASTemplateElement {
  constructor() {
    super();
    // eslint-disable-next-line no-underscore-dangle
    let lastTime = this._lastTime;
    this.getDeltaTime = () => {
      const nowTime = Date.now();
      const deltaTime = nowTime - lastTime;
      lastTime = nowTime;

      return deltaTime;
    };
  }

  get templateID() {
    return "C17_INSTRUMENT_NAME_TEMPLATE";
  }

  connectedCallback() {
    super.connectedCallback();

    // This is big hack, see `template.html`.
    {
      const code = document.getElementById(
        "C17_INSTRUMENT_NAME_BUNDLED_STYLE"
      ).innerHTML;
      const style = document.createElement("style");
      style.innerHTML = code;
      document.head.appendChild(style);
    }
    {
      const code = document.getElementById(
        "C17_INSTRUMENT_NAME_BUNDLED_LOGIC"
      ).innerHTML;
      const script = document.createElement("script");
      script.innerHTML = code;
      document.body.appendChild(script);
    }
  }

  onEvent(_event) {}

  update(_deltaTime) {
    this.dispatchEvent(
      new CustomEvent("update", { detail: this.getDeltaTime() })
    );
  }
}

customElements.define(
  "a32nx-INSTRUMENT_NAME_LOWER_SKEWER-element",
  C17_INSTRUMENT_NAME_Logic
);

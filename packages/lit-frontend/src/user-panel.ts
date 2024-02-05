import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import {ToggleSwitchElement } from "./toggle-switch.ts"

@customElement("user-panel")
class UserPanelElement extends LitElement {
  render() {
    return html`
      <img src="/assets/testSmile.png">
    <toggle-switch @change=${this._toggleDarkMode}>
            Dark Mode
          </toggle-switch>`;
  }

  static styles = css`
    h1 {
      font: var(--size-type-xlarge) var(--font-family-display);
    }

    .fancy {
      font-family: var(--font-family-body);
      font-style: italic;
      color: var(--color-accent);
    }

    ::slotted(*) {
      display: inline;
    }
  `;

  _toggleDarkMode(ev: InputEvent) {
    const target = ev.target as ToggleSwitchElement;
    const body = document.body;

    console.log("Toggling Dark mode", ev);

    if (target?.on) body.classList.add("dark-mode");
    else body.classList.remove("dark-mode");
  }
}
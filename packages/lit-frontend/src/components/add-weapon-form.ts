import { css, html, LitElement, unsafeCSS} from "lit";
import { customElement } from "lit/decorators.js";
// import { Weapon } from "ts-models";
// import {serverPath} from "../src/rest.ts";

import pageCSS from "/src/styles/page.css?inline";

// @customElement("add-weapon-form")
// export class AddWeaponFormElement extends LitElement {
//   @property()
//   path: string = "";

//   // "Profile" type defined in express-backend/src/models/profile.ts
//   @state()
//   weapon?: Weapon;

//   render() {
//     // fill this in later
//     const {name, type} = this.weapon || {}; 
//     return html`
//       <p>name: ${name}<br>ID: ${type} </p>
//     `;
//   }

//   static styles = [
//   unsafeCSS(pageCSS),
//   css`
//   * {
//     margin: 0;
//     box-sizing: border-box;
//   }`];

// }

@customElement("add-weapon-form")
export class AddWeaponFormElement extends LitElement {
  render() {
    return html`<form @submit=${this._handleSubmit}>
        <label>Enter Name:
          <input type="text" name="name"></label><br>
        <button type="submit">Submit</button>
    </form> `;
  } //id is for <label>, name is for <form>

  static styles =  [
      unsafeCSS(pageCSS),
      css`
      * {
        margin: 0;
        box-sizing: border-box;
      }`];

  _handleSubmit(ev: Event) { 
    ev.preventDefault(); // prevent browser from submitting form data itself
  
   }

}
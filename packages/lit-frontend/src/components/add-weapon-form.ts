import { css, html, unsafeCSS} from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";
import { Weapon } from "ts-models";
// import {serverPath} from "../src/rest.ts";

import pageCSS from "/src/styles/page.css?inline";

@customElement("add-weapon-form")
export class AddWeaponFormElement extends App.View {
  // @property({attribute: false})
  // using?: Weapon;

  // get weapon() {
  //   return this.using || ({} as Weapon);
  // }

  render() {
    // const weapon = (this.weapon || {}) as Weapon)

    return html`<form @submit=${this._handleSubmit}>
    <label>Enter Name:
      <input type="text" name="name"></label><br>
    <label>Enter Type:
      <input type="text" name="type"></label><br>
    <label>Enter Tags:
      <input type="text" name="tags"></label><br>
    <label>Enter Range:
      <input type="text" name="range"></label><br>
    <label>Enter Damage:
      <input type="text" name="damage"></label><br>
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
    const target = ev.target as HTMLFormElement;
    const formdata = new FormData(target);
    //key, value. if value is nothing, map just the key as an entry, which is undefined without a value.
    const entries = Array.from(formdata.entries())
      .map(([k, v]) => (v === "" ? [k] : [k, v]))
    const json = Object.fromEntries(entries);

    console.log("Submitting Form", json);
    this.dispatchMessage({
      type: "WeaponsCreated",
      weapon: json as Weapon
    });
    
  
   }

}
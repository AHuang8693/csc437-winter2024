import { css, html, LitElement, unsafeCSS} from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "ts-models";
// import {serverPath} from "../src/rest.ts";

import pageCSS from "../styles/page.css?inline";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
  @property()
  path: string = "";

  // "Profile" type defined in express-backend/src/models/profile.ts
  @state()
  profile?: Profile;

  //serverPath(path) -> localhost:3000/api/profiles/<userID>
  _fetchData(path: string) {
    fetch(serverPath(path))
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
          if (json) this.profile = json as Profile;
      });
  }

  connectedCallback() {
    if (this.path) {
      this._fetchData(this.path);
    }
    super.connectedCallback();
  }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
    ) {
    if (name === "path" && oldValue !== newValue && oldValue) {
        this._fetchData(newValue);
    }
    super.attributeChangedCallback(name, oldValue, newValue);
    }

  render() {
    // fill this in later
    const {userid, name} = this.profile || {}; 
    return html`
      <p>Username: ${name}<br>ID: ${userid} </p>
    `;
  }

  static styles = [
  unsafeCSS(pageCSS),
  css`
  * {
    margin: 0;
    box-sizing: border-box;
  }`];

}

// in src/user-profile.ts, after the previous component
@customElement("user-profile-edit")
export class UserProfileEditElement extends UserProfileElement {
  render() {
    return html`<form @submit=${this._handleSubmit}>
        <label>Enter New Username:
          <input type="text" name="name"></label><br>
        <button type="submit">Submit</button>
    </form> `;
  } //id is for <label>, name is for <form>

  static styles = [...UserProfileElement.styles, css`...`];

  _handleSubmit(ev: Event) { 
    ev.preventDefault(); // prevent browser from submitting form data itself

    const target = ev.target as HTMLFormElement;
    const formdata = new FormData(target);
    //key, value. if value is nothing, map just the key as an entry, which is undefined without a value.
    const entries = Array.from(formdata.entries())
      .map(([k, v]) => (v === "" ? [k] : [k, v]))
    const json = Object.fromEntries(entries);

    this._putData(json);
   }

  _putData(json: Profile) { 
    fetch(serverPath(this.path), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json)
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        else return null;
      })
      .then((json: unknown) => {
        if (json) this.profile = json as Profile;
      })
      .catch((err) =>
        console.log("Failed to PUT form data", err)
      );
   }
}
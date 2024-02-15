import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "../models/profile"; //temporary copied models folder from backend to frontend
import {serverPath} from "./rest.ts";

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
      <p>ID:${userid} Name:${name} </p>
    `;
  }

  static styles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }`;
}

// in src/user-profile.ts, after the previous component
@customElement("user-profile-edit")
export class UserProfileEditElement extends UserProfileElement {
  render() {
    return html`<form @submit=${this._handleSubmit}>
        <!-- fill in form here -->
        <button type="submit">Submit</button>
    </form> `;
  }

  static styles = [...UserProfileElement.styles, css`...`];

  _handleSubmit(ev: Event) { 
    ev.preventDefault(); // prevent browser from submitting form data itself

    const target = ev.target as HTMLFormElement;
    const formdata = new FormData(target);
    const entries = Array.from(formdata.entries())
      .map(([k, v]) => (v === "" ? [k] : [k, v]))
      .map(([k, v]) =>
        k === "airports"
          ? [k, (v as string).split(",").map((s) => s.trim())]
          : [k, v]
      );
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
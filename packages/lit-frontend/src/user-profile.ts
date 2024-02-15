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

  static styles = css`...`;
}
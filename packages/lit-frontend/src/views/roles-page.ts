import { css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import {Role} from "ts-models";

import * as App from "../app";
import pageCSS from "/src/styles/page.css?inline";

@customElement("roles-page") 
export class RolesPageElement extends App.View {

  @property()
  get roles() {return this.getFromModel<Role[]>("roles");}

    render() {
        return html`
        <main> 
        <h1>Roles</h1>

    <em>General classifications for extraordinary machines.</em>

    <h3>Artillery</h3>
    <p>Artillery mechs usually stay back
        from the front line, dealing damage or
        providing support. They tend to sport long-range
        weapons and systems.</p>

    <h3>Stiker</h3>
    <p>Strikers are resilient mechs that thrive
        when targets are kept close.</p>

    <h3>Controller</h3>
    <p>Controller mechs are equipped to
        inflict statuses, force or prevent movement, or
        overheat their targets.</p>

    <h3>Support</h3>
    <p>Support mechs specialize in
        increasing the combat capabilities of their allies
        – moving them around, clearing conditions,
        healing, or protecting them from incoming fire.</p>

    <h3>Defender</h3>
    <p>Defenders are exceptionally durable
        and resilient mechs, designed to control space
        or shield allies from harm.</p>
        </main>`;
      }

      static styles = [
        unsafeCSS(pageCSS),
        css`
        * {
          margin: 0;
          box-sizing: border-box;
        }`];

      
}
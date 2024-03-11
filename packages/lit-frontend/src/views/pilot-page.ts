import { css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import {Pilot} from "ts-models"; // why is this unused, but Weapon isn't? -----

import * as App from "../app";
import pageCSS from "/src/styles/page.css?inline";

@customElement("pilot-page") 
export class pilotPageElement extends App.View {

  @property()
  get pilot() {return this.getFromModel<Pilot>("pilot");}

    render() {
        return html`
        <main> 
        <h1>Pilot</h1>

        <em>Hero of the story, of at least your own.</em>

        <p>Pilots are the player character. They have Triggers which are used in relavent narrative moments.<br>
        For example, if a player has a +2 Trigger "Fist to Faces", they will gain +2 on rolls related to something like a bar fight.<br>
        Trigger names are intentionally vague, as the player can argue to the GM if it applies to a situation or not.<br>
        They also have Hull, Agility, Systems, and Engineering stats. These can influence the stats of the Mechs they pilot.<br>

        Pilots of course have names and background, which summerize their upbringing. These are made at the discretion of the player.
        </p>

          ${(this.pilot || "")}
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
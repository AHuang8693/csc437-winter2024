import { css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import {Weapon} from "ts-models";

import * as App from "../app";
import pageCSS from "/src/styles/page.css?inline";

@customElement("weapons-page") 
export class weaponsPageElement extends App.View {

  @property()
  get weapons() {return this.getFromModel<Weapon[]>("weapons");}

    render() {
        return html`
        <main> 
          <h1>Weapons</h1>

          <em>Tools of destruction, oppression, and liberation—all in your hands.</em>

          <p>Each weapon has its own Size/Type, Tags, Range/Threat, and Damage<br><br>
          Size ranges from Auxiliary, Main, Heavy, and Super Heavy, taking the respective Mount slots on a Mech.<br>
          Types include Rifle, Cannon, CQB, Melee, Nexus, and Launcher.<br>
          Tags are numerous and relect properties of the weapon. Some of them are Accurate, Overkill, AP, Reliable, and Ordnance.<br>
          Range represents how many spaces a weapon can reach. They may also have AoE patterns like Cone, Burst, Line, and Blast<br>
          Threat is the range weapons can be used in Overwatch. Default is 1, but can vary between weapons, especially Melee and CQB.<br>
          Damage is represented by dice and flat numbers, categorized into three types: Kinetic, Energy, and Explosive.<br>
          </p>

          //attributtes are based off ts-models -----
          ${(this.weapons || []).map(w => html`
          <section class="weapon">
          <h3>${w.name}</h3>
              <div class="type">Main Rifle</div> <div class="tags">Reliable 2</div>
              <div class="range">Range 20</div> <div class="dmg">2d6 Kinetic</div>
          </section>
          `)}

          <section class="wContainer">
              <section class="weapon">
                  <h3>Assault Rifle</h3>
                      <div class="type">Main Rifle</div> <div class="tags">Reliable 2</div>
                      <div class="range">Range 20</div> <div class="dmg">2d6 Kinetic</div>
              </section>
              <section class="weapon">
                  <h3>Segment Knife</h3>
                      <div class="type">Auxiliary Melee</div> <div class="tags">Overkill</div>
                      <div class="range">Threat 1</div> <div class="dmg">1d3+1 Energy</div>
              </section>
          </section>
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
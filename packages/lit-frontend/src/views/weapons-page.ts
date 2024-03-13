import { PropertyValueMap, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import {Weapon} from "ts-models";

import * as App from "../app";
import pageCSS from "/src/styles/page.css?inline";

@customElement("weapons-page") 
export class weaponsPageElement extends App.View {

  @property()
  get weapons() {return this.getFromModel<Weapon[]>("weapons");}

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
      this.dispatchMessage({
        type: "WeaponsRequested"});
  }

  render() {
      //note: this errors if the mongo "weapons" collection only has one item in it, since
      //      it will no longer return an array, so the .map() below doesn't work
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
        <section class="wContainer">
        ${(this.weapons || []).map(w => html`
        <section class="weapon">
        <h3>${w.name}</h3>
            <div class="type">${w.type}</div> <div class="tags">${w.tags}</div>
            <div class="range">${w.range}</div> <div class="dmg">${w.damage}</div>
        </section>
        `)}
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
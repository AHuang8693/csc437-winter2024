import { css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import {System} from "ts-models";

import * as App from "../app";
import pageCSS from "/src/styles/page.css?inline";

@customElement("systems-page") 
export class SystemsPageElement extends App.View {

  @property()
  get systems() {return this.getFromModel<System[]>("systems");}

    render() {
        return html`
        <main> 
        <h1>Systems</h1>

        <em>Shields, grenades, and leather seating.</em>
        <p> Systems can be a variety of things, and most (but not all) are used in tactical combat.<br>
        Each System costs System Points, which are determined by the Mech Frame and the Pilot's Systems stat<br>
        Systems can have various Tags, such as Limited, Unique, Deployable, and Quick Action.</p>
    
        <section class="trait">
            <h3>Custom Paint Job</h3>
            <em>1 SP, Unique</em>
                <main>
                    When you take structure damage, roll 1d6. On a 6,
                    you return to <strong>1 HP</strong> and ignore the damage – the hit
                    simply ‘scratched your paint’.<br><br>
                    This system can only be used once before each
                    <Strong>Full Repair</Strong>, and is not a valid target for system
                    destruction.
                </main>
        </section>
            <!-- Should probably get boxes in the future -->
        <section class="system">
            <h3>Pattern-B Hex Charges</h3>
                <em>2 SP, Limited 3, Unique, Grenade, Mine, Quick Action</em>
                <main>
                    <strong>Frag Grenade</strong>
                    Range 5 | Blast 1 | 1D6 Explosive<br>
                    Throw a Frag Grenade within Range 5. All characters within a Blast 1 area must
                    pass an Agility save or take 1d6 Explosive damage. On a success, they take half damage. 
                    <br><br>
                    <strong>Explosive Mine</strong>
                    All characters within a Burst 1 area must pass an Agility save or take 2d6 Explosive
                    damage. On a success, they take half damage.
                </main>
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
import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

import pageCSS from "/src/styles/page.css?inline";

//components
import "./drop-down";
import "./toggle-switch";
import "./user-panel";


@customElement("page-header") 
export class pageHeaderElement extends LitElement {
    @property({attribute: false})
    on: boolean = false;

    render() {
        return html`
        <div class="container">
            <div><a href="../app/index">Home</a></div>
            <div><a href="/app/pilot">Pilot</a></div>
            <div><a href="/app/factions">Factions</a></div>
            <div><a href="/app/weapons">Weapons</a></div>
            <div><a href="/app/systems">Systems</a></div>
            <div><a href='/app/roles'>Roles</a></div>
            <div>
                <drop-down>
                    Profile
                    <user-panel
                    slot="menu"
                    avatar="/assets/testSmile.png">
                        <span slot="name">Andy Huang</span>
                    </user-panel>
                </drop-down>
            </div>
        </div>`;
    }
    static styles = [
        unsafeCSS(pageCSS),
        css`
        * {
          margin: 0;
          box-sizing: border-box;
        }`];
}
import { css, html, LitElement, unsafeCSS} from "lit";
import { customElement, property } from "lit/decorators.js";

// MVU app
import * as App from "../app";
import routes from "../routes";
import update from "../update";
// components
import "../components/page-header";
import "../components/user-panel";


@customElement("home-page")
export class HomePageElement extends App.Main {
 constructor() { super(update); }
 render() {
 return html`
    <auth-required>
    <blazing-header></blazing-header>
    <vaadin-router .routes=${routes}> </vaadin-router>
    </auth-required>
 `;
 }
}

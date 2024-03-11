import { html} from "lit";
import { customElement } from "lit/decorators.js";

// MVU app
import * as App from "../app";
import routes from "../routes";
import update from "../update";
// components
import "../components/page-header";
import "../components/user-panel";
import "../components/vaadin-router";

@customElement("wiki-app")
export class WikiAppElement extends App.Main {
 constructor() { super(update); }
 render() {
 return html`
    <auth-required>
    <page-header></page-header>
    <vaadin-router .routes=${routes}> </vaadin-router>
    </auth-required>
 `;
 }
}

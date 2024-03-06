import { html} from "lit";
import { customElement } from "lit/decorators.js";


// MVU app
import * as App from "../app";
import update from "../update";
// components
import "../components/page-header";
import "../components/user-panel";


@customElement("home-page")
export class HomePageElement extends App.Main {
 constructor() { super(update); }
 render() {
 return html`
<body>
    <h1>Lancer</h1>

    <em>Mechanized Calvary stride across the battlefield, built in the image of man.</em>
    
    <p>Lancer is a tabletop role playing game centered on shared narratives, customizable mechs, 
        and the pilots who crew them.</p>
    <!-- In the future, this should be a button on the top that activates a drop down -->
    <p><br>Mech List</p>
    <ul>
        <li><a href="mechs/everest.html">Everest</a></li>
    </ul>
</body>
`;
 }
}
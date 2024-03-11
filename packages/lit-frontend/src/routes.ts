import "./views/wiki-app";
import "./views/home-page";
import "./views/user-profile";
import "./views/weapons-page";
import "./views/systems-page";
import "./views/pilot-page";
import "./views/factions-page";
import "./views/roles-page";

export default [
  {
    path: "/app/profile/:userid",
    component: "user-profile"
  },
//   {
//     path: "/app/:tour([0-9a-f]+)/destination/:dest([0-9]+)",
//     component: "destination-page"
//   },
  { path: "/app/weapons", component: "weapons-page" },
  { path: "/app/systems", component: "systems-page" },
  { path: "/app/pilot", component: "pilot-page" },
  { path: "/app/factions", component: "factions-page" },
  { path: "/app/roles", component: "roles-page" },
  { path: "/app", component: "home-page" },
  { path: "(.*)", redirect: "/app" }
];
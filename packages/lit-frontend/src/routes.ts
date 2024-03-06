import "./views/wiki-app";
import "./views/user-profile";
import "./views/weapons-page";

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
  { path: "/app", component: "home-page" },
  { path: "(.*)", redirect: "/app" }
];
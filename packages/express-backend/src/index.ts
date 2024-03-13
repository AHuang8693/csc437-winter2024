import express, { Request, Response } from "express";
import cors from "cors";
import * as path from "path";
import fs from "node:fs/promises";
import { connect } from "./mongoConnect";
import profiles from "./profiles";
import weapons from "./weapons";
import { Profile } from "../../ts-models/src/profile";
import { Weapon } from "../../ts-models/src/weapon";

const frontend = require.resolve("lit-frontend");
const dist = path.dirname(frontend);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
connect("Tom"); //cluster name

// static assets: /styles, /images, /icons, etc.
app.use(express.static(dist));
// SPA routes: /app/...
app.use("/app", (req, res) => {
 const indexHtml = path.resolve(dist, "index.html");
 fs.readFile(indexHtml, { encoding: "utf8" })
 .then((html) => res.send(html));
});


app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

app.get("/api/profiles/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  profiles
    .get(userid)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

app.post("/api/profiles", (req: Request, res: Response) => {
  const newProfile = req.body;

  profiles
    .create(newProfile)
    .then((profile: Profile) => res.status(201).send(profile))
    .catch((err) => res.status(500).send(err));
});

app.put("/api/profiles/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
  const newProfile = req.body;

  profiles
    .update(userid, newProfile)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

app.get("/api/weapons", (req: Request, res: Response) => {
  const { name } = req.params;

  //index() function here runs find() in weapons.ts
  weapons
      .index()
      .then((weapon: Weapon[]) => res.json(weapon))
      .catch((err) => res.status(404).end());

});


// weapons
//     .get("test")
//     .then((weapon: Weapon) => res.json(weapon))
//     .catch((err) => res.status(404).end());
// weapons
//     .index()
//     .then((weapon: Weapon[]) => res.json(weapon))
//     .catch((err) => res.status(404).end());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

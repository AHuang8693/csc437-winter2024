import { Document } from "mongoose";
import { Weapon } from "ts-models/src/weapon";
import WeaponModel from "./models/mongo/weapon";

function index(): Promise<Weapon[]> {
  return WeaponModel.find(); //find() means return all
}

function get(name: String): Promise<Weapon> {
  return WeaponModel.find({ name })
    .then((list) => list[0])
    .catch((err) => {
      throw `${name} Not Found`;
    });
}

function create(weapon: Weapon): Promise<Weapon> {
  const w = new WeaponModel(weapon);
  return w.save();
}

function update(name: String, type: String, tags: String, range: String, damage: String, weapon: Weapon): Promise<Weapon> {
  return new Promise((resolve, reject) => {
    WeaponModel.findOneAndUpdate({ name, type, tags, range, damage }, weapon, {
      new: true,
    }).then((weapon) => {
      if (weapon) resolve(weapon);
      else reject("Failed to update weapon");
    });
  });
}

export default { index, get, create, update };
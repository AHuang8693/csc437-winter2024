import { Schema, Model, Document, model } from "mongoose";
import { Weapon } from "../../../../ts-models/src/weapon";

const weaponSchema = new Schema<Weapon>(
  {
    name: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    tags: { type: String, required: true, trim: true },
    range: { type: String, required: true, trim: true },
    damage: { type: String, required: true, trim: true },
  },
  { collection: "weapons" }
);

const WeaponModel = model<Weapon>("Weapon", weaponSchema);

export default WeaponModel;
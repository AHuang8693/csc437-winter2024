"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var weapon_exports = {};
__export(weapon_exports, {
  default: () => weapon_default
});
module.exports = __toCommonJS(weapon_exports);
var import_mongoose = require("mongoose");
const weaponSchema = new import_mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    tags: { type: String, required: true, trim: true },
    range: { type: String, required: true, trim: true },
    damage: { type: String, required: true, trim: true }
  },
  { collection: "weapons" }
);
const WeaponModel = (0, import_mongoose.model)("Weapon", weaponSchema);
var weapon_default = WeaponModel;

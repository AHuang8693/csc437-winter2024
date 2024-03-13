"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var weapon_exports = {};
__export(weapon_exports, {
  default: () => weapon_default
});
module.exports = __toCommonJS(weapon_exports);
var import_weapon2 = __toESM(require("./models/mongo/weapon"));
function index() {
  return import_weapon2.default.find();
}
function get(name) {
  return import_weapon2.default.find({ name }).then((list) => list[0]).catch((err) => {
    throw `${name} Not Found`;
  });
}
function create(weapon) {
  const w = new import_weapon2.default(weapon);
  return w.save();
}
function update(name, damage, weapon) {
  return new Promise((resolve, reject) => {
    import_weapon2.default.findOneAndUpdate({ name, damage }, weapon, {
      new: true
    }).then((weapon2) => {
      if (weapon2)
        resolve(weapon2);
      else
        reject("Failed to update weapon");
    });
  });
}
var weapon_default = { index, get, create, update };

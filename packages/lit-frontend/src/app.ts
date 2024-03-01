import { Weapon, Profile } from "ts-models";
import {APIUser} from "./rest";
import { consume, createContext, provide } from "@lit/context";

export interface Model {
 weapons: Weapon[];
 user: APIUser;
 profile?: Profile;
}
export const context = createContext<Model>("BlazingModel");
export const init: Model = {
 user: new APIUser(),
 weapons: []
}
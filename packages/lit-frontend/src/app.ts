import { Weapon, System, Pilot, Faction, Role, Profile } from "ts-models";
import {APIUser} from "./rest";
import * as MVU from "./mvu";
import { MsgType } from "./mvu";
import { consume, createContext, provide } from "@lit/context";
import { property, state } from "lit/decorators.js";

export interface Model {
 weapons: Weapon[]; //array of weapon info
 systems: System[];
 pilot?: Pilot; 
 factions: Faction[];
 roles: Role[];
 user: APIUser;
 profile?: Profile;
}
export const context = createContext<Model>("WikiModel");
export const init: Model = {
 user: new APIUser(),
 weapons: [],
 systems: [],
 factions: [],
 roles: []
}

//Messages
export interface ProfileSelected
  extends MsgType<"ProfileSelected"> {
  userid: string;
}

export interface ProfileSaved extends MsgType<"ProfileSaved"> {
  userid: string;
  profile: Profile;
}

//used to initiate fetch for the weapons page
export interface WeaponsRequested extends MsgType<"WeaponsRequested"> {
}

export interface SystemsRequested extends MsgType<"SystemsRequested"> {
}

export interface PilotRequested extends MsgType<"PilotRequested"> {
}

export interface FactionsRequested extends MsgType<"FactionsRequested"> {
}

export interface RolesRequested extends MsgType<"RolesRequested"> {
}

export type Message =
    | ProfileSelected
    | ProfileSaved
    | WeaponsRequested
    | SystemsRequested
    | PilotRequested
    | FactionsRequested
    | RolesRequested

//Main
export class Main
  extends MVU.Main<Model, Message>
  implements MVU.App<Model, Message>
{
  @provide({ context })
  @state()
  model = init;

  constructor(update: MVU.Update<Model, Message>) {
    super(
      update,
      () => this.model,
      (next: Model) => (this.model = next)
    );
  }
}

export class View extends MVU.View<Message> {
  @consume({ context: context, subscribe: true })
  @property({ attribute: false })
  _model: Model | undefined;

  getFromModel<T>(key: keyof Model) {
    if (this._model) {
      return this._model[key] as T;
    }
  }
}


export const createDispatch = () =>
  new MVU.Dispatch<Model, Message>();

export const updateProps = MVU.updateProps<Model>;
export const noUpdate = MVU.noUpdate<Model>;
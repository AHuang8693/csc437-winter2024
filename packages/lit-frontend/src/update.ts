import { APIRequest, JSONRequest } from "./rest";
import * as App from "./app";
import { Profile, Weapon, System, Faction, Role, Pilot } from "ts-models";

const dispatch = App.createDispatch();
export default dispatch.update;


dispatch.addMessage("ProfileSelected", (msg: App.Message) => {
    const { userid } = msg as App.ProfileSelected;
  
    return new APIRequest()
      .get(`/profiles/${userid}`)
      .then((response: Response) => {
        if (response.status === 200) {
          return response.json();
        }
        return undefined;
      })
      .then((json: unknown) => {
        if (json) {
          console.log("Profile:", json);
          return json as Profile;
        }
      })
      .then((profile: Profile | undefined) =>
        profile ? App.updateProps({ profile }) : App.noUpdate
      );
  });

dispatch.addMessage("ProfileSaved", (msg: App.Message) => {
  const { userid, profile } = msg as App.ProfileSaved;

  return new JSONRequest(profile)
    .put(`/profiles/${userid}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile:", json);
        json as Profile;
      }
      return undefined;
    })
    .then((profile: Profile | undefined) =>
      profile ? App.updateProps({ profile }) : App.noUpdate
    );
});

dispatch.addMessage("WeaponsRequested", (_msg: App.Message) => {
  return new APIRequest()
    .get(`/weapons/`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Weapons:", json);
        return json as Weapon[];
      }
    })
    .then((weapons: Weapon[] | undefined) =>
      weapons ? App.updateProps({ weapons }) : App.noUpdate
    );
});

dispatch.addMessage("WeaponsCreated", (_msg: App.Message) => {
  const { weapon } = _msg as App.WeaponsCreated;
  
  return new JSONRequest(weapon)
    .post(`/weapons/`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Weapon:", json);
        return json as Weapon;
      }
    })
    .then((newWeapon: Weapon | undefined) =>
    newWeapon ? (model:App.Model) => {
        const weapons = model.weapons;
        weapons.push(newWeapon);
        return Object.assign({}, model, {weapons});
      }       : App.noUpdate
    );
});
/*updateProps wasn't working here since in the model (app.ts), weapons is an array of Weapon,
but I was trying to update the weapons Prop as the single newWeapon (probably would have deleted the other entries).
Instead, we get the existing array, add newWeapon to it, and Object.assign() replaces the weapons array with the modifed one.*/

dispatch.addMessage("SystemsRequested", (_msg: App.Message) => {

  return new APIRequest()
    .get(`/systems/`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Systems:", json);
        return json as System[];
      }
    })
    .then((systems: System[] | undefined) =>
      systems ? App.updateProps({ systems }) : App.noUpdate
    );
});

dispatch.addMessage("PilotRequested", (_msg: App.Message) => {

  return new APIRequest()
    .get(`/pilot/`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Pilot:", json);
        return json as Pilot;
      }
    })
    .then((pilot: Pilot | undefined) =>
      pilot ? App.updateProps({ pilot }) : App.noUpdate
    );
});

dispatch.addMessage("FactionsRequested", (_msg: App.Message) => {

  return new APIRequest()
    .get(`/factions/`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Factions:", json);
        return json as Faction[];
      }
    })
    .then((factions: Faction[] | undefined) =>
      factions ? App.updateProps({ factions }) : App.noUpdate
    );
});

dispatch.addMessage("RolesRequested", (_msg: App.Message) => {

  return new APIRequest()
    .get(`/roles/`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Roles:", json);
        return json as Role[];
      }
    })
    .then((roles: Role[] | undefined) =>
      roles ? App.updateProps({ roles }) : App.noUpdate
    );
});
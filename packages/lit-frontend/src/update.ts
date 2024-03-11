import { APIRequest, JSONRequest } from "./rest";
import * as App from "./app";
import { Profile, Weapon, Faction, Pilot } from "ts-models";

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
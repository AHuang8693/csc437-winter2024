import { APIRequest, JSONRequest } from "./rest";
import * as App from "./app";
import { convertStartEndDates } from "./utils/dates";
import { Profile } from "ts-models";

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
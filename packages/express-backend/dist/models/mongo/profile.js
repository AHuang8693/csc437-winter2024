import { Schema, model } from "mongoose";
const profileSchema = new Schema({
    userid: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    }
}, {
    collection: "user_profiles"
});
const ProfileModel = model("Profile", profileSchema);
export default ProfileModel;

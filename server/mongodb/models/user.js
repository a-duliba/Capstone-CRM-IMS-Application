import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String, required: true },
    allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }], //a User will have these 4 plus an objectId associated with Property object
});


const userModel = mongoose.model("User", UserSchema); //makes model called User based on UserSchema


export default userModel;
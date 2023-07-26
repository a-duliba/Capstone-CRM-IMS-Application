import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String, required: false },
    allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }], //a User will have these 4 plus an objectId associated with Property object
    username: { type: String, required: false },
    password: { type: String, required: false },
});


const userModel = mongoose.model("User", UserSchema); //makes model called User based on UserSchema


export default userModel;
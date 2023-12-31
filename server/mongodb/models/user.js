import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    email: { type: String, required: true },
    avatar: { type: String, required: true },
});

const userModel = mongoose.model("User", UserSchema); //makes model called User based on UserSchema

export default userModel;
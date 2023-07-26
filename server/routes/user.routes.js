import express from "express";


// IMPORT ALL THE CONTROLLERS


import {
    createUser,
    getAllUsers,
    getUserInfoByID,
    register,
    login,
} from "../controllers/user.controller.js";


const router = express.Router();


router.route("/").get(getAllUsers);
router.route("/").post(createUser); //CRUD = post, patch, delete. This is called in index.js, This is a user route to create a user, ctrl click createUser
router.route("/:id").get(getUserInfoByID); //:id because once you get specific id, then get that users info
router.route("/register").post(register);
router.route("/login").post(login);
 
export default router;
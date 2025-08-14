import express from "express";
import {signIn, signUp, signOut} from '../controllers/auth.controller.js';
const userAuthRouter = express.Router();
console.log("setp 333");

userAuthRouter.post('/signup', signUp)
userAuthRouter.post('/signin', signIn)
userAuthRouter.get('/signout', signOut)

export default userAuthRouter;
import express from "express";
// import {signIn, signUp, signOut} from '../controllers/auth.controller.js';
import signUp from '../controllers/auth.controller.js';
const userAuthRouter = express.Router();

console.log("getting2222");
userAuthRouter.post('/signup', signUp)
// userAuthRouter.post('/signin', signIn)
// userAuthRouter.get('/signout', signOut)

export default userAuthRouter;
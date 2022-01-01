import { Router } from "express";

// main logic for returning user the main page
import { home } from  "../controllers/home.controller"
import {signup} from "../controllers/signup.controller";

// main route for live stream
const site: Router = Router()

// main live stream page with middle ware to check if user logging in has a signed JWT
site.get("/",home)
site.get("/signup",signup)

export default site
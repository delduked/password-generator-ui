"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// main logic for returning user the main page
const home_controller_1 = require("../controllers/home.controller");
const signup_controller_1 = require("../controllers/signup.controller");
// main route for live stream
const site = (0, express_1.Router)();
// main live stream page with middle ware to check if user logging in has a signed JWT
site.get("/", home_controller_1.home);
site.get("/signup", signup_controller_1.signup);
exports.default = site;
//# sourceMappingURL=site.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assets = void 0;
// Package for checking verifying and signing JWT for user login
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const assets = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // check if cookie exists
        if (req.cookies.authToken) {
            const authToken = yield req.cookies.authToken;
            // Verifiy if the cookie that the client has is authentic
            const decodedJwt = yield jsonwebtoken_1.default.verify(authToken, `secret`, (err, decoded) => {
                if (!err) {
                    next();
                }
                else {
                    // If JWT is not authentic return a page with the a funny response
                    res.status(500);
                }
            });
            // check if the client doesn't have any JWT for this site
        }
        else if (!req.cookies.authToken) {
            // Render and return page with one of the funny message from the funny messages array
            res.status(400);
        }
    }
    catch (error) {
        // If the server crashes or fail in any way return the login page with the error message
        res.status(500);
    }
});
exports.assets = assets;
//# sourceMappingURL=asset.controller.js.map
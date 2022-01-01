"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import dependencies
const express_1 = __importDefault(require("express"));
const site_1 = __importDefault(require("./routes/site"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const path = __importStar(require("path"));
// This will be the main application to run the entire site
const app = (0, express_1.default)();
app.set('port', 80);
// PUG Template engine to dynamically render page server side
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, '../views'));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({ exposedHeaders: '*' }));
//make sure json is acccepted
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
// Main route for the live stream
app.use('/', site_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
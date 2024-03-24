"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = require("./config");
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1.default)();
    }
    App.prototype.listen = function () {
        this.app.listen(config_1.config.port, function () {
            console.log("App listening on the port ".concat(config_1.config.port));
        });
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=app.js.map
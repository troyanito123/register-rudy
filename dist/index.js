"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./class/server"));
var express_1 = __importDefault(require("express"));
var index_route_1 = __importDefault(require("./routes/index_route"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var server = server_1.default.instance;
// Middlewares
server.app.use(cors_1.default());
server.app.use(express_1.default.urlencoded({ extended: false }));
server.app.use(express_1.default.json());
// Routes
server.app.use('/api', index_route_1.default);
// Database
var mongo_uri = process.env.MONGO_URI || '';
mongoose_1.default.connect(mongo_uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, function (err) {
    if (err)
        throw err;
    console.log('Database ONLINE');
});
server.start(function () {
    console.log("Server UP on port " + server.port);
});

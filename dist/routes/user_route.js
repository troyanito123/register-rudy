"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = require("../controllers/user_controller");
var router = express_1.Router();
router.get('/', user_controller_1.getAll);
router.post('/', user_controller_1.create);
exports.default = router;

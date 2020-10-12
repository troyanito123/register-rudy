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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = exports.remove = exports.update = exports.getAll = exports.create = void 0;
var underscore_1 = __importDefault(require("underscore"));
var register_model_1 = __importDefault(require("../models/register_model"));
exports.create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, register, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = underscore_1.default.pick(req.body, 'matricula', 'codigo', 'paciente', 'empresa', 'numero_patronal', 'recetas', 'labs', 'rx', 'consultorio');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                register = new register_model_1.default(body);
                return [4 /*yield*/, register.save()];
            case 2:
                _a.sent();
                res.json({
                    ok: true,
                    data: register
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.status(400).json({
                    ok: false,
                    error: error_1
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, register_model_1.default.find().exec()];
            case 1:
                data = _a.sent();
                res.json({
                    ok: true,
                    data: data
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(400).json({
                    ok: false,
                    error: error_2
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, body, data, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                body = underscore_1.default.pick(req.body, 'matricula', 'codigo', 'paciente', 'empresa', 'numero_patronal', 'recetas', 'labs', 'rx', 'consultorio');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, register_model_1.default.findByIdAndUpdate(id, body, { new: true })];
            case 2:
                data = _a.sent();
                res.json({
                    ok: true,
                    data: data
                });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                res.status(400).json({
                    ok: false,
                    error: error_3
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, register_model_1.default.findByIdAndRemove(id)];
            case 2:
                data = _a.sent();
                res.json({
                    ok: true,
                    data: data
                });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                res.status(400).json({
                    ok: false,
                    error: error_4
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.search = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var term, regexp, dataByPaciente, dataByMatricula, data, sinrepeditos, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                term = req.params.term;
                regexp = new RegExp(term, 'i');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, register_model_1.default.find({ paciente: regexp }).exec()];
            case 2:
                dataByPaciente = _a.sent();
                return [4 /*yield*/, register_model_1.default.find({ matricula: regexp }).exec()];
            case 3:
                dataByMatricula = _a.sent();
                data = dataByPaciente.concat(dataByMatricula);
                sinrepeditos = data.filter(function (valorActual, indiceActual, arreglo) {
                    //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
                    return arreglo.findIndex(function (valorDelArreglo) { return JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual); }) === indiceActual;
                });
                res.json({
                    ok: true,
                    data: sinrepeditos
                });
                return [3 /*break*/, 5];
            case 4:
                error_5 = _a.sent();
                res.status(400).json({
                    ok: false,
                    error: error_5
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };

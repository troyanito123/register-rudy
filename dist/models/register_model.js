"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
var consultorios = {
    values: ['Consultorio 01', 'Consultorio 02', 'Consultorio 03', 'Consultorio 04', 'Consultorio 05'],
    message: '{VALUE} is not a valid consultorio'
};
var registerSchema = new mongoose_1.Schema({
    matricula: {
        type: String,
        required: true,
    },
    codigo: {
        type: String,
        required: true,
    },
    paciente: {
        type: String,
        required: true,
        unique: true,
    },
    empresa: {
        type: String,
        required: true,
    },
    numero_patronal: {
        type: String,
        required: true,
    },
    recetas: {
        type: Number,
        default: 0,
    },
    labs: {
        type: Number,
        default: 0,
    },
    rx: {
        type: Number,
        default: 0,
    },
    consultorio: {
        required: true,
        type: String,
        enum: consultorios,
    }
});
registerSchema.pre('save', function (next) {
    var user = this;
    user.matricula = user.matricula.toUpperCase();
    user.codigo = user.codigo.toUpperCase();
    user.paciente = user.paciente.toUpperCase();
    user.empresa = user.empresa.toUpperCase();
    user.numero_patronal = user.numero_patronal.toUpperCase();
    next();
});
registerSchema.plugin(mongoose_unique_validator_1.default, { message: '{PATH} must be unique' });
exports.default = mongoose_1.model('Register', registerSchema);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bcrypt_1 = __importDefault(require("bcrypt"));
var mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
var validRoles = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} is not a valid role'
};
var userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: validRoles,
        default: 'USER_ROLE'
    }
});
userSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password'))
        return next();
    user.password = bcrypt_1.default.hashSync(user.password, 10);
    next();
});
userSchema.methods.comparePassword = function (password) {
    return bcrypt_1.default.compareSync(password, this.password);
};
userSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();
    delete userObject.password;
    return userObject;
};
userSchema.plugin(mongoose_unique_validator_1.default, { message: '{PATH} must be unique' });
exports.default = mongoose_1.model('User', userSchema);

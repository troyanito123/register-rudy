import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt'
import uniqueValidator from 'mongoose-unique-validator';

const validRoles = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} is not a valid role'
}

const userSchema = new Schema({
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

interface IUser extends Document{
    name: string,
    email: string,
    password: string
    role: string

    comparePassword(password: string): boolean;

}

userSchema.pre<IUser>('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    user.password = bcrypt.hashSync(user.password, 10);
    next();
});

userSchema.methods.comparePassword = function (password: string): boolean {
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

userSchema.plugin(uniqueValidator, {message: '{PATH} must be unique'});

export default model<IUser>('User', userSchema);

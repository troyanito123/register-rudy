import { Schema, model, Document } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const consultorios = {
    values: ['Consultorio 01', 'Consultorio 02', 'Consultorio 03', 'Consultorio 04', 'Consultorio 05'],
    message: '{VALUE} is not a valid consultorio'
}

const registerSchema = new Schema({
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
    },
    labs: {
        type: Number,
    },
    rx: {
        type: Number,
    },
    consultorio: {
        required: true,
        type: String,
        enum: consultorios,
    }
});

interface IRegister extends Document{
    matricula: string,
    codigo: string,
    paciente: string,
    empresa: string,
    numero_patronal: string,
    recetas: number,
    labs: number,
    rx: number,
    consultorio: string,

}

registerSchema.pre<IRegister>('save', function (next) {
    const user = this;
    user.matricula = user.matricula.toUpperCase();
    user.paciente = user.paciente.toUpperCase();
    user.empresa = user.empresa.toUpperCase();
    user.numero_patronal = user.numero_patronal.toUpperCase();
    next();
});

registerSchema.plugin(uniqueValidator, {message: '{PATH} must be unique'});

export default model<IRegister>('Register', registerSchema);

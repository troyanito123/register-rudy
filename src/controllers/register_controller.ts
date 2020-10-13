import { Request, Response } from 'express';
import _ from 'underscore';
import Register from '../models/register_model';

export const create = async (req: Request, res: Response) =>{
    let body = _.pick(req.body, 'matricula', 'codigo', 'paciente', 'empresa', 'numero_patronal', 'recetas', 'labs', 'rx', 'consultorio');
    try {
        let register = new Register(body);
        await register.save();
        res.json({
            ok: true,
            data: register
        });
    }catch (error) {
        res.status(400).json({
           ok: false,
           error
        });
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        let data = await Register.find().exec();
        res.json({
            ok: true,
            data
        });
    }catch (error) {
        res.status(400).json({
            ok: false,
            error
        });
    }
}

export const getOne = async (req: Request, res: Response) => {
    let id = req.params.id;
    try {
        let data = await Register.findById(id).exec();
        res.json({
            ok: true,
            data
        });
    }catch (error) {
        res.status(400).json({
            ok: false,
            error
        });
    }
}

export const update = async (req: Request, res: Response) =>{
    let id = req.params.id;
    let body = _.pick(req.body, 'matricula', 'codigo', 'paciente', 'empresa', 'numero_patronal', 'recetas', 'labs', 'rx', 'consultorio');
    try {
        let data = await Register.findByIdAndUpdate(id, body, {new: true});
        res.json({
            ok: true,
            data
        });
    }catch (error) {
        res.status(400).json({
           ok: false,
           error
        });
    }
}

export const remove = async (req: Request, res: Response) =>{
    let id = req.params.id;
    try {
        let data = await Register.findByIdAndRemove(id);
        res.json({
            ok: true,
            data
        });
    }catch (error) {
        res.status(400).json({
           ok: false,
           error
        });
    }
}

export const search = async (req: Request, res: Response) =>{
    let term = req.params.term;
    let regexp = new RegExp(term, 'i');
    try {
        let dataByPaciente = await Register.find({paciente: regexp}).exec();
        let dataByMatricula = await Register.find({matricula: regexp}).exec();
        let data = dataByPaciente.concat(dataByMatricula);

        let sinrepeditos = data.filter((valorActual, indiceActual, arreglo) => {
            //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
            return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)) === indiceActual
        });

        res.json({
            ok: true,
            data: sinrepeditos
        });
    }catch (error) {
        res.status(400).json({
            ok: false,
            error
        });
    }
}


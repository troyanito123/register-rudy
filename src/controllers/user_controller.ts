import { Request, Response } from 'express';
import _ from 'underscore';
import User from '../models/user_model';

export const create = async (req: Request, res: Response) =>{
    let body = _.pick(req.body, 'name', 'email', 'password');
    try {
        let user = new User(body);
        await user.save();
        // let token = Token.getJwtToken(user);
        res.json({
            ok: true,
            data: user,
            // token
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
        let data = await User.find().exec();
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


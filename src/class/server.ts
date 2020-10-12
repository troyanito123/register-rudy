import express from 'express'
import dotenv from 'dotenv';
dotenv.config();

export default class Server {
    port: number;
    app: express.Application;
    private static _instance: Server;

    private constructor() {
        this.port = Number(process.env.PORT);
        this.app = express();
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    start( callback: () => void ){
        this.app.listen(this.port, callback)
    }
}

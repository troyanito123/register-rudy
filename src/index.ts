import Server from "./class/server";
import express from 'express';
import routes from './routes/index_route';
import mongoose from 'mongoose';
import cors from 'cors'

const server = Server.instance;

// Middlewares
server.app.use(cors());
server.app.use(express.urlencoded({extended: false}));
server.app.use(express.json());

// Routes
server.app.use('/api', routes);

// Database
const mongo_uri = process.env.MONGO_URI || '';
mongoose.connect(mongo_uri,
    {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}, (err)=>{
        if (err) throw err;
        console.log('Database ONLINE');
    });

server.start(()=>{
    console.log(`Server UP on port ${server.port}`);
});

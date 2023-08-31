import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import { router } from './router/index';
import { MONGO_URL, PORT } from "./constants";

const app = express();

app.use(cors({
    credentials:true,
}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`)
    mongoose.connect(MONGO_URL);
    mongoose.connection.on('error', ()=>{
        console.log("connection error");
    })
});


app.use('/', router);

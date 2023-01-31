import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import sequelize from './db/config';
import cors from 'cors';
import { IError } from './interfaces/error.interface';
import { routers } from './routes';
import * as dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 5000

sequelize.sync().then(() => {
    console.log("connect to database");
});


const app = express();

app.use(express.json());

app.use(cors())

app.use(routers);


app.use((err: IError, request: Request, response: Response, next: NextFunction) => {
    if (err?.status) {
        return response.status(err.status).json({
            message: err.message,
        });
    }

    if (err.message) {
        return response.status(400).json({
            message: err.message,
        });
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});

app.listen(PORT, () => console.log('Server rodando na porta!', PORT));
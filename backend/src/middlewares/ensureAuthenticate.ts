import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { BadRequest } from 'http-errors';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticate(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({ message: 'Sessão expirada' });
    }

    const [, token] = authHeader.split(' ');

    const JWT_SECRET = process.env.JWT_SECRET as string;

    try {
        const { sub } = verify(token, JWT_SECRET) as IPayload;
        request.id_user = sub;

        return next();
    } catch (error) {
        return BadRequest('Token invalido');
    }
}
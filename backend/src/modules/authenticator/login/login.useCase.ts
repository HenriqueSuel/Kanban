import { sign } from 'jsonwebtoken';
import { NotFound } from 'http-errors';

interface IProps {
    login: string;
    senha: string;
}

export class LoginUseCase {
    async handle({ login, senha }: IProps) {

        const { DEFAULT_LOGIN, DEFAULT_PASSWORD, JWT_SECRET } = process.env;

        if (login !== DEFAULT_LOGIN && senha !== DEFAULT_PASSWORD) { return NotFound('Email ou senha invalida') }

        const token = sign({ login }, JWT_SECRET as string, {
            subject: login,
            expiresIn: '10d',
        });

        return { token };

    }
}
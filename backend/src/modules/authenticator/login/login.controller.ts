import { Request, Response } from "express";
import { LoginUseCase } from "./login.useCase";

export class LoginController {
    async handle(req: Request, response: Response) {
        const { login, senha } = req.body;

        const loginUseCase = new LoginUseCase();

        const token = await loginUseCase.handle({ login, senha });

        console.log(token)
        return response.json(token);

    }
}
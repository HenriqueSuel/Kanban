import { Request, Response } from "express";
import { validateCardSchema } from "../../utils/validate-card.utils";
import { CreateCardUseCase } from "./CreateCard.useCase";

export class CreateCardController {
    async handle(req: Request, response: Response) {
        const { title, content, lista } = req.body;

        await validateCardSchema.validate({
            title, content, lista
        });

        const createCardUseCase = new CreateCardUseCase();

        const card = await createCardUseCase.handle({ title, content, lista });

        return response.status(201).json(card);
    }
}
import { Request, Response } from "express";
import { log } from "../../utils/log.utils";
import { validateCardSchema } from "../../utils/validate-card.utils";
import { UpdateCardsUseCase } from "./UpdateCard.useCase";

export class UpdateCardsController {
    async handle(req: Request, response: Response) {
        const { id } = req.params;
        const { title, content, lista } = req.body;

        await validateCardSchema.validate({
            title, content, lista
        });

        const updateCardsUseCase = new UpdateCardsUseCase();

        const card = await updateCardsUseCase.handle({ title, content, lista, id });

        log({ ...card, type: 'Alterar' });

        return response.status(200).json(card)

    }

}
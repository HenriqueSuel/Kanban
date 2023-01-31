import { Request, Response } from "express";
import { log } from "../../utils/log.utils";
import { DeleteCardUseCase } from "./DeleteCard.useCase";

export class DeleteCardController {
    async handle(req: Request, response: Response) {
        const { id } = req.params;

        const deleteCardUseCase = new DeleteCardUseCase();

        const card = await deleteCardUseCase.handle({ id });

        log({ ...card.delete, type: 'Remover' });

        return response.status(200).json(card.list)
    }

}
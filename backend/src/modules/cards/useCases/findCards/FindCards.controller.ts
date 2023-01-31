import { Request, Response } from "express";
import { FindCardsUseCase } from "./FindCards.useCase";

export class FindCardsController {
    async handle(req: Request, response: Response) {
        const findCardsUseCase = new FindCardsUseCase();

        const cards = await findCardsUseCase.handle();

        return response.status(200).json(cards)

    }

}
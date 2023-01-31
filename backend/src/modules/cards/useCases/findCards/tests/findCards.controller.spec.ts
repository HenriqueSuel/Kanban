import { Request, Response } from 'express';

import { FindCardsController } from '../FindCards.controller';
import { FindCardsUseCase } from '../FindCards.useCase';

describe('CreateCardController', () => {
    let findCardsController: FindCardsController;
    let findCardsUseCase: FindCardsUseCase;

    const req = ({ body: {}, params: {} }) as Request;
    let res: Response;


    beforeEach(() => {
        findCardsController = new FindCardsController();
        findCardsUseCase = new FindCardsUseCase();

        res = ({ json: jest.fn(), status: jest.fn().mockReturnThis() } as unknown) as Response;

        jest.spyOn(FindCardsUseCase.prototype, "handle").mockImplementation(() => Promise.resolve([]));
    })

    it("Should return response with status code 201", async () => {
        await findCardsController.handle(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    it("Should return response with JSON object", async () => {
        await findCardsController.handle(req, res);
        expect(res.json).toHaveBeenCalledWith([]);
    });

});
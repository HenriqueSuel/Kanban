import { Request, Response } from "express";
import { UpdateCardsController } from '../UpdateCard.controller';
import { UpdateCardsUseCase } from '../UpdateCard.useCase';

describe("UpdateCardsController", () => {
    let updateCardsController: UpdateCardsController;
    let req: Request;
    let res: Response;
    let updateCardsUseCase: UpdateCardsUseCase;

    beforeEach(() => {
        updateCardsController = new UpdateCardsController();
        updateCardsUseCase = new UpdateCardsUseCase();

        req = ({
            body: {
                title: 'new_title',
                content: 'new_content',
                lista: 'new_lista'
            }, params: { id: 'card_id' }
        } as unknown) as Request;
        res = ({ json: jest.fn(), status: jest.fn().mockReturnThis() } as unknown) as Response;

        jest.spyOn(UpdateCardsUseCase.prototype, "handle").mockResolvedValue({
            id: 'card_id',
            title: 'new_title',
            content: 'new_content',
            lista: 'new_lista'
        });
    });

    it("Should return response with status code 200", async () => {
        await updateCardsController.handle(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    it("Should return response with JSON object", async () => {
        await updateCardsController.handle(req, res);
        expect(res.json).toHaveBeenCalledWith({
            id: 'card_id',
            title: 'new_title',
            content: 'new_content',
            lista: 'new_lista'
        });
    });

    it("Should log card information to the console", async () => {
        const mock = jest.fn();
        console.info = mock;

        await updateCardsController.handle(req, res);

        expect(mock).toHaveBeenCalledTimes(1);
    });
});

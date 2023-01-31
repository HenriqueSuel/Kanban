import { Request, Response } from 'express';
import { CardInstance } from '../../../repositories/card.instance';
import { DeleteCardController } from '../DeleteCard.controller';
import { DeleteCardUseCase } from '../DeleteCard.useCase';

const MOCK_LIST = {
    id: 'card_id',
    title: 'new_title',
    content: 'new_content',
    lista: 'new_lista'
} as unknown as CardInstance;

describe('CreateCardController', () => {
    let deleteCardController: DeleteCardController;
    let req: Request;
    let res: Response;
    let deleteCardUseCase: DeleteCardUseCase;


    beforeEach(() => {
        deleteCardController = new DeleteCardController();
        deleteCardUseCase = new DeleteCardUseCase();

        req = ({
            body: {
                id: 'card_id'
            }, params: {}
        }) as Request;

        res = ({ json: jest.fn(), status: jest.fn().mockReturnThis() } as unknown) as Response;

        jest.spyOn(DeleteCardUseCase.prototype, "handle").mockResolvedValue({
            delete: {
                id: 'card_id',
                title: 'new_title',
                content: 'new_content',
                lista: 'new_lista',
            },
            list: [MOCK_LIST]
        });
    })

    it("Should return response with status code 201", async () => {
        await deleteCardController.handle(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    it("Should return response with JSON object", async () => {
        await deleteCardController.handle(req, res);
        expect(res.json).toHaveBeenCalledWith([MOCK_LIST]);
    });

    it("Should log card information to the console", async () => {
        const mock = jest.fn();
        console.info = mock;

        await deleteCardController.handle(req, res);

        expect(mock).toHaveBeenCalledTimes(1);
    });

});
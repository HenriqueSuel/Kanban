import { Request, Response } from 'express';
import { CreateCardController } from '../CreateCard.controller';
import { CreateCardUseCase } from '../CreateCard.useCase';

describe('CreateCardController', () => {
    let createCardController: CreateCardController;
    let req: Request;
    let res: Response;
    let createCardUseCase: CreateCardUseCase;


    beforeEach(() => {
        createCardController = new CreateCardController();
        createCardUseCase = new CreateCardUseCase();

        req = ({
            body: {
                title: 'new_title',
                content: 'new_content',
                lista: 'new_lista'
            }, params: {}
        }) as Request;

        res = ({ json: jest.fn(), status: jest.fn().mockReturnThis() } as unknown) as Response;

        jest.spyOn(CreateCardUseCase.prototype, "handle").mockResolvedValue({
            id: 'card_id',
            title: 'new_title',
            content: 'new_content',
            lista: 'new_lista'
        });
    })

    it("Should return response with status code 201", async () => {
        await createCardController.handle(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
    });

    it("Should return response with JSON object", async () => {
        await createCardController.handle(req, res);
        expect(res.json).toHaveBeenCalledWith({
            id: 'card_id',
            title: 'new_title',
            content: 'new_content',
            lista: 'new_lista'
        });
    });

});
import { BadRequest } from 'http-errors';
import { CardRepository } from '../../../repositories/card.repository';
import { CreateCardUseCase } from '../CreateCard.useCase';


const CARD_MOCK = {
    id: 'card_id',
    title: 'old_title',
    content: 'old_content',
    lista: 'old_lista'
}

describe('CreateCardUseCase', () => {
    let cardRepository: CardRepository;
    let createCardUseCase: CreateCardUseCase;

    beforeEach(() => {
        cardRepository = new CardRepository();
        createCardUseCase = new CreateCardUseCase();

        jest.spyOn(CardRepository.prototype, 'create').mockResolvedValue(CARD_MOCK);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create card successfully', async () => {
        const result = await createCardUseCase.handle({
            title: 'new_title',
            content: 'new_content',
            lista: 'new_lista'
        });

        expect(result).toEqual(CARD_MOCK);
    });

    it('should throw NotFound error if card not found', async () => {
        jest.spyOn(CardRepository.prototype, 'create').mockImplementation(() => Promise.reject(null));
        await expect(createCardUseCase.handle({
            title: 'new_title',
            content: 'new_content',
            lista: 'new_lista'
        })).rejects.toThrow(BadRequest);
    });

});

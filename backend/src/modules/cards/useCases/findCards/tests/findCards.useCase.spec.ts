import { BadRequest } from 'http-errors';
import { CardInstance } from '../../../repositories/card.instance';
import { CardRepository } from '../../../repositories/card.repository';
import { FindCardsUseCase } from '../FindCards.useCase';


const CARD_MOCK = {
    id: 'card_id',
    title: 'old_title',
    content: 'old_content',
    lista: 'old_lista'
} as unknown as CardInstance

describe('CreateCardUseCase', () => {
    let cardRepository: CardRepository;
    let findCardsUseCase: FindCardsUseCase;

    beforeEach(() => {
        cardRepository = new CardRepository();
        findCardsUseCase = new FindCardsUseCase();

        jest.spyOn(CardRepository.prototype, 'findAll').mockResolvedValue([CARD_MOCK]);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create card successfully', async () => {
        const result = await findCardsUseCase.handle();

        expect(result).toEqual([CARD_MOCK]);
    });

});

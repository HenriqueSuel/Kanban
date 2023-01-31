import { CardRepository } from '../../../repositories/card.repository';
import { NotFound } from 'http-errors';
import { DeleteCardUseCase } from '../DeleteCard.useCase';
import { CardInstance } from '../../../repositories/card.instance';

const MOCK_CARD = {
    id: 'card_id',
    title: 'new_title',
    content: 'new_content',
    lista: 'new_lista'
}

const MOCK_LIST_CARD = [
    { ...MOCK_CARD } as unknown as CardInstance
]

describe('UpdateCardsUseCase', () => {
    let cardRepository: CardRepository;
    let deleteCardUseCase: DeleteCardUseCase;

    beforeEach(() => {
        cardRepository = new CardRepository();
        deleteCardUseCase = new DeleteCardUseCase();

        jest.spyOn(CardRepository.prototype, 'delete').mockResolvedValue(1);
        jest.spyOn(CardRepository.prototype, 'findAll').mockResolvedValue(MOCK_LIST_CARD);

        jest.spyOn(CardRepository.prototype, 'findById').mockResolvedValue(MOCK_CARD);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should delete card successfully', async () => {
        const result = await deleteCardUseCase.handle({ id: MOCK_CARD.id });

        expect(cardRepository.findById).toHaveBeenCalledWith('card_id');
        expect(cardRepository.delete).toHaveBeenCalledWith('card_id');
        expect(result).toEqual({
            delete: MOCK_CARD,
            list: [MOCK_CARD]
        });
    });

    it('should throw NotFound error if card not found', async () => {
        jest.spyOn(CardRepository.prototype, 'findById').mockResolvedValue(undefined);
        await expect(deleteCardUseCase.handle({ id: MOCK_CARD.id })).rejects.toThrow(NotFound);
    });
});

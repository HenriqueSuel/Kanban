import { CardRepository } from '../../../repositories/card.repository';
import { UpdateCardsUseCase } from '../UpdateCard.useCase';
import { NotFound } from 'http-errors';

describe('UpdateCardsUseCase', () => {
    let cardRepository: CardRepository;
    let updateCardsUseCase: UpdateCardsUseCase;

    beforeEach(() => {
        cardRepository = new CardRepository();
        updateCardsUseCase = new UpdateCardsUseCase();

        jest.spyOn(CardRepository.prototype, 'findById').mockResolvedValue({
            id: 'card_id',
            title: 'old_title',
            content: 'old_content',
            lista: 'old_lista'
        });

        jest.spyOn(CardRepository.prototype, 'update').mockResolvedValue([1]);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should update card successfully', async () => {
        const result = await updateCardsUseCase.handle({
            id: 'card_id',
            title: 'new_title',
            content: 'new_content',
            lista: 'new_lista'
        });

        expect(cardRepository.findById).toHaveBeenCalledWith('card_id');
        expect(cardRepository.update).toHaveBeenCalledWith({
            id: 'card_id',
            title: 'new_title',
            content: 'new_content',
            lista: 'new_lista'
        });
        expect(result).toEqual({
            id: 'card_id',
            title: 'new_title',
            content: 'new_content',
            lista: 'new_lista'
        });
    });

    it('should throw NotFound error if card not found', async () => {
        jest.spyOn(CardRepository.prototype, 'findById').mockResolvedValue(undefined);
        await expect(updateCardsUseCase.handle({
            id: 'card_id',
            title: 'new_title',
            content: 'new_content',
            lista: 'new_lista'
        })).rejects.toThrow(NotFound);
    });
});

import { CardRepository } from "../../repositories/card.repository";

export class FindCardsUseCase {
    async handle() {
        const cardRepository = new CardRepository();
        return cardRepository.findAll();;
    }

}
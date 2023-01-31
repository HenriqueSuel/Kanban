import { CardRepository } from "../../repositories/card.repository";
import { NotFound } from 'http-errors';

interface IProps {
    id: string;
}

export class DeleteCardUseCase {
    async handle({ id }: IProps) {
        const cardRepository = new CardRepository();

        const findCardById = await cardRepository.findById(id);

        if (!findCardById) throw NotFound('Id não encontrado');

        await cardRepository.delete(id);

        const cards = await cardRepository.findAll();

        return { delete: findCardById, list: cards }
    }

}
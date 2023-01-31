import { CardRepository } from "../../repositories/card.repository";
import { NotFound } from 'http-errors';

interface IProps {
    id: string;
    title: string;
    content: string;
    lista: string;
}

export class UpdateCardsUseCase {
    async handle({ content, id, lista, title }: IProps) {

        const cardRepository = new CardRepository();

        const findCardById = await cardRepository.findById(id);
        
        if (!findCardById) throw NotFound('Id não encontrado');

        await cardRepository.update({
            content,
            lista,
            title,
            id
        });

        return {
            ...findCardById,
            content,
            lista,
            title,
        }
    }

}
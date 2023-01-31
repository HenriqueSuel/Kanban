import { v4 as uuidv4 } from "uuid";
import { CardRepository } from "../../repositories/card.repository";
import { BadRequest } from 'http-errors';

interface IProps {
    title: string;
    content: string;
    lista: string;
}

export class CreateCardUseCase {
    async handle({ title, content, lista }: IProps) {
        try {
            const id = uuidv4();
            const cardRepository = new CardRepository();
            const card = await cardRepository.create({ title, content, lista, id });
            return card;
        } catch {
            throw BadRequest('Ops, tivemos um erro')
        }
    }
}
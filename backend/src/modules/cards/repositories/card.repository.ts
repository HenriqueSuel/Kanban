import { CardInstance } from "./card.instance";

export interface ICardProps {
    id: string;
    title: string;
    content: string;
    lista: string;
}

export class CardRepository {
    async findAll() {
        return CardInstance.findAll();
    }

    async findById(id: string) {
        const cards = await CardInstance.findByPk(id);
        return cards?.toJSON();
    }

    async create({ title, content, lista, id }: ICardProps) {
        const card = await CardInstance.create({ title, content, lista, id });
        return card.toJSON();
    }

    async update({ title, content, lista, id }: ICardProps) {
        return CardInstance.update({ title, content, lista }, { where: { id } });
    }

    async delete(id: string) {
        return CardInstance.destroy({ where: { id } });
    }
}
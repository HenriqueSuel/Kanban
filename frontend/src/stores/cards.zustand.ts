import { ICard } from '@/interfaces/card.interface';
import { deleteApi, getApi, postApi, putApi } from '@/services/axios.service';
import { create } from 'zustand'


interface CardStates {
    cards: ICard[];
    createCard: (card: Omit<ICard, 'id'>) => void;
    editCard: (card: ICard) => void;
    findCards: () => void;
    deleteCard: (id: string) => void;
}

const useCardsStore = create<CardStates>()(
    (set) => ({
        cards: [],
        createCard: async (card: Omit<ICard, 'id'>) => {
            await postApi<ICard>('/cards', card);
        },
        editCard: async (card: ICard) => {
            await putApi<ICard>(`/cards/${card.id}`, card);
        },
        findCards: async () => {
            const cards = await getApi<ICard[]>('/cards');
            set(() => ({ cards }))
        },
        deleteCard: async (id) => {
            await deleteApi<ICard>(`/cards/${id}`);
        },
    }),
)

export { useCardsStore };
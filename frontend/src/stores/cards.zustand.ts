import { ICard } from '@/interfaces/card.interface';
import { deleteApi, getApi, postApi, putApi } from '@/services/axios.service';
import { handleError } from '@/services/error.service';
import { toast } from 'react-toastify';
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
            try {
                await postApi<ICard>('/cards', card);
                toast.success('Card criado com sucesso!');
            } catch (error) {
                handleError(error)
            }
        },
        editCard: async (card: ICard) => {
            try {
                console.log(card)
                await putApi<ICard>(`/cards/${card.id}`, card);
                toast.success('Card atualizado com sucesso!');
            } catch (error) {
                handleError(error)
            }
        },
        findCards: async () => {
            try {
                const cards = await getApi<ICard[]>('/cards');
                set(() => ({ cards }))
            } catch (error) {
                handleError(error)
            }

        },
        deleteCard: async (id) => {
            try {
                await deleteApi<ICard>(`/cards/${id}`);
                toast.success('Card deletado com sucesso!');
            } catch (error) {
                handleError(error)
            }
        },
    }),
)

export { useCardsStore };
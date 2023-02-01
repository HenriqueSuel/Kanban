import { MODAL_STYLES } from '@/constants/modal.constants';
import { KANBAN_STATUS } from '@/constants/status.constants';
import { ICard } from '@/interfaces/card.interface';
import { useCardsStore } from '@/stores/cards.zustand';
import { useCallback, useEffect } from 'react';
import { Card } from '../Card';
import * as S from './styles';

const Board = () => {
    const { findCards, cards, deleteCard, editCard } = useCardsStore();

    const handleChangeStatusCard = useCallback(async (card: ICard) => {
        await editCard(card);
        await findCards();
    }, [editCard, findCards]);

    const handleCompleteEdit = useCallback(async () => {
        await findCards();
    }, [findCards]);

    const handleDeleteCard = useCallback(async (id: string) => {
        await deleteCard(id);
        await findCards();
    }, [deleteCard, findCards])

    useEffect(() => {
        findCards();
    }, [findCards])

    return (
        <S.Container>
            <S.Column>
                <S.Title>To Do</S.Title>
                {cards.filter(card => card.lista === KANBAN_STATUS.TODO).map(card => (
                    <Card
                        key={card.id}
                        {...card}
                        handleCompleteEdit={handleCompleteEdit}
                        handleArrowRight={() => handleChangeStatusCard({ ...card, lista: KANBAN_STATUS.DOING })}
                        handleDelete={() => handleDeleteCard(card.id)} />
                ))}
            </S.Column>
            <S.Column>
                <S.Title>Doing</S.Title>
                {cards.filter(card => card.lista === KANBAN_STATUS.DOING).map(card => (
                    <Card
                        key={card.id}
                        {...card}
                        handleCompleteEdit={handleCompleteEdit}
                        handleDelete={() => handleDeleteCard(card.id)}
                        handleArrowLeft={() => handleChangeStatusCard({ ...card, lista: KANBAN_STATUS.TODO })}
                        handleArrowRight={() => handleChangeStatusCard({ ...card, lista: KANBAN_STATUS.DONE })} />
                ))}
            </S.Column>
            <S.Column>
                <S.Title>Done</S.Title>
                {cards.filter(card => card.lista === KANBAN_STATUS.DONE).map(card => (
                    <Card
                        key={card.id}
                        {...card}
                        handleCompleteEdit={handleCompleteEdit}
                        handleDelete={() => handleDeleteCard(card.id)}
                        handleArrowLeft={() => handleChangeStatusCard({ ...card, lista: KANBAN_STATUS.DOING })} />
                ))}
            </S.Column>

        </S.Container>
    )

}

export { Board };
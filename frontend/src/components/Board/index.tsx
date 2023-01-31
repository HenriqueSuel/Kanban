import { MODAL_STYLES } from '@/constants/modal.constants';
import { ICard } from '@/interfaces/card.interface';
import { useCardsStore } from '@/stores/cards.zustand';
import { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Card } from '../Card';
import { FormCard } from '../FormCard';
import * as S from './styles';

const Board = () => {
    const [selectedCard, setSelectedCard] = useState<ICard | null>();

    const [modalIsOpen, setIsOpen] = useState(false);

    const { findCards, cards, deleteCard } = useCardsStore();


    const closeModal = async () => {
        await findCards();
        setIsOpen(false);
        setSelectedCard(null)
    }

    const handleEditCard = useCallback((card: ICard) => {
        setSelectedCard(card);
        setIsOpen(true);
    }, []);

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
                {cards.filter(card => card.lista === 'todo').map(card => (
                    <Card key={card.id} {...card} handleClick={() => handleEditCard(card)} handleDelete={() => handleDeleteCard(card.id)} />
                ))}
            </S.Column>
            <S.Column>
                <S.Title>Doing</S.Title>
                {cards.filter(card => card.lista === 'doing').map(card => (
                    <Card key={card.id} {...card} handleClick={() => handleEditCard(card)} handleDelete={() => handleDeleteCard(card.id)} />
                ))}

            </S.Column>
            <S.Column>
                <S.Title>Done</S.Title>
                {cards.filter(card => card.lista === 'done').map(card => (
                    <Card key={card.id} {...card} handleClick={() => handleEditCard(card)} handleDelete={() => handleDeleteCard(card.id)} />
                ))}

            </S.Column>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={MODAL_STYLES}
            >
                <FormCard onComplete={closeModal}  {...selectedCard} />
            </Modal>

        </S.Container>
    )

}

export { Board };
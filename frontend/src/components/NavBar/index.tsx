import * as S from './styles'
import Modal from 'react-modal';
import { useState } from 'react';
import { FormCard } from '../FormCard';
import { useCardsStore } from '@/stores/cards.zustand';
import { MODAL_STYLES } from '@/constants/modal.constants';

const NavBar = () => {
    const { findCards } = useCardsStore();

    const [modalIsOpen, setIsOpen] = useState(false);

    const closeModal = async () => {
        await findCards();
        setIsOpen(false);
    }

    return (
        <S.Container>
            <S.Title>Kanban</S.Title>
            <div>
                <S.Button onClick={() => setIsOpen(true)}>Novo card</S.Button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={MODAL_STYLES}
            >
                <FormCard onComplete={closeModal}  />
            </Modal>
        </S.Container>
    )
}

export { NavBar }
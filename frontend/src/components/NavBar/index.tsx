import * as S from './styles'
import Modal from 'react-modal';
import { useState } from 'react';
import { FormCard } from '../FormCard';
import { useCardsStore } from '@/stores/cards.zustand';
import { MODAL_STYLES } from '@/constants/modal.constants';
import { Button } from '@/styles/globals';
import { COLORS } from '@/constants/theme.constants';

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
            <Button color={COLORS.SUCCESS} onClick={() => setIsOpen(true)}>Novo card</Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={MODAL_STYLES}
            >
                <FormCard onComplete={closeModal} />
            </Modal>
        </S.Container>
    )
}

export { NavBar }
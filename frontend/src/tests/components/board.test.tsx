import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import { Board } from '@/components/Board';
import Modal from 'react-modal';

Modal.setAppElement('body')

const findCards = jest.fn();
const deleteCard = jest.fn();


jest.mock('@/stores/cards.zustand', () => {
    return {
        useCardsStore: jest.fn(() => ({
            cards: [
                { id: '1', title: 'Card 1', content: 'Content 1', lista: 'todo' },
                { id: '2', title: 'Card 2', content: 'Content 2', lista: 'doing' },
                { id: '3', title: 'Card 3', content: 'Content 3', lista: 'done' },
            ],
            findCards,
            deleteCard
        })),
    };
});

describe('Board component', () => {
    afterEach(cleanup);

    it('should render all columns', () => {
        const { getByText } = render(<Board />);

        expect(getByText('To Do')).toBeTruthy();
        expect(getByText('Doing')).toBeTruthy();
        expect(getByText('Done')).toBeTruthy();
    });

    it('should render all cards', () => {
        const { getByText } = render(<Board />);

        expect(getByText('Card 1')).toBeTruthy();
        expect(getByText('Card 2')).toBeTruthy();
        expect(getByText('Card 3')).toBeTruthy();
    });

    it('should call findCards and deleteCard when clicking delete card', () => {
        render(<Board />);
        const deleteButton = screen.getAllByText('Deletar');
        fireEvent.click(deleteButton[1]);

        expect(deleteCard).toHaveBeenCalled();
        expect(findCards).toHaveBeenCalled();
    });
    it('should call findCards and deleteCard when clicking delete card', async () => {
        render( <Board />);

        const editarButton = screen.getAllByText('Editar');
        fireEvent.click(editarButton[1]);

        const modal = await screen.findByTestId('formCard')
        expect(modal).toBeInTheDocument();
    });
});

import { FormCard } from '@/components/FormCard';
import { render, fireEvent, waitFor } from '@testing-library/react';


const createCard = jest.fn();
const onComplete = jest.fn();

jest.mock('@/stores/cards.zustand', () => {
    return {
        useCardsStore: jest.fn(() => ({
            createCard,
            onComplete
        })),
    };
});

describe('FormCard', () => {
  it('should render the form', async () => {
    const onComplete = jest.fn();
    const { getByTestId, getByLabelText } = render(<FormCard onComplete={onComplete} />);
    const form = getByTestId('formCard');

    expect(form).toBeInTheDocument();
    expect(getByLabelText('Titulo')).toBeInTheDocument();
    expect(getByLabelText('Content')).toBeInTheDocument();
    expect(getByLabelText('Lista')).toBeInTheDocument();
  });

  it('should call the createCard function on submit', async () => {
    const { getByTestId, getByLabelText, getByText } = render(<FormCard onComplete={onComplete} />);
    const form = getByTestId('formCard');
    const titleInput = getByLabelText('Titulo');
    const contentInput = getByLabelText('Content');
    const listaInput = getByLabelText('Lista');
    const submitButton = getByText('Salvar');

    fireEvent.change(titleInput, { target: { value: 'Teste' } });
    fireEvent.change(contentInput, { target: { value: 'Conteúdo de teste' } });
    fireEvent.change(listaInput, { target: { value: 'todo' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(createCard).toHaveBeenCalledWith({
        title: 'Teste',
        content: 'Conteúdo de teste',
        lista: 'todo'
      });
      expect(onComplete).toHaveBeenCalled();
    });
  });
});

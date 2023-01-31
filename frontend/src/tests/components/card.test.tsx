import { fireEvent, render, screen } from '@testing-library/react'
import { Card } from '../../components/Card'
import { ICard } from '@/interfaces/card.interface'


interface IProps extends ICard {
  handleClick: () => void;
  handleDelete: () => void;
}

const props: IProps = {
  content: 'Aqui está o content',
  id: 'ID_123131312',
  lista: 'todo',
  title: 'Titulo',
  handleClick: jest.fn(),
  handleDelete: jest.fn()
}

describe('Card', () => {
  it('renders the title and content correctly ', () => {
    render(<Card {...props} />)

    expect(screen.getByText(props.title)).toBeInTheDocument()
    expect(screen.getByText(props.content)).toBeInTheDocument()
  });

  it('calls the handle click function when the Edit button is clicked', () => {
    render(<Card {...props} />)

    const editButton = screen.getByText(/Edit/i);
    fireEvent.click(editButton);

    expect(props.handleClick).toHaveBeenCalled();
  });

  it('calls the handleDelete function when the "Delete" button is clicked', () => {
    render(<Card {...props} />)

    const deleteButton = screen.getByText(/Deletar/i);

    fireEvent.click(deleteButton);

    expect(props.handleDelete).toHaveBeenCalled();
  })

})
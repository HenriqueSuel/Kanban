import { fireEvent, render, screen } from '@testing-library/react'
import { Card } from '../../components/Card'
import { ICard } from '@/interfaces/card.interface'


interface IPropsFormCard {
  onComplete: () => void;
  onCancel: () => void
}
interface IProps extends ICard {
  handleCompleteEdit: () => void;
  handleDelete: () => void;
  handleArrowLeft?: () => void;
  handleArrowRight?: () => void;
}


jest.mock('../../components/FormCard', () => ({
  FormCard: jest.fn(({ onComplete, onCancel }: IPropsFormCard) => (
    <>
    <h1 data-testid="formCard" onClick={() => onComplete()}>ButtonFormCardOnComplete</h1>
    <h1 onClick={() => onCancel()}>ButtonFormCardOnCancel</h1>
    </>
  ))
}));


const props: IProps = {
  content: 'Aqui está o content',
  id: 'ID_123131312',
  lista: 'doing',
  title: 'Titulo',
  handleDelete: jest.fn(),
  handleArrowLeft: jest.fn(),
  handleArrowRight: jest.fn(),
  handleCompleteEdit: jest.fn()
}

describe('Card', () => {
  it('checking that the component renders correctly when not in edit mode. ', () => {
    render(<Card {...props} />)

    expect(screen.getByText(props.title)).toBeInTheDocument()
    expect(screen.getByText(props.content)).toBeInTheDocument()
    expect(screen.queryByTestId('formCard')).toBeFalsy();
  });

  it('Verify that the component renders correctly when in edit mode.', () => {
    render(<Card {...props} />)

    fireEvent.click(screen.getByText('Editar'));

    expect(screen.queryByTestId('formCard')).toBeTruthy();
  });

  it('Check that the click action on the "Delete" button calls handleDelete', () => {
    render(<Card {...props} />)

    fireEvent.click(screen.getByText('Deletar'));

    expect(props.handleDelete).toBeCalledTimes(1);
  });

  it('Check that the click action on the "FaArrowLeft" button calls handleArrowLeft', () => {
    render(<Card {...props} />)

    fireEvent.click(screen.getByTestId('FaArrowLeft'));

    expect(props.handleArrowLeft).toBeCalledTimes(1);
  });

  it('Check that the click action on the "Delete" button calls FaArrowRight', () => {
    render(<Card {...props} />)

    fireEvent.click(screen.getByTestId('FaArrowRight'));

    expect(props.handleArrowRight).toBeCalledTimes(1);
  });

  it('should call handleCompleteEdit function', () => {

    render(<Card {...props} />)


    const editButton = screen.getByText('Editar');
    fireEvent.click(editButton);

    const onCompleteButton = screen.getByText('ButtonFormCardOnComplete');
    fireEvent.click(onCompleteButton);

    expect(props.handleCompleteEdit).toHaveBeenCalledTimes(1)
  });

  it('should call handleCompleteEdit function', () => {

    render(<Card {...props} />)


    const editButton = screen.getByText('Editar');
    fireEvent.click(editButton);

    const onCancelButton = screen.getByText('ButtonFormCardOnCancel');
    fireEvent.click(onCancelButton);

    expect(screen.queryByTestId('formCard')).toBeFalsy();
  });


  /*   it('calls the handle click function when the Edit button is clicked', () => {
      render(<Card {...props} />)
  
      const editButton = screen.getByText(/Edit/i);
      fireEvent.click(editButton);
  
      expect(props.handleCompleteEdit).toHaveBeenCalled();
    });
  
    it('calls the handleDelete function when the "Delete" button is clicked', () => {
      render(<Card {...props} />)
  
      const deleteButton = screen.getByText(/Deletar/i);
  
      fireEvent.click(deleteButton);
  
      expect(props.handleDelete).toHaveBeenCalled();
    }) */

})
import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages';


jest.mock('react-modal')

describe('Home component', () => {
  it('renders NavBar and Board components', () => {
    const { getByText } = render(<Home />);
    const navBarElement = getByText('Kanban');
    const boardElement = getByText('To Do');
    expect(navBarElement).toBeInTheDocument();
    expect(boardElement).toBeInTheDocument();
  });
});
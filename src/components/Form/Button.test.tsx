import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button>', () => {
  it('should render with correct children text', () => {
    render(<Button name='enviar'>enviar</Button>);
    const button = screen.getByRole('button', { name: /enviar/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('enviar');
  });
  it('should call the onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(
      <Button name='enviar' onClick={handleClick}>
        enviar
      </Button>
    );

    const button = screen.getByRole('button', { name: /enviar/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1); // confere se a função foi chamada uma unica vez
    // Verif. background default
  });
});

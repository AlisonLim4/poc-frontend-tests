import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('<Input>', () => {
  it('should render with correct placeholder text', () => {
    render(<Input placeholder='Digite o email' />);

    const input = screen.getByPlaceholderText(/digite o email/i);

    const styles = window.getComputedStyle(input);
  });
});

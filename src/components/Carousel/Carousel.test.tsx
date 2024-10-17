import { fireEvent, render, screen } from '@testing-library/react';
import Carousel from './Carousel';

describe('<Carousel>', () => {
  it('should disable the Previous button when on the first slide', () => {
    render(<Carousel />);

    const prevButton = screen.getByText('Previous');

    expect(prevButton).toBeDisabled();
  });

  it('should enable "Next button after clicking "Previous" on the last slide', () => {
    render(<Carousel />);

    const nextButton = screen.getByText('Next');
    const prevButton = screen.getByText('Previous');

    //vai dar 2 clicks para chegar ao ultimo slide
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    //verifica se o botao next desabilitou
    expect(nextButton).toBeDisabled();

    // vai dar 1 click em voltar, para chegar no segundo slide
    fireEvent.click(prevButton);

    //verfica se o botao next foi habilitado novamente
    expect(nextButton).not.toBeDisabled();
  });

  it('should enable "previous button after clicking "Next" on the first slide', () => {
    render(<Carousel />);

    const prevButton = screen.getByText('Previous');
    const nextButton = screen.getByText('Next');

    expect(prevButton).toBeDisabled();

    fireEvent.click(nextButton);

    expect(prevButton).not.toBeDisabled();
  });
});

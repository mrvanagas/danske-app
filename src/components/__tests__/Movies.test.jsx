import { render, screen, cleanup} from '@testing-library/react';
import Movies from '../Movies';

test('should render Movies component', () => {
    render(<Movies/>)
    const MoviesElement = screen.getByTestId('movies-1');
    expect(MoviesElement).toBeInTheDocument();
    expect(MoviesElement).toHaveTextContent('Movies')
})

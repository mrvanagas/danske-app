import { render, screen, cleanup} from '@testing-library/react';
import Home from '../Home';

test('should render Home component', () => {
    render(<Home/>)
    const HomeElement = screen.getByTestId('home-1');
    expect(HomeElement).toBeInTheDocument();
    expect(HomeElement).toHaveTextContent('Home')
})

import { render, screen, cleanup} from '@testing-library/react';
import People from '../People';

test('should render People component', () => {
    render(<People/>)
    const PeopleElement = screen.getByTestId('people-1');
    expect(PeopleElement).toBeInTheDocument();
    expect(PeopleElement).toHaveTextContent('People')
})

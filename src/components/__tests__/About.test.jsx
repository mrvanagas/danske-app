import { render, screen, cleanup} from '@testing-library/react';
import About from '../About';

test('should render About component', () => {
    render(<About/>)
    const AboutElement = screen.getByTestId('about-1');
    expect(AboutElement).toBeInTheDocument();
    expect(AboutElement).toHaveTextContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, accusamus molestiae tenetur incidunt corporis quibusdam rem. Architecto id, accusantium eius tenetur maxime ducimus facere ad similique quo nesciunt quod tempora sunt, eos minus explicabo beatae dolor excepturi sapiente dolore iure laboriosam at accusamus repellendus! Vel dignissimos, officia doloremque nesciunt earum architecto veniam soluta quis dolore quibusdam harum ex magnam reprehenderit. At, provident. Nostrum, obcaecati! Odit, perspiciatis tempore! Facere voluptates vero possimus cumque odio, quisquam aliquid repellendus minima maiores officia qui, deleniti quae unde, ipsam doloribus numquam temporibus recusandae iure fuga alias esse cupiditate aut assumenda? Sit enim molestias quas amet.')
})

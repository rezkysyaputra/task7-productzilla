import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('Button Component', () => {
  test('renders button with children', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders button with custom type', () => {
    render(<Button type='reset'>Reset</Button>);
    const buttonElement = screen.getByRole('button', { name: /reset/i });
    expect(buttonElement).toHaveAttribute('type', 'reset');
  });

  test('applies custom className', () => {
    render(<Button className='custom-class'>Custom Class</Button>);
    const buttonElement = screen.getByRole('button', { name: /custom class/i });
    expect(buttonElement).toHaveClass('custom-class');
  });
});

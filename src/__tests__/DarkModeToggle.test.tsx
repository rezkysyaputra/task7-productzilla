import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import DarkModeToggle from '../components/DarkModeToggle';
describe('DarkModeToggle Component', () => {
  test('renders with Sun icon initially', () => {
    render(<DarkModeToggle />);
    const sunIcon = screen.getByRole('button').querySelector('svg');
    expect(sunIcon).toBeInTheDocument();
  });

  test('toggles to dark mode and shows Moon icon', () => {
    render(<DarkModeToggle />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(document.documentElement.classList.contains('dark')).toBe(true);

    const moonIcon = screen.getByRole('button').querySelector('svg');
    expect(moonIcon).toBeInTheDocument();
  });

  test('toggles back to light mode and shows Sun icon', () => {
    render(<DarkModeToggle />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    fireEvent.click(button);

    expect(document.documentElement.classList.contains('dark')).toBe(false);

    const sunIcon = screen.getByRole('button').querySelector('svg');
    expect(sunIcon).toBeInTheDocument();
  });
});

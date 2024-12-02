import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import LinkMediaSocial from '../components/LinkSocialMedia';
describe('LinkMediaSocial Component', () => {
  test('renders link with children', () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <LinkMediaSocial to='https://github.com'>GitHub</LinkMediaSocial>
      </MemoryRouter>
    );
    const linkElement = screen.getByRole('link', { name: /github/i });
    expect(linkElement).toBeInTheDocument();
  });

  test('has correct href attribute', () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <LinkMediaSocial to='https://github.com'>GitHub</LinkMediaSocial>
      </MemoryRouter>
    );
    const linkElement = screen.getByRole('link', { name: /github/i });
    expect(linkElement).toHaveAttribute('href', 'https://github.com');
  });
});

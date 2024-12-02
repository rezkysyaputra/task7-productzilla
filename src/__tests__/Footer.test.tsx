import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { BrowserRouter } from 'react-router-dom';

describe('Footer Component', () => {
  test('renders the current year', () => {
    const currentYear = new Date().getFullYear();
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Footer />
      </BrowserRouter>
    );
    expect(
      screen.getByText(`© ${currentYear} RezkyDev. All Rights Reserved.`)
    ).toBeInTheDocument();
  });
});

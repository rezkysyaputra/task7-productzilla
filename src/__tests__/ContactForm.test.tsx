import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../components/ContactForm';
import '@testing-library/jest-dom';
describe('ContactForm Component', () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    render(<ContactForm onSubmit={mockOnSubmit} />);
  });

  test('renders form with input fields and button', () => {
    const emailInput = screen.getByLabelText(/your email/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageInput = screen.getByLabelText(/your message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    expect(emailInput).toBeInTheDocument();
    expect(subjectInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('submits form with valid data', () => {
    const emailInput = screen.getByLabelText(/your email/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageInput = screen.getByLabelText(/your message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    fireEvent.change(messageInput, { target: { value: 'Test Message' } });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'Test Message',
    });
  });

  test('clears form fields after successful submission', () => {
    const emailInput = screen.getByLabelText(/your email/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageInput = screen.getByLabelText(/your message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    fireEvent.change(messageInput, { target: { value: 'Test Message' } });
    fireEvent.click(submitButton);

    expect(emailInput).toHaveValue('');
    expect(subjectInput).toHaveValue('');
    expect(messageInput).toHaveValue('');
  });
});

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form from '@/components/From';
import React from 'react';
describe('Form Component', () => {
  test('renders form fields correctly', () => {
    render(<Form />);

    const nameField = screen.getByLabelText(/Name/);
    const emailField = screen.getByLabelText(/Email/);
    const passwordField = screen.getByLabelText(/Password/);
    const confirmPasswordField = screen.getByLabelText(/Confirm Password/);

    expect(nameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(confirmPasswordField).toBeInTheDocument();
  });

  test('shows error if email has uppercase letters', async () => {
    render(<Form />);

    const emailField = screen.getByLabelText(/Email/);
    fireEvent.change(emailField, { target: { value: 'TEST@Example.com' } });

    const submitButton = screen.getByText(/Create Profile/);
    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorMessage = screen.getByText('Only lowercase letters are allowed in email');
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test('shows success message when form is submitted successfully', async () => {
    render(<Form />);

    fireEvent.change(screen.getByLabelText(/Name/), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password/), { target: { value: 'Password123' } });
    fireEvent.change(screen.getByLabelText(/Confirm Password/), { target: { value: 'Password123' } });

    const submitButton = screen.getByText(/Create Profile/);
    fireEvent.click(submitButton);

    await waitFor(() => {
      const successMessage = screen.getByText('Profile successfully created! 🎉');
      expect(successMessage).toBeInTheDocument();
    });
  });

  test('disables submit button while form is submitting', async () => {
    render(<Form />);

    fireEvent.change(screen.getByLabelText(/Name/), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password/), { target: { value: 'Password123' } });
    fireEvent.change(screen.getByLabelText(/Confirm Password/), { target: { value: 'Password123' } });

    const submitButton = screen.getByText(/Create Profile/);
    fireEvent.click(submitButton);

    expect(submitButton).toBeDisabled();
  });
});

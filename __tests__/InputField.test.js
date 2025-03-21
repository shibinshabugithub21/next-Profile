import { render, screen, fireEvent } from '@testing-library/react';
import InputField from '@/components/InputFields';
import React from 'react';
describe('InputField Component', () => {
  test('renders label correctly', () => {
    render(<InputField label="Email" name="email" value="" onChange={() => {}} />);
    const label = screen.getByText(/Email/);
    expect(label).toBeInTheDocument();
  });

  test('displays error when email contains uppercase letters', () => {
    render(<InputField label="Email" name="email" value="Test@Example.com" onChange={() => {}} />);
    
    const input = screen.getByLabelText(/Email/);
    fireEvent.change(input, { target: { value: 'Test@Example.com' } });

    const errorMessage = screen.getByText('Only lowercase letters are allowed in email');
    expect(errorMessage).toBeInTheDocument();
  });

  test('shows password requirements when typing in password field', () => {
    render(<InputField label="Password" name="password" value="" onChange={() => {}} />);
    
    const input = screen.getByLabelText(/Password/);
    fireEvent.change(input, { target: { value: 'Password123' } });

    const requirement = screen.getByText(/At least 8 characters long/);
    expect(requirement).toBeInTheDocument();
  });
});

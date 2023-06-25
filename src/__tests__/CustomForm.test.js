import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import Form from './Form';

describe('Form', () => {
  it('submits the form with valid data', () => {
    const { getByPlaceholder, getByText } = render(<Form />);
    const emailInput = getByPlaceholder('Enter a valid email to submit');
    const passwordInput = getByPlaceholder('Password');
    const submitButton = getByText('Submit');

    // Fill in the form fields
    fireEvent.changeText(emailInput, 'example@example.com');
    fireEvent.changeText(passwordInput, 'password123');

    // Submit the form
    fireEvent.press(submitButton);

    // Add your assertions for the form submission logic here
    // e.g., expect(someFunction).toHaveBeenCalledWith({ email: 'example@example.com', password: 'password123' });
  });

  it('displays error messages for invalid form data', () => {
    const { getByPlaceholder, getByText, queryByText } = render(<Form />);
    const emailInput = getByPlaceholder('Enter a valid email to submit');
    const passwordInput = getByPlaceholder('Password');
    const submitButton = getByText('Submit');

    // Fill in the form fields with invalid data
    fireEvent.changeText(emailInput, 'invalid-email');
    fireEvent.changeText(passwordInput, '123');

    // Submit the form
    fireEvent.press(submitButton);

    // Check if error messages are displayed
    expect(queryByText('Invalid email address')).toBeTruthy();
    expect(queryByText('Password must have at least 6 characters')).toBeTruthy();
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomButton from './CustomButton';

describe('CustomButton', () => {
  test('renders correctly with Sign In label', () => {
    const onSubmitMock = jest.fn();
    const { getByText, getByTestId } = render(<CustomButton label="Sign In" onSubmit={onSubmitMock} />);

    const button = getByText('Sign In');

    expect(button).toBeDefined();
    expect(button.props.style).toEqual(expect.objectContaining(styles.signIn));
    expect(button.props.labelStyle).toEqual(expect.objectContaining(styles.buttonText));

    fireEvent.press(button);

    expect(onSubmitMock).toHaveBeenCalled();
  });

  test('renders correctly with Sign Up label', () => {
    const onSubmitMock = jest.fn();
    const { getByText, getByTestId } = render(<CustomButton label="Sign Up" onSubmit={onSubmitMock} />);

    const button = getByText('Sign Up');

    expect(button).toBeDefined();
    expect(button.props.style).toEqual(expect.objectContaining(styles.signUp));
    expect(button.props.labelStyle).toEqual(expect.objectContaining(styles.buttonWhiteText));

    fireEvent.press(button);

    expect(onSubmitMock).toHaveBeenCalled();
  });
});

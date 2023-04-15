import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../src/common/components';

describe('Button', () => {
  const handlePress = jest.fn();
  const title = 'Test Button';
  const buttonStyles = { margin: 10 };

  it('renders correctly', () => {
    const { getByText, getByTestId } = render(
      <Button handlePress={handlePress} title={title} buttonStyles={buttonStyles} />
    );
    const button = getByTestId('button');
    expect(button).toBeTruthy();
    expect(getByText(title)).toBeTruthy();
    expect(button.props.disabled).toBeFalsy();
  });

  it('calls handlePress when pressed', () => {
    const { getByTestId } = render(
      <Button handlePress={handlePress} title={title} />
    );
    const button = getByTestId('button');
    fireEvent.press(button);
    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Footer} from '../src/common/components/Footer';
import {ButtonProps} from '../src/common/components';

describe('Footer', () => {
  const buttons: ButtonProps[] = [
    {
      title: 'Button 1',
      handlePress: jest.fn(),
    },
    {
      title: 'Button 2',
      handlePress: jest.fn(),
    },
  ];

  it('renders correctly', () => {
    const {getByText, getByTestId} = render(<Footer buttons={buttons} />);
    expect(getByTestId('footer')).toBeTruthy();
    expect(getByText(buttons[0].title)).toBeTruthy();
    expect(getByText(buttons[1].title)).toBeTruthy();
  });

  it('calls handlePress when button is pressed', () => {
    const {getByText} = render(<Footer buttons={buttons} />);
    const button1 = getByText(buttons[0].title);
    const button2 = getByText(buttons[1].title);

    fireEvent.press(button1);
    fireEvent.press(button2);

    expect(buttons[0].handlePress).toHaveBeenCalledTimes(1);
    expect(buttons[1].handlePress).toHaveBeenCalledTimes(1);
  });
});

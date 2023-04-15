import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Home } from '../src/common';

describe('Home screen', (navigation: any) => {
  test('should fetch data when activeFilter changes', async () => {
    const mockProductData = [
      { id: 1, name: 'Product 1', points: 10, is_redemption: true },
      { id: 2, name: 'Product 2', points: 5, is_redemption: false },
    ];
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProductData),
      })
    );

    const { getByText } = render(<Home navigation={navigation} />);
    expect(fetch).toHaveBeenCalledTimes(1);

    const redeemedButton = getByText('Canjeados');
    fireEvent.press(redeemedButton);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));
  });
});
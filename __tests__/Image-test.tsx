import React from 'react';
import {render} from '@testing-library/react-native';
import { Image } from '../src/common/components';

describe('Image component', () => {
  const imageSource = {
    uri: 'https://www.example.com/image.jpg',
  };
  const imageStyles = {width: 200, height: 200};

  it('renders correctly', () => {
    const {getByTestId} = render(
      <Image imageStyles={imageStyles} url={imageSource} />,
    );

    expect(getByTestId('image')).toBeTruthy();
  });
});

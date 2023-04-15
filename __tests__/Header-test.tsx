import React from 'react';
import {render} from '@testing-library/react-native';
import { Header } from '../src/common/components';

describe('Header', () => {
  const props = {
    title: 'Header Title',
    headerStyles: {},
    titleStyles: {},
    fontSize: 18,
  };

  it('renders correctly', () => {
    const {getByText} = render(<Header {...props} />);
    expect(getByText(props.title)).toBeTruthy();
  });
});

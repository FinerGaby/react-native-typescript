import React from 'react';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';
import {Paper} from '../src/common/components';

describe('Paper', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <Paper stylePaper={{padding: 10}}>
        <Text>Test content</Text>
      </Paper>,
    );
    expect(getByText('Test content')).toBeTruthy();
  });
});

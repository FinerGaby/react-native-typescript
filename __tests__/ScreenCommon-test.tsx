import React from 'react';
import {View} from 'react-native';
import {render} from '@testing-library/react-native';
import {ScreenCommon} from '../src/common/components';

describe('ScreenCommon', () => {
  const testTitle = 'Test title';
  const testChild = <></>;
  const testButtons = [{title: 'Button 1', handlePress: jest.fn()}];

  it('renders a custom title if provided', () => {
    const {getByText} = render(
      <ScreenCommon children={testChild} title={testTitle} />,
    );
    expect(getByText(testTitle)).toBeDefined();
  });

  it('renders buttons in footer without crashing', () => {
    const {getByText} = render(
      <ScreenCommon children={testChild} buttons={testButtons} />,
    );
    expect(getByText(testButtons[0].title)).toBeDefined();
  });
});

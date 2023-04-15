import React from 'react';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';
import {List} from '../src/common/components/List/List';

describe('List', () => {
  const mockData = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'},
  ];

  it('should render a list of items correctly', () => {
    const renderItem = jest.fn();
    render(<List items={mockData} children={renderItem} />);

    expect(renderItem).toHaveBeenCalledTimes(3);
  });

  it('should render each item with correct props', () => {
    const renderItem = jest.fn(({name}) => <Text>{name}</Text>);
    const {getByText} = render(<List items={mockData} children={renderItem} />);

    expect(getByText('Item 1')).toBeDefined();
    expect(getByText('Item 2')).toBeDefined();
    expect(getByText('Item 3')).toBeDefined();
  });
});

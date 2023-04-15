import React from 'react';
import {View, VirtualizedList} from 'react-native';

interface ListProps<ItemType> {
  items: ItemType[];
  children: (item: ItemType) => JSX.Element;
}

export const List = <ItemType,>({items, children}: ListProps<ItemType>) => {
  const getItemCount = () => items?.length;
  return (
    <VirtualizedList
      data={items}
      getItemCount={getItemCount}
      getItem={(data, index) => data[index]}
      renderItem={({item}: {item: ItemType}) => (
        <View style={{marginBottom: 7}}>{children(item)}</View>
      )}
    />
  );
};

import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import {Title} from '../Title';

export interface HeaderProps {
  title?: string;
  headerStyles: StyleProp<ViewStyle>;
  titleStyles: StyleProp<ViewStyle>;
  fontSize: number;
}

export const Header = ({
  title,
  headerStyles,
  titleStyles,
  fontSize,
  ...restProps
}: HeaderProps) => {
  return (
    <View style={headerStyles}>
      <Title
        title={title}
        styles={titleStyles}
        fontSize={fontSize}
        {...restProps}
      />
    </View>
  );
};

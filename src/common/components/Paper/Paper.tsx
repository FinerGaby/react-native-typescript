import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

export interface PaperProps {
  children: React.ReactNode;
  stylePaper: StyleProp<ViewStyle>;
}

export const Paper = ({children, stylePaper, ...restProps}: PaperProps) => {
  return (
    <View style={stylePaper} {...restProps}>
      {children}
    </View>
  );
};

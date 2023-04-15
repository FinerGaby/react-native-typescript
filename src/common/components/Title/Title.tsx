import React from 'react';
import {Text, StyleProp, TextStyle, StyleSheet} from 'react-native';
import {stylesTitle} from '../../../theme/styles/common/Title';

export interface TitleProps {
  title?: string;
  styles?: StyleProp<TextStyle>;
  isUppercase?: boolean;
  isBold?: boolean;
  color?: string;
  fontSize?: number;
}

export const Title = ({
  title,
  styles: textStyles,
  isUppercase = false,
  isBold = false,
  fontSize = 14,
  color = '#020202',
}: TitleProps) => {
  const {text} = stylesTitle(isUppercase, isBold, color, fontSize);
  return <Text style={[text, textStyles]}>{title}</Text>;
};

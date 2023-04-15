import React from 'react';
import {StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import {Title} from '../Title';
import {stylesButton} from '../../../theme/styles/common/Button';

export interface ButtonProps {
  handlePress: () => void;
  title: string;
  buttonStyles?: StyleProp<ViewStyle>;
  titleStyles?: StyleProp<ViewStyle>;
  width?: any;
  fontSize?: number;
  backgroundColor?: string;
}

export const Button = ({
  handlePress,
  title,
  buttonStyles,
  backgroundColor = '#334FFA',
  width = '95%',
  fontSize = 16,
  titleStyles,
}: ButtonProps) => {
  const {button} = stylesButton(width, backgroundColor);
  return (
    <TouchableOpacity
      testID="button"
      onPress={handlePress}
      style={[button, buttonStyles]}>
      <Title
        title={title}
        color="#ffffff"
        fontSize={fontSize}
        isBold
        styles={titleStyles}
      />
    </TouchableOpacity>
  );
};

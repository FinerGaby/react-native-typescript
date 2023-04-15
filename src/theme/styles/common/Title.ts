import {StyleSheet} from 'react-native';

export const stylesTitle = (
  isUppercase: boolean,
  isBold: boolean,
  color: string,
  fontSize: number,
) =>
  StyleSheet.create({
    text: {
      color,
      fontWeight: isBold ? 'bold' : 'normal',
      textTransform: isUppercase ? 'uppercase' : 'none',
      fontSize,
      fontFamily: 'Avenir Regular'
    },
  });

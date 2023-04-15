import {StyleSheet} from 'react-native';

export const stylesButton = (width?: any, backgroundColor?: string) =>
  StyleSheet.create({
    button: {
      backgroundColor,
      borderRadius: 10,
      width,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
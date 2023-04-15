import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import {Button, ButtonProps} from '../Button';

interface Props {
  buttons: ButtonProps[];
}

export const Footer: React.FC<Props> = ({buttons}) => {
  return (
    <View
      testID="footer"
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      {buttons?.map((button, index) => (
        <Button
          key={index}
          title={button.title}
          handlePress={button.handlePress}
          buttonStyles={button.buttonStyles}
          titleStyles={button.titleStyles}
          width={button.width}
          fontSize={button.fontSize}
          backgroundColor={button.backgroundColor}
        />
      ))}
    </View>
  );
};

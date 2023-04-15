import React from 'react';
import {View, StyleProp, ViewStyle, ScrollView} from 'react-native';
import {Header} from '../Header';
import {Footer} from '../Footer';
import {ButtonProps} from '../Button';
import {stylesScreenCommon as styles} from '../../../theme/styles/common/ScreenCommon';

export interface ScreenCommon {
  header?: boolean;
  footer?: boolean;
  children: React.ReactNode;
  headerCustom?: React.ReactNode;
  title?: string;
  headerStyles?: StyleProp<ViewStyle>;
  titleStyles?: StyleProp<ViewStyle>;
  buttons?: ButtonProps[];
  fontSize?: number;
  noPadding?: boolean;
}

export const ScreenCommon = ({
  header,
  footer,
  children,
  headerCustom,
  title,
  headerStyles,
  buttons = [],
  noPadding = false,
  titleStyles,
  fontSize = 24,
}: ScreenCommon) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            ...styles.header,
            padding: noPadding ? 0 : 20,
          }}>
          {!header && headerCustom ? (
            headerCustom
          ) : (
            <Header
              title={title}
              headerStyles={headerStyles}
              titleStyles={titleStyles}
              fontSize={fontSize}
            />
          )}
        </View>
        <View style={styles.layout}>{children}</View>
      </ScrollView>
      {!footer && (
        <View style={styles.footer}>
          <Footer buttons={buttons} />
        </View>
      )}
    </View>
  );
};

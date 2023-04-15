import React from 'react';
import {View} from 'react-native';
import {HomeStyles as styles} from '../../../../../theme/styles/screen/HomeStyles';
import {Paper, Title} from '../../../../components';

export const SectionPoint = ({totalPoint}: {totalPoint: number}) => {
  return (
    <View>
      <Title title="TUS PUNTOS" isUppercase color="#9B9898" isBold />
      <View style={styles.seccionPoint}>
        <Paper stylePaper={styles.boxPoint}>
          <Title title="Diciembre" color="#ffffff" isBold fontSize={16} />
          <View style={styles.viewPoint}>
            <Title
              title={`${totalPoint.toFixed(2)} pts`}
              color="#ffffff"
              isBold
              fontSize={32}
              styles={styles.textPoint}
            />
          </View>
        </Paper>
      </View>
    </View>
  );
};

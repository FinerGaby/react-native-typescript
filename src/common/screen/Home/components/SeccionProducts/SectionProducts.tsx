import React from 'react';
import {View} from 'react-native';
import {HomeStyles as styles} from '../../../../../theme/styles/screen/HomeStyles';
import {Paper, Title} from '../../../../components';
import {List} from '../../../../components/List/List';
import {ListProducts} from '../../../../components/List/components';
import {Product} from '../../Home';

export const SeccionProducts = ({dataProduct}: {dataProduct: Product[]}) => {
  return (
    <View style={styles.movement}>
      <Title title="TUS MOVIMIENTOS" isUppercase color="#9B9898" isBold />
      <View style={styles.movementView}>
        <Paper stylePaper={styles.boxMovement}>
          <List items={dataProduct}>
            {props => <ListProducts {...props} />}
          </List>
        </Paper>
      </View>
    </View>
  );
};

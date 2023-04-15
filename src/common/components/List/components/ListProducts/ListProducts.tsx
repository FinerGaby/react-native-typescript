import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Image} from '../../../Image';
import {Title} from '../../../Title';
import {formatDate} from '../../../../../helpers';
import {IconLineList} from '../../../../../../assets';
import {stylesListProducts as styles} from '../../../../../theme/styles/common/ListProducts';

export interface Product {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
  handlePress: () => void;
}

export const ListProducts = (props: Product) => {
  const points = props.is_redemption ? `${props.points}` : `${props.points}`;

  return (
    <View style={styles.container}>
      <Image
        imageStyles={styles.imagesStyles}
        url={{
          uri: props.image,
        }}
      />
      <View style={styles.details}>
        <Title title={props.product} isBold />
        <Title title={formatDate(props.createdAt)} fontSize={12} />
      </View>
      <View style={styles.sum}>
        <Title
          title={props.is_redemption ? '+' : '-'}
          color={props.is_redemption ? '#00B833' : '#FF0000'}
          isBold
          styles={styles.title}
        />
        <Title title={points} isBold />
        <TouchableOpacity onPress={props.handlePress}>
          <IconLineList />
        </TouchableOpacity>
      </View>
    </View>
  );
};

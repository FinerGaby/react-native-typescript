import React from 'react';
import {View} from 'react-native';
import {ButtonProps, Image, ScreenCommon, Title} from '../../components';
import {formatDate} from '../../../helpers';
import {ProductStyles as styles} from '../../../theme/styles/screen';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {ProductTypes} from '../../types';

type RootStackParamList = {
  Product: {item: ProductTypes};
};

type ProductScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Product'
>;
type ProductScreenRouteProp = RouteProp<RootStackParamList, 'Product'>;

type ProductProps = {
  navigation: ProductScreenNavigationProp;
  route: ProductScreenRouteProp;
};

export const Product = ({navigation, route}: ProductProps) => {
  const {params} = route;
  const {image, product, createdAt, points} = params?.item;
  const date = formatDate(createdAt);
  const buttons: ButtonProps[] = [
    {
      handlePress: () => navigation.goBack(),
      title: 'Aceptar',
      fontSize: 16,
    },
  ];

  return (
    <ScreenCommon
      title={product}
      fontSize={24}
      buttons={buttons}
      noPadding
      titleStyles={styles.titleStyles}
      headerStyles={{
        height: 150,
        backgroundColor: '#CFD6FF',
        justifyContent: 'flex-end',
      }}>
      <Image imageStyles={styles.imageStyles} url={{uri: image}} />
      <View style={styles.detailsProduct}>
        <Title
          title="Detalles del producto:"
          fontSize={14}
          color="#9B9898"
          isBold
          styles={styles.textStyle}
        />
        <Title title={`Comprado el ${date}`} fontSize={16} isBold />
      </View>
      <Title
        title="Con esta compra acumulaste:"
        fontSize={14}
        color="#9B9898"
        isBold
      />
      <Title
        title={`${points} puntos`}
        fontSize={24}
        isBold
        styles={styles.textPoint}
      />
    </ScreenCommon>
  );
};

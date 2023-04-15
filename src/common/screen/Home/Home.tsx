import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {ButtonProps, ScreenCommon} from '../../components';
import {WelcomeHome} from './components/WelcomeHome/WelcomeHome';
import {SectionPoint} from './components/SectionPoint';
import {SeccionProducts} from './components/SeccionProducts/SectionProducts';
import {ProductTypes} from '../../types';
import { API_URL } from '../../../../config';
type RootStackParamList = {
  Home: undefined;
  Product: {item: ProductTypes};
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

export const Home = ({navigation}: HomeProps) => {
  const [product, setProduct] = useState<ProductTypes[]>([]);
  const [activeFilter, setActiveFilter] = useState<{
    status: boolean;
    params: string;
  }>({
    status: false,
    params: 'false',
  });

  const fetchData = useCallback(async () => {
    const url = new URL(API_URL);
    if (activeFilter.status) {
      url.searchParams.append('is_redemption', activeFilter.params);
    }
    url.searchParams.append('completed', 'false');
    url.searchParams.append('page', '1');
    url.searchParams.append('limit', '5');

    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {'content-type': 'application/json'},
      });
      if (response.ok) {
        const tasksData = await response.json();
        setProduct(tasksData);
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error(error);
    }
  }, [activeFilter]);

  useEffect(() => {
    fetchData();
  }, [activeFilter]);

  const calculatePoint = useCallback(() => {
    return product.reduce((acc, item) => {
      if (item.is_redemption) {
        return acc + item.points;
      } else {
        return acc - item.points;
      }
    }, 0);
  }, [product]);

  const buttons: ButtonProps[] = activeFilter.status
    ? [
        {
          handlePress: () => setActiveFilter({status: false, params: 'false'}),
          title: 'Todos',
        },
      ]
    : [
        {
          handlePress: () => setActiveFilter({status: true, params: 'true'}),
          title: 'Ganados',
          width: 170,
          fontSize: 12,
          buttonStyles: {marginRight: 10},
        },
        {
          handlePress: () => setActiveFilter({status: true, params: 'false'}),
          title: 'Canjeados',
          fontSize: 12,
          width: 170,
        },
      ];

  const dataProduct = useMemo(
    () =>
      product.map(item => ({
        ...item,
        handlePress: () => navigation.push('Product', {item}),
      })),
    [product, navigation],
  );

  const totalPoint = calculatePoint();

  return (
    <ScreenCommon buttons={buttons} headerCustom={<WelcomeHome />}>
      <SectionPoint totalPoint={totalPoint} />
      <SeccionProducts dataProduct={dataProduct} />
    </ScreenCommon>
  );
};

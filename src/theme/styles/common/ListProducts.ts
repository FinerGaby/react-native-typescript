import {StyleSheet} from 'react-native';

export const stylesListProducts = StyleSheet.create({
   container: {flexDirection: 'row', alignItems: 'center'},
   imagesStyles: {width: 50, height: 50, borderRadius: 10},
   details: {
    marginLeft: 10,
    flexDirection: 'column',
    height: 40,
    justifyContent: 'space-between',
    flex: 1,
  },
  sum: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '25%',
  },
  title: {left: 5},
});

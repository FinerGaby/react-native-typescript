import {StyleSheet} from 'react-native';

export const stylesScreenCommon = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column'},
  header: {
    flex: 0,
    marginBottom: 20,
  },
  layout: {
    flex: 1,
    paddingHorizontal: 20,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
  },
});

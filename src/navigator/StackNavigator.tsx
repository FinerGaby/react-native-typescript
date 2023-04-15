import {ComponentType} from 'react';
import {Home, Product} from '../common/screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

type IRoutes = {
  name: string;
  component: ComponentType;
};

const routes: IRoutes[] = [
  {name: 'Home', component: Home},
  {name: 'Product', component: Product},
];

export const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    {routes.map((route, index) => (
      <Stack.Screen
        key={index}
        name={route.name}
        component={route.component}
        options={{headerShown: false}}
      />
    ))}
  </Stack.Navigator>
);

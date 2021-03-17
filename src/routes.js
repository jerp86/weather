import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import Home from './pages/Home';
import Search from './pages/Search';

const Drawer = createDrawerNavigator();

const Routes = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Meu Local',
        drawerIcon: () => <Feather name="map-pin" size={16} />,
      }}
    />

    <Drawer.Screen
      name="Search"
      component={Search}
      options={{
        title: 'Procurar',
        drawerIcon: () => <Feather name="search" size={16} />
      }}
    />
  </Drawer.Navigator>
);

export default Routes;

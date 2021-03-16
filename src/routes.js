import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Search from './pages/Search';

const Drawer = createDrawerNavigator();

const Routes = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Meu Local'
      }}
    />

    <Drawer.Screen
      name="Search"
      component={Search}
      options={{
        title: 'Procurar'
      }}
    />
  </Drawer.Navigator>
);

export default Routes;

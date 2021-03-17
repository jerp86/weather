import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={navigation.openDrawer}>
      <Feather name="menu" size={36} color="#373737" />
    </TouchableOpacity>
  );
}

export default Menu;
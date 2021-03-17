import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

const Menu = () => {
  return (
    <LinearGradient style={styles.header} colors={['#1ED6FF', '#97C1FF']}>
      <Text style={styles.date}>16/03/2021</Text>
      <Text style={styles.city}>Botucatu</Text>

      <Ionicons name="cloud" color="#FFF" size={150} />

      <Text style={styles.temp}>30°</Text>
    </LinearGradient>
  );
}

export default Menu;
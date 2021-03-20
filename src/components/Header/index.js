import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

const Menu = ({ background, icon, weather }) => {
  return (
    <LinearGradient style={styles.header} colors={background}>
      <Text style={styles.date}>{weather.date}</Text>
      <Text style={styles.city}>{weather.city}</Text>

      <Ionicons name={icon.name} color={icon.color} size={150} />

      <Text style={styles.temp}>{weather.temp}°</Text>
    </LinearGradient>
  );
}

export default Menu;
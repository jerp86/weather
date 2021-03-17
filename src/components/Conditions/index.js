import React from 'react';
import { View, Text } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';

const Conditions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.condition}>
        <Feather name="wind" size={23} color="#1Ed6FF" />
        <Text>7 mk/h</Text>
      </View>

      <View style={styles.condition}>
        <MaterialCommunityIcons name="weather-sunset-up" size={23} color="#1Ed6FF" />
        <Text>5h22</Text>
      </View>

      <View style={styles.condition}>
        <MaterialCommunityIcons name="weather-sunset-down" size={23} color="#1Ed6FF" />
        <Text>18h00</Text>
      </View>

      <View style={styles.condition}>
        <Feather name="droplet" size={23} color="#1Ed6FF" />
        <Text>65</Text>
      </View>
    </View>
  );
}

export default Conditions;
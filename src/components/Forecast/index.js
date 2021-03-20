import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { condition } from './../../utils/condition';

import { styles } from './styles';

const Forecast = ({ data }) => {
  const { name, color } = condition(data.condition);

  return (
    <View style={styles.container}>
      <View style={styles.temp}>
        <Text style={styles.date}>{data.date}</Text>
        <Text style={styles.date}>{data.weekday}</Text>
      </View>

      <Ionicons name={name} color={color} size={25} />

      <View style={styles.temp}>
        <Text>{data.min}°</Text>
        <Text
          style={{ fontSize: 18, fontWeight: 'bold'}}
        >
          {data.max}°
        </Text>
      </View>
    </View>
  );
}

export default Forecast;
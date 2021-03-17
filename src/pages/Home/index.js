import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';

import { styles } from './styles';
import Forecast from '../../components/Forecast';

const myList = [
  {
    "date": "16/03",
    "weekday": "Ter",
    "max": 29,
    "min": 18,
    "description": "Parcialmente nublado",
    "condition": "cloudly_day"
  },
  {
    "date": "17/03",
    "weekday": "Qua",
    "max": 28,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "18/03",
    "weekday": "Qui",
    "max": 27,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "19/03",
    "weekday": "Sex",
    "max": 28,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "20/03",
    "weekday": "Sáb",
    "max": 28,
    "min": 18,
    "description": "Tempestades isoladas",
    "condition": "storm"
  },
  {
    "date": "21/03",
    "weekday": "Dom",
    "max": 28,
    "min": 18,
    "description": "Parcialmente nublado",
    "condition": "cloudly_day"
  },
  {
    "date": "22/03",
    "weekday": "Seg",
    "max": 29,
    "min": 20,
    "description": "Parcialmente nublado",
    "condition": "cloudly_day"
  },
  {
    "date": "23/03",
    "weekday": "Ter",
    "max": 26,
    "min": 20,
    "description": "Tempestades isoladas",
    "condition": "storm"
  },
  {
    "date": "24/03",
    "weekday": "Qua",
    "max": 25,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "25/03",
    "weekday": "Qui",
    "max": 26,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  }
];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header />
      <Conditions />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: '5%' }}
        style={styles.list}
        data={myList}
        keyExtractor={item => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />
    </SafeAreaView>
  );
}

export default Home;
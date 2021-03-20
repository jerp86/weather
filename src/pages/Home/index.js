import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import * as Location from 'expo-location';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';
import api, { KEY } from '../../services/api';
import { condition } from '../../utils/condition';

import { styles } from './styles';

const Home = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState({ name: 'cloud', color: '#FFF' });
  const [background, setBackground] = useState(['#1ED6FF', '#97C1FF']);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();
      
      if (status !== 'granted') {
        setErrorMsg(
          'Eita...\nPermissão negada para acessar a localização\n\nVocê deverá permitir o acesso à sua localização para continuarmos'
          );
        setLoading(false);
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});
      const response = await api.get(`/weather?key=${KEY}&lat=${coords.latitude}&lon=${coords.longitude}`);

      setWeather(response.data.results);

      if (response.data.results.currently === 'noite') {
        setBackground(['#0F2F61', '#1ED6FF']);;
      }

      const conditionIcon = condition(response.data.results.condition_slug);
      setIcon(conditionIcon);

      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {errorMsg && (
        <View style={styles.container}>
          <Text style={styles.error}>{errorMsg}</Text>
        </View>
      )}

      {!errorMsg && (
        <>
          <Menu />
          <Header background={background} icon={icon} weather={weather} />
          <Conditions weather={weather} />

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: '5%' }}
            style={styles.list}
            data={weather.forecast}
            keyExtractor={item => item.date}
            renderItem={({ item }) => <Forecast data={item} />}
          />
        </>
      )}
    </SafeAreaView>
  );
}

export default Home;
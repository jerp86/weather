import React, { useState, useCallback } from 'react';
import { SafeAreaView, TouchableOpacity, Text, View, TextInput, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import Conditions from '../../components/Conditions';
import api, { KEY } from '../../services/api';

import { styles } from './styles';

const Search = () => {
  const [input, setInput] = useState('');
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  const { navigate } = useNavigation();

  const handleSearch = useCallback(async () => {
    const response = await api.get(`/weather?key=${KEY}&city_name=${input}`);

    if (response.data.by === 'default') {
      setError('Humm, cidade não encontrada!');
      setInput('');
      setCity(null);
      Keyboard.dismiss();
      return;
    }

    setError(null);
    setCity(response.data.results);
    setInput('');
    Keyboard.dismiss();
  }, [input]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigate('Home')}
      >
        <Feather name="chevron-left" size={32} color="#000" />

        <Text style={{ fontSize: 22 }}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.searchBox}>
        <TextInput
          value={input}
          onChangeText={value => setInput(value)}
          placeholder="Ex: Botucatu, SP"
          style={styles.input}
          returnKeyType="search"
        />

        <TouchableOpacity
          style={styles.icon}
          onPress={handleSearch}
        >
          <Feather name="search" size={22} color="#FFF" />
        </TouchableOpacity>
      </View>

      {error && <Text style={styles.error}>{error}</Text>}

      {!error && city && (
        <LinearGradient style={styles.header} colors={['#1ED6FF', '#97C1FF']}>
          <Text style={styles.date}>{city.date}</Text>
          <Text style={styles.city}>{city.city}</Text>

          <View>
            <Text style={styles.temp}>{city.temp}°</Text>
          </View>

          <Conditions weather={city} />
        </LinearGradient>
      )}
    </SafeAreaView>
  );
}

export default Search;
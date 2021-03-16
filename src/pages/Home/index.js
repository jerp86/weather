import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import { styles } from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Bem vindo ao app Weather Forecast</Text>
    </SafeAreaView>
  );
}

export default Home;
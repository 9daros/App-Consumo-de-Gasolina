import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ResultScreen = ({ route, navigation }) => {
  const { kmPorLitro } = route.params;

  const getClassificacao = (kmPorLitro) => {
    if (kmPorLitro > 12) return 'A';
    if (kmPorLitro > 10) return 'B';
    if (kmPorLitro > 8) return 'C';
    if (kmPorLitro > 4) return 'D';
    return 'E';
  };

  const classificacao = getClassificacao(kmPorLitro);

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Média de Consumo: {kmPorLitro.toFixed(2)} Km/L</Text>
      <Text style={styles.resultText}>Classificação: {classificacao}</Text>
      <Button title="Calcular Novamente" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  resultText: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default ResultScreen;

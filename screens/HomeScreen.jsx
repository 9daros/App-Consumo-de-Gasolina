import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [quilometragem, setQuilometragem] = useState('');
  const [litros, setLitros] = useState('');

  const handleCalcular = () => {
    const kmPorLitro = parseFloat(quilometragem) / parseFloat(litros);
    navigation.navigate('Result', { kmPorLitro });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Quilometragem (KM):</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={quilometragem}
        onChangeText={setQuilometragem}
      />
      <Text style={styles.label}>Litros de Gasolina:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={litros}
        onChangeText={setLitros}
      />
      <Button title="Calcular" onPress={handleCalcular} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
});

export default HomeScreen;

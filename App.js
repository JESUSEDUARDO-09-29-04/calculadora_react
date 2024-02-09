import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonPress = (button) => {
    
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={input} editable={false} />
      <View style={styles.buttonsContainer}>
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'].map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, button === 'C' && { backgroundColor: '#ff0000' }]}
            onPress={() => handleButtonPress(button)}
          >
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 100,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 20,
    fontSize: 24,
    textAlign: 'right',
    paddingRight: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '23%',
    height: 120,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Calculator;
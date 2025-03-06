import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Config from 'react-native-config';

const App = ({  }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React Native</Text>
      <Text style={styles.title}> Hello {Config.NODE_ENV}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
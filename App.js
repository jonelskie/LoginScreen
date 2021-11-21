import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inner}>
          <Text>Username: </Text>
          <TextInput 
            placeholder="e.g. John"
            style={styles.input}
            textContentType="username"
          />
        </View>

        <View style={styles.inner}>
          <Text>Password: </Text>
          <TextInput 
            placeholder="e.g. 1234"
            secureTextEntry={true}
            style={styles.input}
            textContentType="password"
          />
        </View>

      <View style={styles.btnContainer}>
      <Button title="submit"/>

      </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: '30%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#777',
    borderBottomWidth: 1,
    height: 40,
    width: '70%',
    margin: 10,
    padding: 10
  },
  inputContainer: {
    width: '80%',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'baseline',
  }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* eslint-disable import/no-unresolved */

import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, AsyncStorage
} from 'react-native';
import { checkPermission } from './src/components/notifications/notifications';
import { background } from 'shared';

export default function App() {
  const [count, setCount] = useState(0);
  showAlert = (title, body) => {
    Alert.alert(
      title, body,
      [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  }
  // Similar to componentDidMount:
  useEffect(() => {
    // Update the document title using the browser API
    setCount(count + 1);
    checkPermission();
  }, []);
  return (
    <View style={[background, styles.container]}>
      <Text style={styles.welcome}>
        You clicked
        {count}
        times
      </Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}><Text>Click me</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

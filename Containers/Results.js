import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Results extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>RESULTS FROM COMPONENT</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 32,
    width: '100%',
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 48,
    textAlign: 'center',
  },
});
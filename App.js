import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Logo from './Containers/Logo';
import Heading from './Containers/Heading';
import Choices from './Containers/Choices';
import Settings from './Containers/Settings';
import Results from './Containers/Results';

export default class App extends React.Component {
  render() {
    return (
    
      <View style={styles.container}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.heading}>
          <Heading />
        </View>
        <View style={styles.choices}>
          <Choices />
        </View>
        <View style={styles.settings}>
          <Settings />
        </View>
        <View style={styles.results}>
          <Results />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 2,
    backgroundColor: '#eee',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    flex: 1,
    backgroundColor: '#ddd',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  choices: {
    flex: 2,
    backgroundColor: '#ccc',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settings: {
    flex: 6,
    backgroundColor: '#bbb',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  results: {
    flex: 6,
    backgroundColor: '#aaa',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

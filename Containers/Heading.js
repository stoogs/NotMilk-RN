import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Heading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
         {this.props.chosen}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 32,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titleText: {
    fontSize: 42,
    textAlign: 'center',
  },
});
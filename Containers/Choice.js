import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';


export default class Choice extends React.Component {
  render() {
    return (
      <View style={styles.container} > 
       
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 80,
    width: 40,
    resizeMode: 'contain'
  }
});
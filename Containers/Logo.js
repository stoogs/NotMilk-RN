import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container} > 
          <Image 
          style={styles.image}
          source={require("../assets/Logo/notmilklogo.png")} 
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 32,
    width: '100%',
    marginTop: 30,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 110,
    resizeMode: 'contain'
  }
});
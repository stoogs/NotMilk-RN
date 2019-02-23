import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';


export default class Choice extends React.Component {
  render() {
    return (
      <View style={styles.container} > 
        <Image style={styles.image}
        source={require("../assets/png//WithoutShells/pecan.png")} />
        <Image style={styles.image}
        source={require("../assets/png//WithoutShells/almond.png")} />
        <Image style={styles.image}
        source={require("../assets/png//WithoutShells/cashew.png")} />
        <Image style={styles.image}
        source={require("../assets/png//WithoutShells/pistachio.png")} />
        <Image style={styles.image}
        source={require("../assets/png//WithoutShells/macadamia.png")} />
        <Image style={styles.image}
        source={require("../assets/png//WithoutShells/hazelnut.png")} />
        <Image style={styles.image}
        source={require("../assets/png//WithoutShells/brazil.png")} />
        <Image style={styles.image}
        source={require("../assets/png//WithoutShells/walnut.png")} />
        <Image style={styles.image}
        source={require("../assets/png//WithoutShells/coconut.png")} />
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 80,
    width: 40,
    resizeMode: 'contain'
  }
});
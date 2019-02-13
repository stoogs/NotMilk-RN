import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
      <View>
        <Text>LOGO</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fbfbf2',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 64,
    },
});
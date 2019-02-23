import React from 'react';
import {StyleSheet, Text, View, Slider} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 4,
    };
  }

  change(value) {
    this.setState(() => {
      return {
        
      };
    });
  }

  render() {
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>CPS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 20,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
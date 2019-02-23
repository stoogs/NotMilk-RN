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
        value: parseFloat(value),
      };
    });
  }

  render() {
    const {value} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{String(value)}</Text>
        <Slider
          step={1}
          minimumValue={1}
          maximumValue={8}
          onValueChange={this.change.bind(this)}
          value={value}
        />
        <Text style={styles.text}> Info </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 20,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Logo from './Logo';
import Heading from './Components/Heading';

export default class App extends React.Component {
constructor() {
  super();
  this.state = {
    nutChoice: 'Choose Nut',
  };
}

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.logo}><Text>Logo</Text></View>
        <View style={styles.heading}>
          <Heading title={this.state.nutChoice} />
        </View>
      <View style={styles.nutchoice}>
        <Button 
          title="Pecan"
          onPress={() => this.setState({ nutChoice: 'Pecan'})}
        /> 
        <Button 
          title="Almond"
          onPress={() => this.setState({ nutChoice: 'Almond'})}
        /> 
         <Button 
          title="Cashew"
          onPress={() => this.setState({ nutChoice: 'Cashew'})}
        /> 
         <Button 
          title="Pistachio"
          onPress={() => this.setState({ nutChoice: 'Pistachio'})}
        /> 
      </View>
      <View style={styles.settings}><Text>Settings Here</Text></View>
      <View style={styles.results}><Text>Results Here</Text></View>
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
    flex: 3,
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
  nutchoice: {
    flex: 2,
    flexDirection: 'row',
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

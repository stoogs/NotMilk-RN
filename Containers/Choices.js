import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Choices extends React.Component {
  constructor() {
    super();
    this.state = {
      nutChoice: 'Choose Nut',
    };
  }
  render() {
    return (
      
      <View style={styles.container}>
        <Button 
          title="Pecan"
          onPress={() => this.setState({ nutChoice: 'Pecan' + ' Milk'})}
        /> 
        <Button 
          title="Almond"
          onPress={() => this.setState({ nutChoice: 'Almond' + ' Milk'})}
        /> 
         <Button 
          title="Cashew"
          onPress={() => this.setState({ nutChoice: 'Cashew' + ' Milk'})}
        /> 
         <Button 
          title="Pistachio"
          onPress={() => this.setState({ nutChoice: 'Pistachio' + ' Milk'})}
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ccc',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    },
  });



// <Button 
//           title="Pecan"
//           onPress={() => this.setState({ nutChoice: 'Pecan' + ' Milk'})}
//         /> 
//         <Button 
//           title="Almond"
//           onPress={() => this.setState({ nutChoice: 'Almond' + ' Milk'})}
//         /> 
//          <Button 
//           title="Cashew"
//           onPress={() => this.setState({ nutChoice: 'Cashew' + ' Milk'})}
//         /> 
//          <Button 
//           title="Pistachio"
//           onPress={() => this.setState({ nutChoice: 'Pistachio' + ' Milk'})}
//         /> 
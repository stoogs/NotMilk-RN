import React from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Logo from './Containers/Logo';
import Heading from './Containers/Heading';
import Choice from './Containers/Choice';
import Settings from './Containers/Settings';
import Results from './Containers/Results';
import Slider from './Components/Slider';
import CPS from './Components/CPS';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nutNames: ['Pecan','Almond','Cashew','Pistachio','Macadamia Nut','Hazelnut','Brazil Nut', 'Walnut', 'Coconut'],
      nutCostPer100g: [1.49, 0.92, 0.86, 0.80, 10, 1,49, 1,10, 1.40, 0.85],
      nutIndividualCalories: [20, 7, 16, 3, 19, 9, 32, 26, 1049],
      nut100gCalories: [690, 622, 584, 560, 718, 655, 687, 654, 353],
      nutIndividualWeight: [3, 1.2 ,3 ,0.7 ,2.8,  1.4 , 5 , 4, 300],
      nutGramsRequiredPerLitre: [125, 140, 150, 100, 134, 150, 133, 130, 80],
      chosen: "Almond", //Default
      servings: 4,
      consistency: 1,
      additionsNames: ["Dates","Honey","Vanilla","Cinammon","Cardamon"],
      additionsCalories: 0,
      option0: false,   //date
      option1: false,   //vanilla
      option2: false,   //honey
      option3: false,   //cinammon
      option4: false,   //cardamon
    }
  }

  chooseNut = (chosen) => { this.setState({ chosen: chosen }) }


render () {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Logo />
        </View>

        <View style={styles.heading}>
          <Heading chosen={this.state.chosen}/>
        </View>
        
        <View style={styles.choice}>
          <TouchableHighlight onPress={this.chooseNut.bind(this, this.state.nutNames[0])}>
            <Image style={styles.nutImage} source={require("./assets/png//WithoutShells/pecan.png")} />
          </TouchableHighlight>  
          <TouchableHighlight onPress={this.chooseNut.bind(this, this.state.nutNames[1])}>
            <Image style={styles.nutImage} source={require("./assets/png//WithoutShells/almond.png")} />
          </TouchableHighlight>   
          <TouchableHighlight onPress={this.chooseNut.bind(this, this.state.nutNames[2])}>  
            <Image style={styles.nutImage} source={require("./assets/png//WithoutShells/cashew.png")} />
          </TouchableHighlight>   
          <TouchableHighlight onPress={this.chooseNut.bind(this, this.state.nutNames[3])}>
            <Image style={styles.nutImage} source={require("./assets/png//WithoutShells/pistachio.png")} />
          </TouchableHighlight>   
          <TouchableHighlight onPress={this.chooseNut.bind(this, this.state.nutNames[4])}>
            <Image style={styles.nutImage} source={require("./assets/png//WithoutShells/macadamia.png")} />
          </TouchableHighlight>   
          <TouchableHighlight onPress={this.chooseNut.bind(this, this.state.nutNames[5])}>  
            <Image style={styles.nutImage} source={require("./assets/png//WithoutShells/hazelnut.png")} />
          </TouchableHighlight>   
          <TouchableHighlight onPress={this.chooseNut.bind(this, this.state.nutNames[6])}>  
          <Image style={styles.nutImage} source={require("./assets/png//WithoutShells/brazil.png")} />
          </TouchableHighlight>   
          <TouchableHighlight onPress={this.chooseNut.bind(this, this.state.nutNames[7])}>  
          <Image style={styles.nutImage} source={require("./assets/png//WithoutShells/walnut.png")} />
          </TouchableHighlight>  
          <TouchableHighlight onPress={this.chooseNut.bind(this, this.state.nutNames[8])}>  
          <Image style={styles.nutImage} source={require("./assets/png//WithoutShells/coconut.png")} />
          </TouchableHighlight>  
        </View>
        
        <View style={styles.settings}>
          <CPS />
          <Slider />
          <Slider />
          
        </View>
        <View style={styles.results}>
          <Results choice={this.state.chosen} servings={this.state.servings} consistency={this.state.consistency}></Results>
        </View>
      </View>
    )}
}
    
const styles = StyleSheet.create({
  container: {
    flex: 18,
    backgroundColor: '#FBFBF2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 3,
    backgroundColor: '#FBFBF2',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    flex: 1,
    backgroundColor: '#FBFBF2',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  choice: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#FBFBF2',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nutImage: {
    height: 80,
    width: 40,
    resizeMode: 'contain'
  },
  settings: {
    flex: 6,
    flexDirection: 'row',
    backgroundColor: '#bbb',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cps: {
    flexDirection: 'column',
  },
  results: {
    flex: 6,
    backgroundColor: '#aaa',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Logo from './Containers/Logo';

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
      
      <Logo />
      
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
  // settings: {
  //   flex: 6,
  //   backgroundColor: '#bbb',
  //   width: '100%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // results: {
  //   flex: 6,
  //   backgroundColor: '#aaa',
  //   width: '100%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});


// Props - header to NutChoice.
// NutChoice
// import React from 'react';
// import { StyleSheet, View, Text, Button } from 'react-native';
// import NutMilkChoice from './Components/NutMilkChoice';


// export default class NutChoice extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//           nutChoice: "Choose A Nut"
//         };
//     }

//     render() {
//         return (
//           <View >
//             <View style={styles.nutchoice}>
//               <NutMilkChoice 
//                 title = {this.state.nutChoice}
//               />
//             </View> 
            
//             <View style={styles.buttons}>
//               <Button text="PecanButton"
//                 title="Pa"
//                 onPress={() => this.setState({ nutChoice: 'Pecan' + ' Milk'})}
//                 /> 
//                 <Button 
//                 title="Ad"
//                 onPress={() => this.setState({ nutChoice: 'Almond' + ' Milk'})}
//                 /> 
//               </View>
//             </View>
//       );
//     }
//   }
 
// const styles = StyleSheet.create({
//   nutchoice: {   
//     flex: 1,
//     width: '100%',
//     backgroundColor: '#ccc',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttons: {
//     flex: 2,
//     flexDirection: 'row',
//     width: '100%',
//     backgroundColor: '#ccc',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }, 
// });


//little component
// import React from 'react';
// import { StyleSheet, View, Text, Button } from 'react-native';


// const NutMilkChoice = (props) => {
//   return (
//     <View >
//       <Text>{props.title}</Text>
//     </View>
//   );
// };




// export default NutMilkChoice;


import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CarItem from './components/CarItem';

export default function App() {
  return (
  <View style={styles.container}>

    <CarItem 
    name={'Model 3'} 
    tagline={'Order online for'}
    taglineCTA={'Touchless Delivery'}
    image={require('./assets/images/Model3.jpeg')}
    />
 

          </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


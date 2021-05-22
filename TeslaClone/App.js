
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

    <CarItem />
 

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


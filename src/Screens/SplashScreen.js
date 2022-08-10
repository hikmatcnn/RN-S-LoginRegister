import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Halaman Splash</Text>
      <Text></Text>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },

  pageName: {
    margin: 10,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});

export default SplashScreen;
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Halaman Register</Text>
      <Text></Text>
      <Button
        title="Go to SplashScreen"
        onPress={() => navigation.navigate('SplashScreen')}
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

export default RegisterScreen;
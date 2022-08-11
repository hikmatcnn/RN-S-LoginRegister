import React,{useState, useEffect} from 'react';
import { View, Image, ActivityIndicator, StyleSheet,Button, Text } from 'react-native';

function SplashView02({ navigation }) {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);      
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>      
        <Image
          source={require('../../Assets/Images/Splash002.png')}
          style={{
            width: '70%',
            height: '40%',
            resizeMode: 'contain'
          }}
        />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
      <Text>Splash Screen 02</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('HomeScreen')}
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
  activityIndicator: {
    alignItems: 'center',
    height: 80,    
  },
});

export default SplashView02;
import React,{useState, useEffect} from 'react';
import { View, Image, ActivityIndicator, StyleSheet,Button, Text } from 'react-native';
import { Config } from '../../Config';
import AxiosApi from '../../Config/AxiosApi';


function SplashView({ navigation }) {
  const [animating, setAnimating] = useState(true);
  const getData = async ()=>{
    try {
      const res = await AxiosApi.get('/api/user');
      console.log("data: "+ res.data.status)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      // getData();
      setAnimating(false);      
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>      
        <Image
          source={require('../../Assets/Images/Splash001.png')}
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
      <Text></Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('SplashScreen02')}
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

export default SplashView;
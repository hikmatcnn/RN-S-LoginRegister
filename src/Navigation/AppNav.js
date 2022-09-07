import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../Screens/Auth/LoginScreen';
import RegisterScreen from '../Screens/Auth/RegisterScreen';
import SplashScreen from '../Screens/SplashScreen/SplashView';
import SplashScreen02 from '../Screens/SplashScreen/SplashView02';
import HomeScreen from '../Screens/Drawer/HomeScreen';
import BiodataScreen from '../Screens/BiodataScreen';
import BiodataAyahScreen from '../Screens/BiodataAyahScreen';
import BiodataIbuScreen from '../Screens/BiodataIbuScreen';

const Stack = createNativeStackNavigator();
const TabAtas = createMaterialTopTabNavigator();
const TabBawah = createBottomTabNavigator();

const Stack_TabAtas =()=>{
  return(
     <TabAtas.Navigator>
        <TabAtas.Screen name="Ayah" component={BiodataAyahScreen} />
        <TabAtas.Screen name="Ibu" component={BiodataIbuScreen} />
      </TabAtas.Navigator> 
  );
}
const Auth = () => {

  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', 
          headerStyle: {
            backgroundColor: '#307ecc', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashScreen02"
          component={SplashScreen02}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
             
    {/* <TabBawah.Navigator>
      <TabBawah.Screen name="Biodata" component={BiodataScreen} options={{headerShown: false}}/>
      <TabBawah.Screen name="Ortu" component={Stack_TabAtas} options={{headerShown: false}}/>
    </TabBawah.Navigator> */}
    </NavigationContainer>
  );
};

export default App;

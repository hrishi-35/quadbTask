import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen';
import DashBoard from './screens/DashBoard';


const Stack = createStackNavigator();

function App(){
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen options={{
          headerShown: false
        }}name="Splash" component={SplashScreen} />
        
        <Stack.Screen options={{
          headerLeft: null
        }} name="Zomato" component={DashBoard}/>
        </Stack.Navigator>

        
        
    </NavigationContainer>
  );
}


export default App;
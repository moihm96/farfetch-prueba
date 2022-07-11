import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';

import Scratch from './screens/Scratch';
import Home from './screens/Home';


export default function App() {


  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false
  };

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Scratch' screenOptions={screenOptions}>
        <Stack.Screen name="Scratch" component={Scratch} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

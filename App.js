import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import AddPokemon from './AddPokemon';
import EditPokemon from './EditPokemon';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddPokemon" component={AddPokemon} />
          <Stack.Screen name="EditPokemon" component={EditPokemon} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;

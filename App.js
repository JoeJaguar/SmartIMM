import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './component/Home'
import Dictionary from './component/Dictionary'
import Conversation from './component/Conversation'

const Stack = createStackNavigator();

const myStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home'}}/>
        <Stack.Screen name="Dictionary" component={Dictionary} />
        <Stack.Screen name="Conversation" component={Conversation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default myStack;

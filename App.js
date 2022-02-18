import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './component/Home'
import Conversation from './component/Conversation'
import Dictionary from './component/Dictionary'
import Listening from './component/Listening'

const Stack = createNativeStackNavigator();

const myStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home'}}/>
        <Stack.Screen name="Conversation" component={Conversation} />
        <Stack.Screen name="Dictionary" component={Dictionary} />
        <Stack.Screen name="Listening" component={Listening} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default myStack;

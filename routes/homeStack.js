import * as React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

import Home from './component/Home';
import Dictionary from './component/Dictionary';
import Conversation from './component/Conversation';

const homeStack = () => {
  const homeStack = createStackNavigator();

  return (
    <homeStack.Navigator>
      <homeStack.Screen
        name ="Home"
        component= {Home}/>
      <homeStack.Screen
        name ="Dictionary"
        component= {Dictionary}/>
      <homeStack.Screen
        name ="Comversation"
        component= {Conversation}/>
    </homeStack.Navigator>
  );
};
export default homeStack;
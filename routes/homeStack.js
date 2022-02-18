import * as React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

import Home from './component/Home';
import Dictionary from './component/Dictionary';
import Conversation from './component/Conversation';
import Listening from './component/Listening';

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
      <homeStack.Screen
        name ="Listening"
        component={Listening}/>
    </homeStack.Navigator>
  );
};
export default homeStack;
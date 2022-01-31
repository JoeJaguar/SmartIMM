import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Separator = () => (
  <View style={styles.separator} />
);

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}> Welcome </Text>
      <Separator />
      <View style={[{ width: "90%", margin: 10 }]}>
        <Button
          title="CONVERSATION"
          onPress={() => navigation.navigate('Conversation')}
        />
      </View>
      <Separator />
      <View style={[{ width: "90%", margin: 10 }]}>
        <Button
          title="DICTIONARY"
          onPress={() => navigation.navigate('Dictionary')}
        />
      </View>
    </View>
  );
}

function ConversationScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CONVERSATION</Text>
    </View>
  );
}

function DictionaryScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DICTIONARY</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Conversation" component={ConversationScreen} />
        <Stack.Screen name="Dictionary" component={DictionaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;

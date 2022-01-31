import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Separator = () => (
  <View style={styles.separator} />
);

function ConversationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={[{ width: "90%", margin: 10 }]}>
        <Button
          title="Arrival Immigration"
          onPress={() => navigation.navigate('Arrival Immigration')}
        />
      </View>
      <Separator />
      <View style={[{ width: "90%", margin: 10 }]}>
        <Button
          title="Visa on Arrival"
          onPress={() => navigation.navigate('Visa on Arrival')}
        />
      </View>
      <Separator />
      <View style={[{ width: "90%", margin: 10 }]}>
        <Button
          title="Investigation and Suppression"
          onPress={() => navigation.navigate('Investigation and Suppression')}
        />
      </View>
      <Separator />
      <View style={[{ width: "90%", margin: 10 }]}>
        <Button
          title="Transit"
          onPress={() => navigation.navigate('Transit')}
        />
      </View>
      <Separator />
      <View style={[{ width: "90%", margin: 10 }]}>
        <Button
          title="Departure Immigration"
          onPress={() => navigation.navigate('Departure Immigration')}
        />
      </View>
    </View>
  );
}

function ArrivalScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Arrival Immigration</Text>
    </View>
  );
}

function VisaScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Visa on Arrival</Text>
    </View>
  );
}
function InvestigationAndSuppressionScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Investigation and Suppression</Text>
    </View>
  );
}

function TransitScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Transit</Text>
    </View>
  );
}

function DepartureScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Departure Immigration</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Conversation" component={ConversationScreen} />
        <Stack.Screen name="Arrival Immigration" component={ArrivalScreen} />
        <Stack.Screen name="Visa on Arrival" component={VisaScreen} />
        <Stack.Screen name="Investigation and Suppression" component={InvestigationAndSuppressionScreen} />
        <Stack.Screen name="Transit" component={TransitScreen} />
        <Stack.Screen name="Departure Immigration" component={DepartureScreen} />
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

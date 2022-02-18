import React from "react";
import { View, Button, Text,Image } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: 'center',  backgroundColor: '#42e0d1'}}>
      <Image 
      source={require('./icon.png')}
      style={{ width: 200, height: 200 }} />
      <Text style={{ fontSize: 50, color: 'black' }}>Smart IMM</Text>
      <Text style={{ fontSize: 20, color: 'black' }}>English Learning Application</Text>
      <View style={[{ width: "90%", margin: 10 }]}> 
        <Button onPress={() => navigation.navigate('Conversation')} color="#1035ac" title="Conversation"></Button>
      </View>
      <View style={[{ width: "90%", margin: 10 }]}>
        <Button onPress={() => navigation.navigate('Dictionary')} color="#1035ac" title="Dictionary"></Button>
      </View>
      <View style={[{ width: "90%", margin: 10 }]}>
        <Button onPress={() => navigation.navigate('Listening')} color="#1035ac" title="Listening"></Button>
      </View>
    </View>
  );
};

export default Home;
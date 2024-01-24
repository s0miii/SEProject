import React from 'react';
import { View, Text, Button } from 'react-native';

const DummyScreen2 = ({ navigation }) => {
  return (
    <View>
      <Text>DummyScreen2</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default DummyScreen2;
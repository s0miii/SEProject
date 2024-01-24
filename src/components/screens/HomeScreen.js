// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to UserProfile"
        onPress={() => navigation.navigate('UserProfile')}
      />
      <Button
        title="Go to Dummy1"
        onPress={() => navigation.navigate('Dummy1')}
      />
      <Button
        title="Go to Dummy2"
        onPress={() => navigation.navigate('Dummy2')}
      />
      <Button
        title="Go to SleepTracker"
        onPress={() => navigation.navigate('SleepTracker')}
      />
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import { View, Text, Button } from 'react-native';

const UserProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>UserProfileScreen</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default UserProfileScreen;
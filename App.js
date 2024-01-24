import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers'; // Update the path
import HomeScreen from './src/components/screens/HomeScreen';
import UserProfileScreen from './src/components/screens/UserProfileScreen';
import DummyScreen1 from './src/components/screens/DummyScreen1';
import DummyScreen2 from './src/components/screens/DummyScreen2';
import SleepTrackerScreen from './src/components/screens/SleepTrackerScreen';

const Stack = createStackNavigator();
const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
          <Stack.Screen name="Dummy1" component={DummyScreen1} />
          <Stack.Screen name="Dummy2" component={DummyScreen2} />
          <Stack.Screen name="SleepTracker" component={SleepTrackerScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

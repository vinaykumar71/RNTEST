import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Provider } from 'react-redux';
import { ConfigureStore } from './src/store/Store';

import Home from '_screens/HomeScreen';
import ItemDetail from '_screens/DetailScreen';
import PlayerScreen from 'react-native-sound-playerview'

const store = ConfigureStore();

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <AppNavigation />
      </SafeAreaProvider>
    </Provider>

  );
}

const Stack = createStackNavigator()
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#6EB1F7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home'
          }}
        />
        <Stack.Screen
          name="ItemDetail"
          component={ItemDetail}
          options={{
            title: "Detail"
          }}
        />

        <Stack.Screen
          name="PlayerScreen"
          component={PlayerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

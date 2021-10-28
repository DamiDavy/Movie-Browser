import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import SearchMovieScreen from './screens/SearchMovieScreen';
import MovieListScreen from './screens/MovieListScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const MovieStack = createStackNavigator();

const SettingsStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            }
            else if (route.name === 'Settings') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Settings() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SearchSettings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  )
}


function Search() {
  return (
    <MovieStack.Navigator>
      <MovieStack.Screen name="MovieSearch" component={SearchMovieScreen} />
      <MovieStack.Screen name="MovieList" component={MovieListScreen} />
      <MovieStack.Screen name="MovieDetails" component={MovieDetailsScreen} />
    </MovieStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

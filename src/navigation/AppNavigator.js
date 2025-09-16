import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { useSecurity } from '../context/SecurityContext';

import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PinSetupScreen from '../screens/PinSetupScreen';
import PinEntryScreen from '../screens/PinEntryScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExpenseList"
        component={HomeScreen}
        options={{
          title: 'Expenses',
          headerStyle: { backgroundColor: '#000000' },
          headerTintColor: '#fff'
        }}
      />
    </Stack.Navigator>
  );
};

const AddExpenseStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddExpenseForm"
        component={AddExpenseScreen}
        options={{
          title: 'Add Expense',
          headerStyle: { backgroundColor: '#000000' },
          headerTintColor: '#fff'
        }}
      />
    </Stack.Navigator>
  );
};

const StatisticsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StatisticsView"
        component={StatisticsScreen}
        options={{
          title: 'Statistics',
          headerStyle: { backgroundColor: '#000000' },
          headerTintColor: '#fff'
        }}
      />
    </Stack.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsView"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          headerStyle: { backgroundColor: '#000000' },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen
        name="PinSetup"
        component={PinSetupScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="PinEntry"
        component={PinEntryScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'AddExpense') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Statistics') {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: { backgroundColor: '#000000', borderTopColor: '#1a1a1a' },
        headerShown: false
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ title: 'Expenses' }}
      />
      <Tab.Screen
        name="AddExpense"
        component={AddExpenseStack}
        options={{ title: 'Add' }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsStack}
        options={{ title: 'Stats' }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const { loading, isPinEnabled, isAuthenticated } = useSecurity();

  if (loading) {
    return null; // Could add a loading screen here
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isPinEnabled && !isAuthenticated ? (
          <Stack.Screen
            name="PinEntry"
            component={PinEntryScreen}
            options={{ gestureEnabled: false }}
          />
        ) : (
          <Stack.Screen name="Main" component={TabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
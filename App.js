import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ExpenseProvider } from './src/context/ExpenseContext';
import { SecurityProvider } from './src/context/SecurityContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <SecurityProvider>
      <ExpenseProvider>
        <AppNavigator />
        <StatusBar style="light" backgroundColor="#000000" />
      </ExpenseProvider>
    </SecurityProvider>
  );
}

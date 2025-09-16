import AsyncStorage from '@react-native-async-storage/async-storage';

const EXPENSES_KEY = '@expenses';

export const saveExpenses = async (expenses) => {
  try {
    await AsyncStorage.setItem(EXPENSES_KEY, JSON.stringify(expenses));
  } catch (error) {
    console.error('Error saving expenses:', error);
  }
};

export const loadExpenses = async () => {
  try {
    const expenses = await AsyncStorage.getItem(EXPENSES_KEY);

    if (expenses) {
      return JSON.parse(expenses);
    }

    // Return sample data for first-time users
    const sampleExpenses = [
      {
        id: 'sample1',
        amount: 150.00,
        description: 'Lunch at restaurant',
        category: 'food',
        date: new Date().toISOString(),
        createdAt: new Date().toISOString()
      },
      {
        id: 'sample2',
        amount: 50.00,
        description: 'Bus fare to office',
        category: 'transport',
        date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // Yesterday
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'sample3',
        amount: 300.00,
        description: 'Movie tickets',
        category: 'entertainment',
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'sample4',
        amount: 1200.00,
        description: 'Groceries for the week',
        category: 'shopping',
        date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
      }
    ];

    // Save the sample data
    await AsyncStorage.setItem(EXPENSES_KEY, JSON.stringify(sampleExpenses));
    return sampleExpenses;
  } catch (error) {
    console.error('Error loading expenses:', error);
    return [];
  }
};

export const clearAllExpenses = async () => {
  try {
    await AsyncStorage.removeItem(EXPENSES_KEY);
  } catch (error) {
    console.error('Error clearing expenses:', error);
  }
};
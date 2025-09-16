import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { saveExpenses, loadExpenses } from '../utils/storage';
import uuid from 'react-native-uuid';

const ExpenseContext = createContext();

const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EXPENSES':
      return {
        ...state,
        expenses: action.payload
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };
    case 'UPDATE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map(expense =>
          expense.id === action.payload.id ? action.payload : expense
        )
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload)
      };
    case 'CLEAR_ALL_EXPENSES':
      return {
        ...state,
        expenses: []
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

const initialState = {
  expenses: [],
  loading: true
};

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  useEffect(() => {
    loadExpensesFromStorage();
  }, []);

  useEffect(() => {
    if (!state.loading) {
      saveExpenses(state.expenses);
    }
  }, [state.expenses, state.loading]);

  const loadExpensesFromStorage = async () => {
    try {
      const expenses = await loadExpenses();
      dispatch({ type: 'SET_EXPENSES', payload: expenses });
    } catch (error) {
      console.error('Error loading expenses:', error);
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const addExpense = (expenseData) => {
    const newExpense = {
      id: uuid.v4(),
      ...expenseData,
      createdAt: new Date().toISOString()
    };
    dispatch({ type: 'ADD_EXPENSE', payload: newExpense });
  };

  const updateExpense = (id, updatedData) => {
    const updatedExpense = {
      ...updatedData,
      id,
      updatedAt: new Date().toISOString()
    };
    dispatch({ type: 'UPDATE_EXPENSE', payload: updatedExpense });
  };

  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: id });
  };

  const clearAllExpenses = () => {
    dispatch({ type: 'CLEAR_ALL_EXPENSES' });
  };

  const value = {
    expenses: state.expenses,
    loading: state.loading,
    addExpense,
    updateExpense,
    deleteExpense,
    clearAllExpenses
  };

  return (
    <ExpenseContext.Provider value={value}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenses must be used within an ExpenseProvider');
  }
  return context;
};
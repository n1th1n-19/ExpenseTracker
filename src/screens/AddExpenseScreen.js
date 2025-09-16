import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useExpenses } from '../context/ExpenseContext';
import ExpenseForm from '../components/ExpenseForm';
import CustomAlert from '../components/CustomAlert';
import { useCustomAlert } from '../hooks/useCustomAlert';

const AddExpenseScreen = ({ navigation }) => {
  const { addExpense } = useExpenses();
  const { alertConfig, hideAlert, showSuccess } = useCustomAlert();

  const handleAddExpense = (expenseData) => {
    addExpense(expenseData);
    showSuccess(
      'Success',
      'Expense added successfully!',
      [
        {
          text: 'OK',
          style: 'default',
          onPress: () => {
            navigation.navigate('Home');
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ExpenseForm onSubmit={handleAddExpense} />

      <CustomAlert
        visible={alertConfig.visible}
        title={alertConfig.title}
        message={alertConfig.message}
        buttons={alertConfig.buttons}
        type={alertConfig.type}
        onClose={hideAlert}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default AddExpenseScreen;
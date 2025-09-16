import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import CategoryPicker from './CategoryPicker';
import { formatDate } from '../utils/helpers';
import CustomAlert from './CustomAlert';
import { useCustomAlert } from '../hooks/useCustomAlert';

const ExpenseForm = ({ onSubmit, initialData, onCancel }) => {
  const [amount, setAmount] = useState(initialData?.amount?.toString() || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [category, setCategory] = useState(initialData?.category || '');
  const [date, setDate] = useState(initialData?.date ? new Date(initialData.date) : new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { alertConfig, hideAlert, showError } = useCustomAlert();

  const handleSubmit = () => {
    if (!amount.trim()) {
      showError('Error', 'Please enter an amount');
      return;
    }
    if (!description.trim()) {
      showError('Error', 'Please enter a description');
      return;
    }
    if (!category) {
      showError('Error', 'Please select a category');
      return;
    }

    const expenseData = {
      amount: parseFloat(amount),
      description: description.trim(),
      category,
      date: date.toISOString(),
    };

    onSubmit(expenseData);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Amount *</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.currencySymbol}>₹</Text>
          <TextInput
            style={styles.amountInput}
            value={amount}
            onChangeText={setAmount}
            placeholder="0.00"
            keyboardType="numeric"
            placeholderTextColor="#333333"
          />
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Description *</Text>
        <TextInput
          style={styles.textInput}
          value={description}
          onChangeText={setDescription}
          placeholder="what did you spend on?"
          placeholderTextColor="#333333"
          multiline
          numberOfLines={2}
        />
      </View>

      <CategoryPicker
        selectedCategory={category}
        onCategorySelect={setCategory}
      />

      <View style={styles.formGroup}>
        <Text style={styles.label}>Date</Text>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Ionicons name="calendar" size={16} color="#ffffff" />
          <Text style={styles.dateText}>{formatDate(date)}</Text>
        </TouchableOpacity>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
          maximumDate={new Date()}
        />
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.submitButton]}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>
            {initialData ? 'Update Expense' : 'Add Expense'}
          </Text>
        </TouchableOpacity>

        {onCancel && (
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={onCancel}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>

      <CustomAlert
        visible={alertConfig.visible}
        title={alertConfig.title}
        message={alertConfig.message}
        buttons={alertConfig.buttons}
        type={alertConfig.type}
        onClose={hideAlert}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 24,
  },
  formGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 12,
    color: '#ffffff',
    fontFamily: 'monospace',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#1a1a1a',
    paddingHorizontal: 16,
  },
  currencySymbol: {
    fontSize: 16,
    fontWeight: '300',
    color: '#ffffff',
    marginRight: 8,
    fontFamily: 'monospace',
  },
  amountInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: '300',
    paddingVertical: 16,
    color: '#ffffff',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  textInput: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#1a1a1a',
    padding: 16,
    fontSize: 14,
    color: '#ffffff',
    textAlignVertical: 'top',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 16,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#1a1a1a',
  },
  dateText: {
    fontSize: 14,
    color: '#ffffff',
    marginLeft: 12,
    fontWeight: '400',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  buttonContainer: {
    marginTop: 32,
    marginBottom: 40,
  },
  button: {
    borderRadius: 0,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  submitButtonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'monospace',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    borderColor: '#333333',
  },
  cancelButtonText: {
    color: '#666666',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'monospace',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});

export default ExpenseForm;
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { categories, formatCurrency, formatDate } from '../utils/helpers';

const ExpenseItem = ({ expense, onDelete, onEdit, onPress }) => {
  const category = categories.find(cat => cat.id === expense.category);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.leftSection}>
        <View style={styles.categoryIcon}>
          <Ionicons
            name={category?.icon || 'ellipsis-horizontal-outline'}
            size={18}
            color="#ffffff"
          />
        </View>
        <View style={styles.expenseDetails}>
          <Text style={styles.description}>{expense.description}</Text>
          <Text style={styles.categoryName}>{category?.name || 'Other'}</Text>
          <Text style={styles.date}>{formatDate(expense.date)}</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.amount}>{formatCurrency(expense.amount)}</Text>
        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.actionButton, styles.editButton]}
            onPress={(e) => {
              e.stopPropagation();
              onEdit();
            }}
          >
            <Ionicons name="pencil" size={12} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.deleteButton]}
            onPress={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <Ionicons name="trash" size={12} color="#ff4444" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 20,
    marginHorizontal: 24,
    marginVertical: 4,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#1a1a1a',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    backgroundColor: 'transparent',
  },
  expenseDetails: {
    flex: 1,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: 4,
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  categoryName: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 4,
    fontFamily: 'monospace',
    letterSpacing: 0.3,
  },
  date: {
    fontSize: 10,
    color: '#444444',
    fontFamily: 'monospace',
    letterSpacing: 0.3,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: '300',
    color: '#ffffff',
    marginBottom: 12,
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 24,
    height: 24,
    borderRadius: 0,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {
    backgroundColor: 'transparent',
    borderColor: '#ffffff',
  },
  deleteButton: {
    backgroundColor: 'transparent',
    borderColor: '#ff4444',
  },
});

export default ExpenseItem;
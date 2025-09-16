import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomPopup from './CustomPopup';
import { formatDate, categories } from '../utils/helpers';

const ExpenseDetailsPopup = ({
  visible,
  expense,
  onClose,
  onEdit,
  onDelete
}) => {
  if (!expense) return null;

  const category = categories.find(cat => cat.id === expense.category);
  const categoryName = category ? category.name : 'Other';
  const categoryIcon = category ? category.icon : 'help-circle';

  const formatCurrency = (amount) => {
    return `₹${amount.toFixed(2)}`;
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return {
      date: formatDate(date),
      time: date.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
    };
  };

  const dateTime = formatDateTime(expense.date);

  return (
    <CustomPopup
      visible={visible}
      title="Expense Details"
      onClose={onClose}
      size="medium"
      headerIcon="receipt-outline"
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Amount Section */}
        <View style={styles.amountSection}>
          <Text style={styles.amountLabel}>Amount</Text>
          <Text style={styles.amountValue}>{formatCurrency(expense.amount)}</Text>
        </View>

        {/* Details Grid */}
        <View style={styles.detailsGrid}>
          {/* Description */}
          <View style={styles.detailItem}>
            <View style={styles.detailHeader}>
              <Ionicons name="document-text" size={16} color="#ffffff" />
              <Text style={styles.detailLabel}>Description</Text>
            </View>
            <Text style={styles.detailValue}>{expense.description}</Text>
          </View>

          {/* Category */}
          <View style={styles.detailItem}>
            <View style={styles.detailHeader}>
              <Ionicons name={categoryIcon} size={16} color="#ffffff" />
              <Text style={styles.detailLabel}>Category</Text>
            </View>
            <Text style={styles.detailValue}>{categoryName}</Text>
          </View>

          {/* Date */}
          <View style={styles.detailItem}>
            <View style={styles.detailHeader}>
              <Ionicons name="calendar" size={16} color="#ffffff" />
              <Text style={styles.detailLabel}>Date</Text>
            </View>
            <Text style={styles.detailValue}>{dateTime.date}</Text>
          </View>

          {/* Time */}
          <View style={styles.detailItem}>
            <View style={styles.detailHeader}>
              <Ionicons name="time" size={16} color="#ffffff" />
              <Text style={styles.detailLabel}>Time</Text>
            </View>
            <Text style={styles.detailValue}>{dateTime.time}</Text>
          </View>

          {/* ID */}
          <View style={styles.detailItem}>
            <View style={styles.detailHeader}>
              <Ionicons name="finger-print" size={16} color="#666666" />
              <Text style={styles.detailLabel}>ID</Text>
            </View>
            <Text style={[styles.detailValue, styles.idValue]}>
              {expense.id.substring(0, 8).toUpperCase()}
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.actionButton, styles.editButton]}
            onPress={() => {
              onClose();
              onEdit(expense);
            }}
          >
            <Ionicons name="pencil" size={16} color="#000000" />
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.deleteButton]}
            onPress={() => {
              onClose();
              onDelete(expense);
            }}
          >
            <Ionicons name="trash" size={16} color="#ff4444" />
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Info */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Added on {new Date(expense.createdAt || expense.date).toLocaleDateString('en-IN')}
          </Text>
        </View>
      </ScrollView>
    </CustomPopup>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  amountSection: {
    alignItems: 'center',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  amountLabel: {
    fontSize: 12,
    color: '#666666',
    fontFamily: 'monospace',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  amountValue: {
    fontSize: 32,
    fontWeight: '300',
    color: '#ffffff',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  detailsGrid: {
    padding: 24,
  },
  detailItem: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#0d0d0d',
  },
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 11,
    color: '#666666',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginLeft: 8,
  },
  detailValue: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'monospace',
    letterSpacing: 0.3,
    lineHeight: 20,
  },
  idValue: {
    color: '#666666',
    fontSize: 12,
  },
  actionButtons: {
    flexDirection: 'row',
    padding: 24,
    paddingTop: 0,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderWidth: 1,
    borderRadius: 0,
  },
  editButton: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  editButtonText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginLeft: 6,
  },
  deleteButton: {
    backgroundColor: 'transparent',
    borderColor: '#ff4444',
  },
  deleteButtonText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ff4444',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginLeft: 6,
  },
  footer: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 0,
  },
  footerText: {
    fontSize: 10,
    color: '#444444',
    fontFamily: 'monospace',
    letterSpacing: 0.3,
  },
});

export default ExpenseDetailsPopup;
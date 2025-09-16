import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useExpenses } from '../context/ExpenseContext';
import ExpenseItem from '../components/ExpenseItem';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseDetailsPopup from '../components/ExpenseDetailsPopup';
import FilterSortPopup from '../components/FilterSortPopup';
import CustomAlert from '../components/CustomAlert';
import { useCustomAlert } from '../hooks/useCustomAlert';
import { formatCurrency, categories } from '../utils/helpers';

const HomeScreen = () => {
  const { expenses, loading, updateExpense, deleteExpense } = useExpenses();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    sortBy: 'date',
    sortOrder: 'desc',
    category: null,
    dateRange: 'all'
  });
  const [editingExpense, setEditingExpense] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const [showFilterPopup, setShowFilterPopup] = useState(false);

  const { alertConfig, hideAlert, showSuccess, showDestructiveConfirm } = useCustomAlert();

  const filteredExpenses = expenses.filter(expense => {
    const matchesSearch = expense.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !filters.category || expense.category === filters.category;

    // Date range filtering
    const expenseDate = new Date(expense.date);
    const now = new Date();
    let matchesDateRange = true;

    switch (filters.dateRange) {
      case 'today':
        matchesDateRange = expenseDate.toDateString() === now.toDateString();
        break;
      case 'week':
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - now.getDay());
        matchesDateRange = expenseDate >= weekStart;
        break;
      case 'month':
        matchesDateRange = expenseDate.getMonth() === now.getMonth() &&
                          expenseDate.getFullYear() === now.getFullYear();
        break;
      case 'year':
        matchesDateRange = expenseDate.getFullYear() === now.getFullYear();
        break;
      default:
        matchesDateRange = true;
    }

    return matchesSearch && matchesCategory && matchesDateRange;
  }).sort((a, b) => {
    let comparison = 0;

    switch (filters.sortBy) {
      case 'amount':
        comparison = a.amount - b.amount;
        break;
      case 'description':
        comparison = a.description.localeCompare(b.description);
        break;
      default: // date
        comparison = new Date(a.date) - new Date(b.date);
    }

    return filters.sortOrder === 'asc' ? comparison : -comparison;
  });

  const totalAmount = filteredExpenses.reduce((total, expense) => total + expense.amount, 0);

  const handleExpensePress = (expense) => {
    setSelectedExpense(expense);
    setShowDetailsPopup(true);
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense);
    setShowEditModal(true);
  };

  const handleUpdateExpense = (updatedData) => {
    updateExpense(editingExpense.id, updatedData);
    setShowEditModal(false);
    setEditingExpense(null);
    showSuccess('Success', 'Expense updated successfully!');
  };

  const handleDelete = (expense) => {
    showDestructiveConfirm(
      'Delete Expense',
      `Are you sure you want to delete "${expense.description}"? This action cannot be undone.`,
      () => {
        deleteExpense(expense.id);
        showSuccess('Deleted', 'Expense deleted successfully');
      }
    );
  };

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const renderExpenseItem = ({ item }) => (
    <ExpenseItem
      expense={item}
      onPress={() => handleExpensePress(item)}
      onEdit={() => handleEdit(item)}
      onDelete={() => handleDelete(item)}
    />
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Ionicons name="receipt-outline" size={80} color="#ccc" />
      <Text style={styles.emptyStateText}>No expenses found</Text>
      <Text style={styles.emptyStateSubtext}>
        {searchQuery || filters.category || filters.dateRange !== 'all'
          ? 'Try adjusting your filters'
          : 'Start by adding your first expense'}
      </Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={{ color: '#ffffff', fontFamily: 'monospace', letterSpacing: 0.5 }}>Loading expenses...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total Expenses</Text>
          <Text style={styles.totalAmount}>{formatCurrency(totalAmount)}</Text>
        </View>
      </View>

      <View style={styles.filtersContainer}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search expenses..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999"
          />
        </View>


<TouchableOpacity
          style={styles.filterButton}
          onPress={() => setShowFilterPopup(true)}
        >
          <Ionicons name="funnel" size={16} color="#ffffff" />
          <Text style={styles.filterText}>
            {filters.category || filters.dateRange !== 'all' ? 'Filtered' : 'Filter'}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredExpenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={renderEmptyState}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={filteredExpenses.length === 0 ? styles.emptyListContainer : null}
      />

      <Modal
        visible={showEditModal}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Edit Expense</Text>
            <TouchableOpacity
              onPress={() => {
                setShowEditModal(false);
                setEditingExpense(null);
              }}
            >
              <Ionicons name="close" size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>
          <ExpenseForm
            initialData={editingExpense}
            onSubmit={handleUpdateExpense}
            onCancel={() => {
              setShowEditModal(false);
              setEditingExpense(null);
            }}
          />
        </View>
      </Modal>

      {/* Custom Popups */}
      <ExpenseDetailsPopup
        visible={showDetailsPopup}
        expense={selectedExpense}
        onClose={() => {
          setShowDetailsPopup(false);
          setSelectedExpense(null);
        }}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <FilterSortPopup
        visible={showFilterPopup}
        currentFilters={filters}
        onApplyFilters={handleApplyFilters}
        onClose={() => setShowFilterPopup(false)}
      />


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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  header: {
    backgroundColor: '#000000',
    padding: 24,
    paddingTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  totalContainer: {
    alignItems: 'center',
  },
  totalLabel: {
    color: '#666666',
    fontSize: 12,
    marginBottom: 8,
    fontFamily: 'monospace',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  totalAmount: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '300',
    fontFamily: 'monospace',
    letterSpacing: 2,
  },
  filtersContainer: {
    flexDirection: 'row',
    padding: 24,
    gap: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#1a1a1a',
    borderRadius: 0,
    paddingHorizontal: 16,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#1a1a1a',
    borderRadius: 0,
  },
  filterText: {
    marginLeft: 8,
    color: '#ffffff',
    fontWeight: '400',
    fontFamily: 'monospace',
    fontSize: 12,
    letterSpacing: 0.5,
  },
  emptyListContainer: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyStateText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffff',
    marginTop: 24,
    marginBottom: 8,
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  emptyStateSubtext: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 18,
    fontFamily: 'monospace',
    letterSpacing: 0.3,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#ffffff',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
});

export default HomeScreen;
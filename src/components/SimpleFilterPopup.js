import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { categories } from '../utils/helpers';

const { width, height } = Dimensions.get('window');

const SimpleFilterPopup = ({
  visible,
  currentFilters = {},
  onApplyFilters,
  onClose
}) => {
  const [filters, setFilters] = useState({
    sortBy: currentFilters.sortBy || 'date',
    sortOrder: currentFilters.sortOrder || 'desc',
    category: currentFilters.category || null,
    dateRange: currentFilters.dateRange || 'all'
  });


  const sortOptions = [
    { id: 'date', name: 'Date', icon: 'calendar-outline' },
    { id: 'amount', name: 'Amount', icon: 'cash-outline' },
    { id: 'description', name: 'Description', icon: 'text-outline' }
  ];

  const dateRangeOptions = [
    { id: 'all', name: 'All Time' },
    { id: 'today', name: 'Today' },
    { id: 'week', name: 'This Week' },
    { id: 'month', name: 'This Month' }
  ];

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleReset = () => {
    const resetFilters = {
      sortBy: 'date',
      sortOrder: 'desc',
      category: null,
      dateRange: 'all'
    };
    setFilters(resetFilters);
    onApplyFilters(resetFilters);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Filter & Sort</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>

          {/* Content */}
          <ScrollView style={styles.content}>

            {/* Sort By */}
            <Text style={styles.sectionTitle}>Sort By</Text>
            {sortOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.optionItem,
                  filters.sortBy === option.id && styles.selectedOption
                ]}
                onPress={() => setFilters(prev => ({ ...prev, sortBy: option.id }))}
              >
                <Ionicons name={option.icon} size={16} color="#ffffff" />
                <Text style={styles.optionText}>{option.name}</Text>
                {filters.sortBy === option.id && (
                  <Ionicons name="checkmark" size={16} color="#ffffff" />
                )}
              </TouchableOpacity>
            ))}

            {/* Date Range */}
            <Text style={styles.sectionTitle}>Date Range</Text>
            {dateRangeOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.optionItem,
                  filters.dateRange === option.id && styles.selectedOption
                ]}
                onPress={() => setFilters(prev => ({ ...prev, dateRange: option.id }))}
              >
                <Text style={styles.optionText}>{option.name}</Text>
                {filters.dateRange === option.id && (
                  <Ionicons name="checkmark" size={16} color="#ffffff" />
                )}
              </TouchableOpacity>
            ))}

            {/* Categories */}
            <Text style={styles.sectionTitle}>Category</Text>
            <TouchableOpacity
              style={[
                styles.optionItem,
                !filters.category && styles.selectedOption
              ]}
              onPress={() => setFilters(prev => ({ ...prev, category: null }))}
            >
              <Text style={styles.optionText}>All Categories</Text>
              {!filters.category && (
                <Ionicons name="checkmark" size={16} color="#ffffff" />
              )}
            </TouchableOpacity>

            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.optionItem,
                  filters.category === category.id && styles.selectedOption
                ]}
                onPress={() => setFilters(prev => ({
                  ...prev,
                  category: prev.category === category.id ? null : category.id
                }))}
              >
                <Ionicons name={category.icon} size={16} color="#ffffff" />
                <Text style={styles.optionText}>{category.name}</Text>
                {filters.category === category.id && (
                  <Ionicons name="checkmark" size={16} color="#ffffff" />
                )}
              </TouchableOpacity>
            ))}

            {/* Action Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                <Text style={styles.resetButtonText}>RESET</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
                <Text style={styles.applyButtonText}>APPLY</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#000000',
    borderWidth: 3,
    borderColor: '#ffffff',
    width: width - 60,
    height: height * 0.8,
    maxWidth: 400,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  title: {
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: '#222222',
    minHeight: 400,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'monospace',
    marginTop: 20,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#222222',
    borderWidth: 1,
    borderColor: '#444444',
    marginBottom: 4,
  },
  selectedOption: {
    backgroundColor: '#444444',
    borderColor: '#ffffff',
  },
  optionText: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'monospace',
    marginLeft: 10,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#333333',
    padding: 12,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'monospace',
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 12,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'monospace',
  },
});

export default SimpleFilterPopup;
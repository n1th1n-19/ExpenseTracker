import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { categories } from '../utils/helpers';

const FilterSortPopup = ({
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

  const handleApplyFilters = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleResetFilters = () => {
    const resetFilters = {
      sortBy: 'date',
      sortOrder: 'desc',
      category: null,
      dateRange: 'all'
    };
    setFilters(resetFilters);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>FILTER & SORT</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>

            {/* SORT BY */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>SORT BY</Text>

              <TouchableOpacity
                style={[styles.item, filters.sortBy === 'date' && styles.activeItem]}
                onPress={() => setFilters(prev => ({...prev, sortBy: 'date'}))}
              >
                <Text style={[styles.itemText, filters.sortBy === 'date' && styles.activeText]}>
                  Date
                </Text>
                {filters.sortBy === 'date' && <Text style={styles.check}>●</Text>}
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.item, filters.sortBy === 'amount' && styles.activeItem]}
                onPress={() => setFilters(prev => ({...prev, sortBy: 'amount'}))}
              >
                <Text style={[styles.itemText, filters.sortBy === 'amount' && styles.activeText]}>
                  Amount
                </Text>
                {filters.sortBy === 'amount' && <Text style={styles.check}>●</Text>}
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.item, filters.sortBy === 'description' && styles.activeItem]}
                onPress={() => setFilters(prev => ({...prev, sortBy: 'description'}))}
              >
                <Text style={[styles.itemText, filters.sortBy === 'description' && styles.activeText]}>
                  Description
                </Text>
                {filters.sortBy === 'description' && <Text style={styles.check}>●</Text>}
              </TouchableOpacity>
            </View>

            {/* SORT ORDER */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>SORT ORDER</Text>

              <TouchableOpacity
                style={[styles.item, filters.sortOrder === 'desc' && styles.activeItem]}
                onPress={() => setFilters(prev => ({...prev, sortOrder: 'desc'}))}
              >
                <Text style={[styles.itemText, filters.sortOrder === 'desc' && styles.activeText]}>
                  Newest First
                </Text>
                {filters.sortOrder === 'desc' && <Text style={styles.check}>●</Text>}
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.item, filters.sortOrder === 'asc' && styles.activeItem]}
                onPress={() => setFilters(prev => ({...prev, sortOrder: 'asc'}))}
              >
                <Text style={[styles.itemText, filters.sortOrder === 'asc' && styles.activeText]}>
                  Oldest First
                </Text>
                {filters.sortOrder === 'asc' && <Text style={styles.check}>●</Text>}
              </TouchableOpacity>
            </View>

            {/* DATE RANGE */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>DATE RANGE</Text>

              <TouchableOpacity
                style={[styles.item, filters.dateRange === 'all' && styles.activeItem]}
                onPress={() => setFilters(prev => ({...prev, dateRange: 'all'}))}
              >
                <Text style={[styles.itemText, filters.dateRange === 'all' && styles.activeText]}>
                  All Time
                </Text>
                {filters.dateRange === 'all' && <Text style={styles.check}>●</Text>}
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.item, filters.dateRange === 'today' && styles.activeItem]}
                onPress={() => setFilters(prev => ({...prev, dateRange: 'today'}))}
              >
                <Text style={[styles.itemText, filters.dateRange === 'today' && styles.activeText]}>
                  Today
                </Text>
                {filters.dateRange === 'today' && <Text style={styles.check}>●</Text>}
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.item, filters.dateRange === 'week' && styles.activeItem]}
                onPress={() => setFilters(prev => ({...prev, dateRange: 'week'}))}
              >
                <Text style={[styles.itemText, filters.dateRange === 'week' && styles.activeText]}>
                  This Week
                </Text>
                {filters.dateRange === 'week' && <Text style={styles.check}>●</Text>}
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.item, filters.dateRange === 'month' && styles.activeItem]}
                onPress={() => setFilters(prev => ({...prev, dateRange: 'month'}))}
              >
                <Text style={[styles.itemText, filters.dateRange === 'month' && styles.activeText]}>
                  This Month
                </Text>
                {filters.dateRange === 'month' && <Text style={styles.check}>●</Text>}
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.item, filters.dateRange === 'year' && styles.activeItem]}
                onPress={() => setFilters(prev => ({...prev, dateRange: 'year'}))}
              >
                <Text style={[styles.itemText, filters.dateRange === 'year' && styles.activeText]}>
                  This Year
                </Text>
                {filters.dateRange === 'year' && <Text style={styles.check}>●</Text>}
              </TouchableOpacity>
            </View>

            {/* CATEGORIES */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>CATEGORY</Text>

              <TouchableOpacity
                style={[styles.item, !filters.category && styles.activeItem]}
                onPress={() => setFilters(prev => ({...prev, category: null}))}
              >
                <Text style={[styles.itemText, !filters.category && styles.activeText]}>
                  ALL CATEGORIES
                </Text>
                {!filters.category && <Text style={styles.check}>●</Text>}
              </TouchableOpacity>

              {categories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  style={[styles.item, filters.category === category.id && styles.activeItem]}
                  onPress={() => setFilters(prev => ({
                    ...prev,
                    category: prev.category === category.id ? null : category.id
                  }))}
                >
                  <Text style={[styles.itemText, filters.category === category.id && styles.activeText]}>
                    {category.name.toUpperCase()}
                  </Text>
                  {filters.category === category.id && <Text style={styles.check}>●</Text>}
                </TouchableOpacity>
              ))}
            </View>

        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.resetBtn} onPress={handleResetFilters}>
            <Text style={styles.resetText}>RESET</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.applyBtn} onPress={handleApplyFilters}>
            <Text style={styles.applyText}>APPLY</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 16,
    paddingTop: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1.5,
    fontFamily: 'monospace',
    textTransform: 'uppercase',
  },
  closeBtn: {
    padding: 6,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  closeText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '300',
  },
  content: {
    flex: 1,
    backgroundColor: '#000000',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 12,
    letterSpacing: 2,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    paddingBottom: 8,
    fontFamily: 'monospace',
    textTransform: 'uppercase',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 12,
    marginBottom: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  activeItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: 'rgba(255, 255, 255, 0.95)',
  },
  itemText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '300',
    fontFamily: 'monospace',
  },
  activeText: {
    color: '#000000',
    fontWeight: '400',
  },
  check: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
  },
  footer: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
    backgroundColor: '#000000',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  resetBtn: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  resetText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 1.5,
    fontFamily: 'monospace',
    textTransform: 'uppercase',
  },
  applyBtn: {
    flex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 1.5,
    fontFamily: 'monospace',
    textTransform: 'uppercase',
  },
});

export default FilterSortPopup;
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { categories } from '../utils/helpers';

const { width, height } = Dimensions.get('window');

const InlineCategoryPicker = ({ selectedCategory, onCategorySelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  const handleCategorySelect = (categoryId) => {
    onCategorySelect(categoryId);
    setIsExpanded(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Category *</Text>

      {/* Category Button */}
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <View style={styles.categoryButtonLeft}>
          {selectedCategoryData ? (
            <>
              <Ionicons
                name={selectedCategoryData.icon}
                size={16}
                color="#ffffff"
              />
              <Text style={styles.categoryButtonText}>
                {selectedCategoryData.name}
              </Text>
            </>
          ) : (
            <>
              <Ionicons name="help-circle-outline" size={16} color="#666666" />
              <Text style={styles.categoryButtonPlaceholder}>
                Select a category
              </Text>
            </>
          )}
        </View>
        <Ionicons
          name={isExpanded ? "chevron-up" : "chevron-down"}
          size={16}
          color="#666666"
        />
      </TouchableOpacity>

      {/* Expanded Category List */}
      {isExpanded && (
        <View style={styles.expandedContainer}>

          <ScrollView style={styles.categoriesList} nestedScrollEnabled={true}>
            <View style={styles.categoriesGrid}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  style={[
                    styles.categoryItem,
                    selectedCategory === category.id && styles.selectedCategory
                  ]}
                  onPress={() => handleCategorySelect(category.id)}
                >
                  <Ionicons
                    name={category.icon}
                    size={20}
                    color={selectedCategory === category.id ? '#000000' : '#ffffff'}
                  />
                  <Text style={[
                    styles.categoryName,
                    selectedCategory === category.id && styles.selectedCategoryName
                  ]}>
                    {category.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          <TouchableOpacity
            style={styles.collapseButton}
            onPress={() => setIsExpanded(false)}
          >
            <Text style={styles.collapseButtonText}>COLLAPSE</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    padding: 16,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#1a1a1a',
  },
  categoryButtonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryButtonText: {
    fontSize: 14,
    color: '#ffffff',
    marginLeft: 12,
    fontWeight: '400',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  categoryButtonPlaceholder: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 12,
    fontWeight: '400',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  expandedContainer: {
    backgroundColor: '#111111',
    borderWidth: 2,
    borderColor: '#ffffff',
    borderTopWidth: 0,
    maxHeight: 300,
  },
  categoriesList: {
    maxHeight: 200,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '48%',
    backgroundColor: '#222222',
    borderWidth: 1,
    borderColor: '#444444',
    padding: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  selectedCategory: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  categoryName: {
    fontSize: 10,
    color: '#ffffff',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginTop: 6,
    textTransform: 'uppercase',
  },
  selectedCategoryName: {
    color: '#000000',
  },
  collapseButton: {
    backgroundColor: '#333333',
    padding: 12,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#444444',
  },
  collapseButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
});

export default InlineCategoryPicker;
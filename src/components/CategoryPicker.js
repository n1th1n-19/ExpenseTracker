import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { categories } from '../utils/helpers';
import CategorySelectionPopup from './CategorySelectionPopup';

const CategoryPicker = ({ selectedCategory, onCategorySelect }) => {
  const [showPopup, setShowPopup] = useState(false);

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Category *</Text>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => setShowPopup(true)}
        >
          <View style={styles.categoryButtonLeft}>
            {selectedCategoryData ? (
              <Text style={styles.categoryButtonText}>
                {selectedCategoryData.name.toUpperCase()}
              </Text>
            ) : (
              <Text style={styles.categoryButtonPlaceholder}>
                SELECT A CATEGORY
              </Text>
            )}
          </View>
          <Text style={styles.chevron}>▼</Text>
        </TouchableOpacity>
      </View>

      <CategorySelectionPopup
        visible={showPopup}
        selectedCategory={selectedCategory}
        onCategorySelect={onCategorySelect}
        onClose={() => setShowPopup(false)}
      />
    </>
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
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  categoryButtonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryButtonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '300',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  categoryButtonPlaceholder: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.4)',
    fontWeight: '300',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  chevron: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.4)',
    fontWeight: '300',
  },
});

export default CategoryPicker;
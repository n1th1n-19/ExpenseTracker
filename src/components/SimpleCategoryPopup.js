import React from 'react';
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

const SimpleCategoryPopup = ({
  visible,
  selectedCategory,
  onCategorySelect,
  onClose
}) => {
  console.log('SimpleCategoryPopup render:', {
    visible,
    categoriesLength: categories.length,
    selectedCategory
  });

  const handleCategorySelect = (categoryId) => {
    console.log('Category selected:', categoryId);
    onCategorySelect(categoryId);
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
            <Text style={styles.title}>Select Category</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>

          {/* Content */}
          <ScrollView style={styles.content}>
            <Text style={styles.debugText}>
              Categories: {categories.length}
            </Text>

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
                    size={24}
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

            <Text style={styles.footerText}>
              Choose a category for your expense
            </Text>
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
    height: height * 0.7,
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
    minHeight: 300,
  },
  debugText: {
    fontSize: 16,
    color: '#ff0000',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: '#333333',
    padding: 10,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '48%',
    backgroundColor: '#222222',
    borderWidth: 1,
    borderColor: '#444444',
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  selectedCategory: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  categoryName: {
    fontSize: 12,
    color: '#ffffff',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginTop: 8,
  },
  selectedCategoryName: {
    color: '#000000',
  },
  footerText: {
    fontSize: 12,
    color: '#666666',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SimpleCategoryPopup;
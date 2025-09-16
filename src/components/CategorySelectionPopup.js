import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { categories } from '../utils/helpers';

const CategorySelectionPopup = ({
  visible,
  selectedCategory,
  onCategorySelect,
  onClose
}) => {
  const handleCategorySelect = (categoryId) => {
    onCategorySelect(categoryId);
    onClose();
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
          <Text style={styles.title}>SELECT CATEGORY</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>

          {/* CATEGORIES */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>CHOOSE A CATEGORY</Text>

            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[styles.item, selectedCategory === category.id && styles.activeItem]}
                onPress={() => handleCategorySelect(category.id)}
              >
                <Text style={[styles.itemText, selectedCategory === category.id && styles.activeText]}>
                  {category.name.toUpperCase()}
                </Text>
                {selectedCategory === category.id && <Text style={styles.check}>●</Text>}
              </TouchableOpacity>
            ))}
          </View>

        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
            <Text style={styles.cancelText}>CANCEL</Text>
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
    padding: 16,
    backgroundColor: '#000000',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  cancelBtn: {
    backgroundColor: 'transparent',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  cancelText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 1.5,
    fontFamily: 'monospace',
    textTransform: 'uppercase',
  },
});

export default CategorySelectionPopup;
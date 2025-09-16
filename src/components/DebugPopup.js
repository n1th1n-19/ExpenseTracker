import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { categories } from '../utils/helpers';

const { width, height } = Dimensions.get('window');

const DebugPopup = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>DEBUG POPUP</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.content}>
            <Text style={styles.testText}>
              POPUP IS WORKING - Categories: {categories.length}
            </Text>

            <View style={styles.testSection}>
              <Text style={styles.sectionTitle}>CATEGORIES:</Text>
              {categories.map((category, index) => (
                <View key={category.id} style={styles.testItem}>
                  <Ionicons name={category.icon} size={16} color="#ffffff" />
                  <Text style={styles.testItemText}>
                    {index + 1}. {category.name}
                  </Text>
                </View>
              ))}
            </View>

            <TouchableOpacity style={styles.testButton}>
              <Text style={styles.testButtonText}>TEST BUTTON</Text>
            </TouchableOpacity>
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
    padding: 20,
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
    borderBottomColor: '#ffffff',
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: '#111111',
  },
  testText: {
    fontSize: 14,
    color: '#00ff00',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: '#000000',
    padding: 10,
    borderWidth: 1,
    borderColor: '#00ff00',
  },
  testSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#ffffff',
    fontFamily: 'monospace',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  testItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#222222',
    marginBottom: 4,
    borderWidth: 1,
    borderColor: '#444444',
  },
  testItemText: {
    fontSize: 12,
    color: '#ffffff',
    fontFamily: 'monospace',
    marginLeft: 8,
  },
  testButton: {
    backgroundColor: '#ffffff',
    padding: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  testButtonText: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
});

export default DebugPopup;
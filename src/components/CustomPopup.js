import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const CustomPopup = ({
  visible,
  title,
  children,
  onClose,
  size = 'medium', // 'small', 'medium', 'large', 'fullscreen'
  showCloseButton = true,
  headerIcon = null
}) => {
  const getPopupStyle = () => {
    switch (size) {
      case 'small':
        return {
          width: width - 80,
          maxHeight: height * 0.4,
          maxWidth: 300
        };
      case 'large':
        return {
          width: width - 40,
          maxHeight: height * 0.8,
          maxWidth: 500
        };
      case 'fullscreen':
        return {
          width: width,
          height: height,
          maxWidth: width,
          maxHeight: height
        };
      default: // medium
        return {
          width: width - 60,
          maxHeight: height * 0.6,
          maxWidth: 400
        };
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.popupContainer, getPopupStyle()]}>
          {/* Header */}
          {(title || showCloseButton) && (
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                {headerIcon && (
                  <Ionicons
                    name={headerIcon}
                    size={20}
                    color="#ffffff"
                    style={styles.headerIcon}
                  />
                )}
                {title && <Text style={styles.title}>{title}</Text>}
              </View>
              {showCloseButton && (
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={onClose}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Ionicons name="close" size={20} color="#ffffff" />
                </TouchableOpacity>
              )}
            </View>
          )}

          {/* Content */}
          <View style={styles.content}>
            {children}
          </View>
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
  popupContainer: {
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#1a1a1a',
    borderRadius: 0,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
    backgroundColor: '#000000',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerIcon: {
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffff',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    flex: 1,
  },
  closeButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    minHeight: 200,
    backgroundColor: '#000000',
  },
});

export default CustomPopup;
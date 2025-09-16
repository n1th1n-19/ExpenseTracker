import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

const CustomAlert = ({
  visible,
  title,
  message,
  buttons = [],
  type = 'default', // 'success', 'error', 'warning', 'default'
  onClose
}) => {
  const getStatusIndicator = () => {
    switch (type) {
      case 'success':
        return '●';
      case 'error':
        return '●';
      case 'warning':
        return '●';
      default:
        return '●';
    }
  };

  const getIndicatorColor = () => {
    switch (type) {
      case 'success':
        return '#ffffff';
      case 'error':
        return '#ffffff';
      case 'warning':
        return '#ffffff';
      default:
        return '#ffffff';
    }
  };

  const defaultButtons = buttons.length > 0 ? buttons : [
    {
      text: 'OK',
      style: 'default',
      onPress: onClose
    }
  ];

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.alertContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.indicator}>{getStatusIndicator()}</Text>
            {title && <Text style={styles.title}>{title.toUpperCase()}</Text>}
          </View>

          {/* Message */}
          {message && (
            <Text style={styles.message}>{message}</Text>
          )}

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            {defaultButtons.map((button, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.button,
                  button.style === 'destructive' && styles.destructiveButton,
                  button.style === 'cancel' && styles.cancelButton,
                  defaultButtons.length === 1 && styles.singleButton,
                  index === 0 && defaultButtons.length > 1 && styles.leftButton,
                  index === defaultButtons.length - 1 && defaultButtons.length > 1 && styles.rightButton
                ]}
                onPress={() => {
                  if (button.onPress) {
                    button.onPress();
                  }
                  onClose();
                }}
              >
                <Text style={[
                  styles.buttonText,
                  button.style === 'destructive' && styles.destructiveText,
                  button.style === 'cancel' && styles.cancelText,
                  (defaultButtons.length === 1 || (index === defaultButtons.length - 1 && defaultButtons.length > 1)) && styles.primaryButtonText
                ]}>
                  {button.text.toUpperCase()}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  alertContainer: {
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    width: width - 60,
    maxWidth: 350,
    padding: 0,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  indicator: {
    fontSize: 12,
    color: '#ffffff',
    marginRight: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffff',
    fontFamily: 'monospace',
    letterSpacing: 1.5,
    flex: 1,
  },
  message: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 18,
    padding: 16,
    paddingTop: 12,
    fontFamily: 'monospace',
    letterSpacing: 0.3,
    fontWeight: '300',
  },
  buttonContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  button: {
    flex: 1,
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRightWidth: 1,
    borderRightColor: 'rgba(255, 255, 255, 0.1)',
  },
  singleButton: {
    borderRightWidth: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  leftButton: {
    borderRightWidth: 1,
    borderRightColor: 'rgba(255, 255, 255, 0.1)',
  },
  rightButton: {
    borderRightWidth: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  destructiveButton: {
    backgroundColor: 'transparent',
  },
  cancelButton: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ffffff',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  destructiveText: {
    color: '#ffffff',
  },
  cancelText: {
    color: 'rgba(255, 255, 255, 0.6)',
  },
  primaryButtonText: {
    color: '#000000',
  },
});

export default CustomAlert;
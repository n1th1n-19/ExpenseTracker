import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSecurity } from '../context/SecurityContext';

const PinSetupScreen = ({ navigation, route }) => {
  const { setupPin } = useSecurity();
  const { isChanging = false, onComplete } = route?.params || {};

  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [step, setStep] = useState(1); // 1: enter pin, 2: confirm pin
  const [loading, setLoading] = useState(false);

  const handleNumberPress = (number) => {
    if (step === 1) {
      if (pin.length < 6) {
        setPin(prev => prev + number);
      }
    } else {
      if (confirmPin.length < 6) {
        setConfirmPin(prev => prev + number);
      }
    }
  };

  const handleDelete = () => {
    if (step === 1) {
      setPin(prev => prev.slice(0, -1));
    } else {
      setConfirmPin(prev => prev.slice(0, -1));
    }
  };

  const handleNext = () => {
    if (step === 1 && pin.length === 6) {
      setStep(2);
    } else if (step === 2 && confirmPin.length === 6) {
      handleSetupPin();
    }
  };

  const handleSetupPin = async () => {
    if (pin !== confirmPin) {
      Alert.alert('Error', 'PINs do not match. Please try again.');
      setStep(1);
      setPin('');
      setConfirmPin('');
      return;
    }

    setLoading(true);
    try {
      const success = await setupPin(pin);
      if (success) {
        Alert.alert(
          'Success',
          isChanging ? 'PIN changed successfully!' : 'Security enabled successfully!',
          [
            {
              text: 'OK',
              onPress: () => {
                if (onComplete) {
                  onComplete();
                }
                if (navigation.canGoBack()) {
                  navigation.goBack();
                } else {
                  navigation.replace('Main');
                }
              }
            }
          ]
        );
      } else {
        Alert.alert('Error', 'Failed to set up PIN. Please try again.');
      }
    } catch (error) {
      console.error('PIN setup error:', error);
      Alert.alert('Error', 'An error occurred while setting up PIN.');
    } finally {
      setLoading(false);
    }
  };

  const renderDots = (currentPin) => {
    return (
      <View style={styles.dotsContainer}>
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index < currentPin.length && styles.filledDot
            ]}
          />
        ))}
      </View>
    );
  };

  const renderNumberPad = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, 'delete'];

    return (
      <View style={styles.numberPad}>
        {numbers.map((item, index) => {
          if (item === null) {
            return <View key={index} style={styles.numberButton} />;
          }

          if (item === 'delete') {
            return (
              <TouchableOpacity
                key={index}
                style={styles.numberButton}
                onPress={handleDelete}
              >
                <Ionicons name="backspace-outline" size={24} color="#ffffff" />
              </TouchableOpacity>
            );
          }

          return (
            <TouchableOpacity
              key={index}
              style={styles.numberButton}
              onPress={() => handleNumberPress(item.toString())}
            >
              <Text style={styles.numberText}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        {navigation.canGoBack() && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#ffffff" />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>
          {isChanging ? 'CHANGE PIN' : 'SET UP SECURITY'}
        </Text>
      </View>

      <View style={styles.instructionContainer}>
        <Ionicons name="shield-checkmark-outline" size={48} color="#ffffff" />
        <Text style={styles.instruction}>
          {step === 1 ? 'ENTER A 6-DIGIT PIN' : 'CONFIRM YOUR PIN'}
        </Text>
        <Text style={styles.subtitle}>
          {step === 1
            ? 'This PIN will be required to access your expense data'
            : 'Please enter your PIN again to confirm'
          }
        </Text>
      </View>

      {renderDots(step === 1 ? pin : confirmPin)}

      {renderNumberPad()}

      {((step === 1 && pin.length === 6) || (step === 2 && confirmPin.length === 6)) && (
        <TouchableOpacity
          style={[styles.continueButton, loading && styles.disabledButton]}
          onPress={handleNext}
          disabled={loading}
        >
          <Text style={styles.continueButtonText}>
            {loading ? 'SETTING UP...' : step === 1 ? 'CONTINUE' : 'CONFIRM'}
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flexGrow: 1,
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  backButton: {
    marginRight: 16,
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    color: '#ffffff',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  instructionContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  instruction: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    fontFamily: 'monospace',
    letterSpacing: 0.3,
    lineHeight: 18,
    paddingHorizontal: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
    gap: 16,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#333333',
    backgroundColor: 'transparent',
  },
  filledDot: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  numberPad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 300,
    alignSelf: 'center',
    gap: 20,
  },
  numberButton: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#1a1a1a',
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  numberText: {
    fontSize: 24,
    fontWeight: '300',
    color: '#ffffff',
    fontFamily: 'monospace',
  },
  continueButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 0,
    paddingVertical: 16,
    marginTop: 40,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#333333',
    borderColor: '#333333',
  },
  continueButtonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
});

export default PinSetupScreen;
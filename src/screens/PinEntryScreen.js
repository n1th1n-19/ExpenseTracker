import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  AppState
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSecurity } from '../context/SecurityContext';

const PinEntryScreen = () => {
  const { verifyPin, authenticateWithBiometric, isBiometricAvailable, isBiometricEnabled } = useSecurity();
  const [pin, setPin] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockUntil, setLockUntil] = useState(null);
  const [shake, setShake] = useState(false);
  const [biometricAttempted, setBiometricAttempted] = useState(false);

  const MAX_ATTEMPTS = 5;
  const LOCK_DURATION = 30000; // 30 seconds

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active' && isLocked) {
        checkLockStatus();
      }
    });

    return () => {
      subscription?.remove();
    };
  }, [isLocked]);

  useEffect(() => {
    if (lockUntil) {
      const timer = setTimeout(() => {
        checkLockStatus();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [lockUntil]);

  useEffect(() => {
    if (isBiometricAvailable && isBiometricEnabled && !biometricAttempted && !isLocked) {
      handleBiometricAuth();
    }
  }, [isBiometricAvailable, isBiometricEnabled, biometricAttempted, isLocked]);

  const checkLockStatus = () => {
    if (lockUntil && Date.now() >= lockUntil) {
      setIsLocked(false);
      setLockUntil(null);
      setAttempts(0);
    }
  };

  const handleBiometricAuth = async () => {
    if (isLocked || biometricAttempted) return;

    setBiometricAttempted(true);

    try {
      const result = await authenticateWithBiometric();
      if (!result.success) {
        console.log('Biometric authentication failed or cancelled');
      }
    } catch (error) {
      console.error('Biometric authentication error:', error);
    }
  };

  const handleNumberPress = (number) => {
    if (isLocked) return;

    if (pin.length < 6) {
      const newPin = pin + number;
      setPin(newPin);

      if (newPin.length === 6) {
        handleVerifyPin(newPin);
      }
    }
  };

  const handleDelete = () => {
    if (isLocked) return;
    setPin(prev => prev.slice(0, -1));
  };

  const handleVerifyPin = async (pinToVerify) => {
    try {
      const isValid = await verifyPin(pinToVerify);

      if (isValid) {
        // PIN is correct, authentication successful
        setPin('');
        setAttempts(0);
      } else {
        // Wrong PIN
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        setPin('');

        // Trigger shake animation
        setShake(true);
        setTimeout(() => setShake(false), 500);

        if (newAttempts >= MAX_ATTEMPTS) {
          // Lock the app
          const lockTime = Date.now() + LOCK_DURATION;
          setLockUntil(lockTime);
          setIsLocked(true);
          Alert.alert(
            'Too Many Attempts',
            `App is locked for ${LOCK_DURATION / 1000} seconds due to too many incorrect attempts.`,
            [{ text: 'OK' }]
          );
        } else {
          const remainingAttempts = MAX_ATTEMPTS - newAttempts;
          Alert.alert(
            'Incorrect PIN',
            `Wrong PIN. ${remainingAttempts} attempt${remainingAttempts !== 1 ? 's' : ''} remaining.`,
            [{ text: 'OK' }]
          );
        }
      }
    } catch (error) {
      console.error('PIN verification error:', error);
      Alert.alert('Error', 'An error occurred while verifying PIN.');
      setPin('');
    }
  };

  const renderDots = () => {
    return (
      <View style={[styles.dotsContainer, shake && styles.shakeAnimation]}>
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index < pin.length && styles.filledDot,
              attempts > 0 && styles.errorDot
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
            // Show biometric button if available and enabled
            if (isBiometricAvailable && isBiometricEnabled && !isLocked) {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.numberButton}
                  onPress={handleBiometricAuth}
                >
                  <Ionicons
                    name="finger-print"
                    size={24}
                    color="#ffffff"
                  />
                </TouchableOpacity>
              );
            }
            return <View key={index} style={styles.numberButton} />;
          }

          if (item === 'delete') {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.numberButton,
                  isLocked && styles.disabledButton
                ]}
                onPress={handleDelete}
                disabled={isLocked}
              >
                <Ionicons
                  name="backspace-outline"
                  size={24}
                  color={isLocked ? "#333333" : "#ffffff"}
                />
              </TouchableOpacity>
            );
          }

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.numberButton,
                isLocked && styles.disabledButton
              ]}
              onPress={() => handleNumberPress(item.toString())}
              disabled={isLocked}
            >
              <Text style={[
                styles.numberText,
                isLocked && styles.disabledText
              ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const getRemainingLockTime = () => {
    if (!lockUntil) return 0;
    return Math.max(0, Math.ceil((lockUntil - Date.now()) / 1000));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.appInfo}>
          <View style={styles.appIconContainer}>
            <Ionicons name="shield-checkmark" size={40} color="#ffffff" />
          </View>
          <Text style={styles.appName}>XPENS</Text>
          <Text style={styles.subtitle}>SECURE ACCESS</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.instruction}>
          {isLocked ? 'APP LOCKED' : 'ENTER YOUR PIN'}
        </Text>

        {isLocked ? (
          <Text style={styles.lockMessage}>
            Too many incorrect attempts.{'\n'}
            Try again in {getRemainingLockTime()} seconds.
          </Text>
        ) : (
          <Text style={styles.securityMessage}>
            Enter your 6-digit PIN to access your expenses
          </Text>
        )}

        {renderDots()}

        {attempts > 0 && !isLocked && (
          <Text style={styles.attemptsWarning}>
            {MAX_ATTEMPTS - attempts} attempts remaining
          </Text>
        )}

        {renderNumberPad()}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Your data is protected with encryption
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 24,
  },
  appInfo: {
    alignItems: 'center',
  },
  appIconContainer: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  appName: {
    fontSize: 32,
    fontWeight: '300',
    color: '#ffffff',
    marginBottom: 8,
    fontFamily: 'monospace',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 12,
    color: '#666666',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  instruction: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  securityMessage: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'monospace',
    letterSpacing: 0.3,
    lineHeight: 18,
  },
  lockMessage: {
    fontSize: 12,
    color: '#ff4444',
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'monospace',
    letterSpacing: 0.3,
    lineHeight: 18,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 16,
  },
  shakeAnimation: {
    // Simple shake effect (would need animation library for smooth animation)
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
  errorDot: {
    borderColor: '#ff4444',
  },
  attemptsWarning: {
    fontSize: 12,
    color: '#ff4444',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'monospace',
    letterSpacing: 0.3,
  },
  numberPad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 300,
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
  disabledButton: {
    borderColor: '#333333',
  },
  numberText: {
    fontSize: 24,
    fontWeight: '300',
    color: '#ffffff',
    fontFamily: 'monospace',
  },
  disabledText: {
    color: '#333333',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  footerText: {
    fontSize: 10,
    color: '#444444',
    fontFamily: 'monospace',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
});

export default PinEntryScreen;
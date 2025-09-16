import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from 'expo-crypto';
import * as LocalAuthentication from 'expo-local-authentication';

const SecurityContext = createContext();

const SECURITY_STORAGE_KEY = '@xpens_security';

const securityReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'SET_PIN_ENABLED':
      return {
        ...state,
        isPinEnabled: action.payload
      };
    case 'SET_AUTHENTICATED':
      return {
        ...state,
        isAuthenticated: action.payload
      };
    case 'SET_PIN_SET':
      return {
        ...state,
        isPinSet: action.payload
      };
    case 'SET_BIOMETRIC_AVAILABLE':
      return {
        ...state,
        isBiometricAvailable: action.payload
      };
    case 'SET_BIOMETRIC_ENABLED':
      return {
        ...state,
        isBiometricEnabled: action.payload
      };
    default:
      return state;
  }
};

const initialState = {
  loading: true,
  isPinEnabled: false,
  isAuthenticated: false,
  isPinSet: false,
  isBiometricAvailable: false,
  isBiometricEnabled: false
};

export const SecurityProvider = ({ children }) => {
  const [state, dispatch] = useReducer(securityReducer, initialState);

  useEffect(() => {
    initializeSecurity();
  }, []);

  const initializeSecurity = async () => {
    try {
      const securityData = await AsyncStorage.getItem(SECURITY_STORAGE_KEY);
      if (securityData) {
        const parsed = JSON.parse(securityData);
        dispatch({ type: 'SET_PIN_ENABLED', payload: parsed.isPinEnabled || false });
        dispatch({ type: 'SET_PIN_SET', payload: !!parsed.pinHash });
        dispatch({ type: 'SET_BIOMETRIC_ENABLED', payload: parsed.isBiometricEnabled || false });
      }

      const biometricAvailable = await LocalAuthentication.hasHardwareAsync() &&
                                await LocalAuthentication.isEnrolledAsync();
      dispatch({ type: 'SET_BIOMETRIC_AVAILABLE', payload: biometricAvailable });
    } catch (error) {
      console.error('Error initializing security:', error);
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const hashPin = async (pin) => {
    try {
      const hash = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        pin + 'xpens_salt_2025',
        { encoding: Crypto.CryptoEncoding.HEX }
      );
      return hash;
    } catch (error) {
      console.error('Error hashing PIN:', error);
      throw error;
    }
  };

  const setupPin = async (pin) => {
    try {
      const pinHash = await hashPin(pin);
      const securityData = {
        isPinEnabled: true,
        pinHash: pinHash,
        createdAt: new Date().toISOString()
      };

      await AsyncStorage.setItem(SECURITY_STORAGE_KEY, JSON.stringify(securityData));
      dispatch({ type: 'SET_PIN_ENABLED', payload: true });
      dispatch({ type: 'SET_PIN_SET', payload: true });
      dispatch({ type: 'SET_AUTHENTICATED', payload: true });
      return true;
    } catch (error) {
      console.error('Error setting up PIN:', error);
      return false;
    }
  };

  const verifyPin = async (pin) => {
    try {
      const securityData = await AsyncStorage.getItem(SECURITY_STORAGE_KEY);
      if (!securityData) {
        return false;
      }

      const parsed = JSON.parse(securityData);
      const pinHash = await hashPin(pin);

      if (pinHash === parsed.pinHash) {
        dispatch({ type: 'SET_AUTHENTICATED', payload: true });
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error verifying PIN:', error);
      return false;
    }
  };

  const changePin = async (oldPin, newPin) => {
    try {
      const isOldPinValid = await verifyPin(oldPin);
      if (!isOldPinValid) {
        return { success: false, error: 'Current PIN is incorrect' };
      }

      const success = await setupPin(newPin);
      return { success, error: success ? null : 'Failed to update PIN' };
    } catch (error) {
      console.error('Error changing PIN:', error);
      return { success: false, error: 'Failed to change PIN' };
    }
  };

  const disableSecurity = async (pin) => {
    try {
      const isValid = await verifyPin(pin);
      if (!isValid) {
        return { success: false, error: 'PIN is incorrect' };
      }

      await AsyncStorage.removeItem(SECURITY_STORAGE_KEY);
      dispatch({ type: 'SET_PIN_ENABLED', payload: false });
      dispatch({ type: 'SET_PIN_SET', payload: false });
      dispatch({ type: 'SET_AUTHENTICATED', payload: true });
      return { success: true };
    } catch (error) {
      console.error('Error disabling security:', error);
      return { success: false, error: 'Failed to disable security' };
    }
  };

  const authenticateWithBiometric = async () => {
    try {
      if (!state.isBiometricAvailable) {
        return { success: false, error: 'Biometric authentication not available' };
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate to access your expenses',
        cancelLabel: 'Use PIN instead',
        disableDeviceFallback: false,
        fallbackLabel: 'Enter PIN'
      });

      if (result.success) {
        dispatch({ type: 'SET_AUTHENTICATED', payload: true });
        return { success: true };
      } else {
        return { success: false, error: result.error || 'Authentication failed' };
      }
    } catch (error) {
      console.error('Biometric authentication error:', error);
      return { success: false, error: 'Biometric authentication failed' };
    }
  };

  const enableBiometric = async () => {
    try {
      if (!state.isBiometricAvailable) {
        return { success: false, error: 'Biometric authentication not available on this device' };
      }

      const securityData = await AsyncStorage.getItem(SECURITY_STORAGE_KEY);
      if (!securityData) {
        return { success: false, error: 'PIN must be set first' };
      }

      const parsed = JSON.parse(securityData);
      const updatedData = {
        ...parsed,
        isBiometricEnabled: true
      };

      await AsyncStorage.setItem(SECURITY_STORAGE_KEY, JSON.stringify(updatedData));
      dispatch({ type: 'SET_BIOMETRIC_ENABLED', payload: true });
      return { success: true };
    } catch (error) {
      console.error('Error enabling biometric:', error);
      return { success: false, error: 'Failed to enable biometric authentication' };
    }
  };

  const disableBiometric = async () => {
    try {
      const securityData = await AsyncStorage.getItem(SECURITY_STORAGE_KEY);
      if (!securityData) {
        return { success: false, error: 'No security settings found' };
      }

      const parsed = JSON.parse(securityData);
      const updatedData = {
        ...parsed,
        isBiometricEnabled: false
      };

      await AsyncStorage.setItem(SECURITY_STORAGE_KEY, JSON.stringify(updatedData));
      dispatch({ type: 'SET_BIOMETRIC_ENABLED', payload: false });
      return { success: true };
    } catch (error) {
      console.error('Error disabling biometric:', error);
      return { success: false, error: 'Failed to disable biometric authentication' };
    }
  };

  const logout = () => {
    dispatch({ type: 'SET_AUTHENTICATED', payload: false });
  };

  const value = {
    ...state,
    setupPin,
    verifyPin,
    changePin,
    disableSecurity,
    authenticateWithBiometric,
    enableBiometric,
    disableBiometric,
    logout
  };

  return (
    <SecurityContext.Provider value={value}>
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};
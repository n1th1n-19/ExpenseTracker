import { useState } from 'react';

export const useCustomAlert = () => {
  const [alertConfig, setAlertConfig] = useState({
    visible: false,
    title: '',
    message: '',
    buttons: [],
    type: 'default'
  });

  const showAlert = (title, message, buttons = [], type = 'default') => {
    setAlertConfig({
      visible: true,
      title,
      message,
      buttons,
      type
    });
  };

  const hideAlert = () => {
    setAlertConfig(prev => ({
      ...prev,
      visible: false
    }));
  };

  // Convenience methods for different alert types
  const showSuccess = (title, message, buttons = []) => {
    showAlert(title, message, buttons, 'success');
  };

  const showError = (title, message, buttons = []) => {
    showAlert(title, message, buttons, 'error');
  };

  const showWarning = (title, message, buttons = []) => {
    showAlert(title, message, buttons, 'warning');
  };

  const showConfirm = (title, message, onConfirm, onCancel = null) => {
    const buttons = [
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: onCancel || (() => {})
      },
      {
        text: 'Confirm',
        style: 'default',
        onPress: onConfirm
      }
    ];
    showAlert(title, message, buttons, 'warning');
  };

  const showDestructiveConfirm = (title, message, onConfirm, onCancel = null) => {
    const buttons = [
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: onCancel || (() => {})
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: onConfirm
      }
    ];
    showAlert(title, message, buttons, 'error');
  };

  return {
    alertConfig,
    showAlert,
    hideAlert,
    showSuccess,
    showError,
    showWarning,
    showConfirm,
    showDestructiveConfirm
  };
};
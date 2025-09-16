import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system/legacy';
import * as Sharing from 'expo-sharing';
import { useExpenses } from '../context/ExpenseContext';
import { useSecurity } from '../context/SecurityContext';
import { categories, formatDate } from '../utils/helpers';
import CustomAlert from '../components/CustomAlert';
import { useCustomAlert } from '../hooks/useCustomAlert';

const SettingsScreen = ({ navigation }) => {
  const { expenses, clearAllExpenses } = useExpenses();
  const {
    isPinEnabled,
    isPinSet,
    isBiometricAvailable,
    isBiometricEnabled,
    disableSecurity,
    enableBiometric,
    disableBiometric
  } = useSecurity();

  const {
    alertConfig,
    hideAlert,
    showSuccess,
    showError,
    showDestructiveConfirm,
    showConfirm
  } = useCustomAlert();

  const handleClearAllData = () => {
    showDestructiveConfirm(
      'Clear All Data',
      `This will permanently delete all ${expenses.length} expenses. This action cannot be undone.`,
      () => {
        try {
          clearAllExpenses();
          showSuccess('Success', 'All data has been cleared successfully!');
        } catch (error) {
          console.error('Error clearing data:', error);
          showError('Error', 'Failed to clear data. Please try again.');
        }
      }
    );
  };

  const handleExportData = async () => {
    if (expenses.length === 0) {
      showError('No Data', 'There are no expenses to export.');
      return;
    }

    try {
      // Create CSV header
      const csvHeader = 'Date,Description,Category,Amount\n';

      // Convert expenses to CSV format
      const csvData = expenses.map(expense => {
        const category = categories.find(cat => cat.id === expense.category);
        const categoryName = category ? category.name : 'Other';
        const formattedDate = formatDate(expense.date);

        // Properly escape CSV fields
        const escapeField = (field) => {
          if (field == null) return '';
          const str = String(field);
          if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
            return `"${str.replace(/"/g, '""')}"`;
          }
          return str;
        };

        return `${escapeField(formattedDate)},${escapeField(expense.description)},${escapeField(categoryName)},${escapeField(expense.amount)}`;
      }).join('\n');

      const csvContent = csvHeader + csvData;

      // Create filename with current date
      const currentDate = new Date().toISOString().split('T')[0];
      const filename = `xpens-expenses-${currentDate}.csv`;
      const fileUri = `${FileSystem.documentDirectory}${filename}`;

      // Write CSV file
      await FileSystem.writeAsStringAsync(fileUri, csvContent);

      // Check if sharing is available
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri, {
          mimeType: 'text/csv',
          dialogTitle: 'Export Xpens Data',
        });
      } else {
        showSuccess(
          'Export Complete',
          `CSV file saved to: ${filename}\n\nFile location: Documents folder`
        );
      }
    } catch (error) {
      console.error('Export error:', error);
      showError(
        'Export Failed',
        `There was an error exporting your data: ${error.message || 'Unknown error'}. Please try again.`
      );
    }
  };

  const handleEnableSecurity = () => {
    navigation.navigate('PinSetup', {
      isChanging: false,
      onComplete: () => {
        showSuccess('Success', 'Security has been enabled successfully!');
      }
    });
  };

  const handleChangePIN = () => {
    navigation.navigate('PinSetup', {
      isChanging: true,
      onComplete: () => {
        showSuccess('Success', 'PIN has been changed successfully!');
      }
    });
  };

  const handleDisableSecurity = () => {
    showConfirm(
      'Disable Security',
      'Enter your current PIN to disable security protection.',
      () => {
        // Navigate to PIN entry for verification
        navigation.navigate('PinEntry', {
          purpose: 'disable',
          onSuccess: async (pin) => {
            const result = await disableSecurity(pin);
            if (result.success) {
              showSuccess('Success', 'Security has been disabled.');
            } else {
              showError('Error', result.error || 'Failed to disable security.');
            }
          }
        });
      }
    );
  };

  const handleEnableBiometric = async () => {
    try {
      const result = await enableBiometric();
      if (result.success) {
        showSuccess('Success', 'Biometric authentication has been enabled!');
      } else {
        showError('Error', result.error || 'Failed to enable biometric authentication.');
      }
    } catch (error) {
      console.error('Enable biometric error:', error);
      showError('Error', 'An error occurred while enabling biometric authentication.');
    }
  };

  const handleDisableBiometric = () => {
    showDestructiveConfirm(
      'Disable Biometric Authentication',
      'Are you sure you want to disable biometric authentication? You will only be able to use your PIN to access the app.',
      async () => {
        try {
          const result = await disableBiometric();
          if (result.success) {
            showSuccess('Success', 'Biometric authentication has been disabled.');
          } else {
            showError('Error', result.error || 'Failed to disable biometric authentication.');
          }
        } catch (error) {
          console.error('Disable biometric error:', error);
          showError('Error', 'An error occurred while disabling biometric authentication.');
        }
      }
    );
  };


  const SettingItem = ({ icon, title, subtitle, onPress, danger = false }) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <View style={styles.settingLeft}>
        <Ionicons
          name={icon}
          size={20}
          color={danger ? '#ff4444' : '#ffffff'}
          style={styles.settingIcon}
        />
        <View style={styles.settingText}>
          <Text style={[styles.settingTitle, danger && styles.dangerText]}>
            {title}
          </Text>
          {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      <Ionicons name="chevron-forward" size={16} color="#666666" />
    </TouchableOpacity>
  );

  const SectionHeader = ({ title }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.appInfo}>
          <View style={styles.appIconContainer}>
            <Ionicons name="wallet" size={40} color="#fff" />
          </View>
          <Text style={styles.appName}>Xpens</Text>
          <Text style={styles.appVersion}>Version 1.0.0</Text>
        </View>
      </View>

      <View style={styles.content}>
        <SectionHeader title="Security" />
        <View style={styles.section}>
          {!isPinEnabled ? (
            <SettingItem
              icon="shield-outline"
              title="Enable Security"
              subtitle="Protect your data with a PIN"
              onPress={handleEnableSecurity}
            />
          ) : (
            <>
              <SettingItem
                icon="key-outline"
                title="Change PIN"
                subtitle="Update your security PIN"
                onPress={handleChangePIN}
              />
              {isBiometricAvailable && (
                <SettingItem
                  icon={isBiometricEnabled ? "finger-print" : "finger-print-outline"}
                  title={isBiometricEnabled ? "Disable Biometric" : "Enable Biometric"}
                  subtitle={isBiometricEnabled ? "Use PIN only for authentication" : "Use fingerprint or face unlock"}
                  onPress={isBiometricEnabled ? handleDisableBiometric : handleEnableBiometric}
                  danger={isBiometricEnabled}
                />
              )}
              <SettingItem
                icon="shield-outline"
                title="Disable Security"
                subtitle="Remove all security protection"
                onPress={handleDisableSecurity}
                danger={true}
              />
            </>
          )}
        </View>

        <SectionHeader title="Data Management" />
        <View style={styles.section}>
          <SettingItem
            icon="download-outline"
            title="Export Data"
            subtitle={`Export all ${expenses.length} expenses as CSV`}
            onPress={handleExportData}
          />
          <SettingItem
            icon="trash-outline"
            title="Clear All Data"
            subtitle="Permanently delete all expenses"
            onPress={handleClearAllData}
            danger={true}
          />
        </View>


        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{expenses.length}</Text>
            <Text style={styles.statLabel}>Total Expenses</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {expenses.length > 0
                ? Math.ceil((Date.now() - new Date(expenses[0]?.createdAt).getTime()) / (1000 * 60 * 60 * 24))
                : 0}
            </Text>
            <Text style={styles.statLabel}>Days Tracking</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.copyrightText}>
            © 2025 Xpens. All rights reserved.
          </Text>
        </View>
      </View>

      <CustomAlert
        visible={alertConfig.visible}
        title={alertConfig.title}
        message={alertConfig.message}
        buttons={alertConfig.buttons}
        type={alertConfig.type}
        onClose={hideAlert}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    backgroundColor: '#000000',
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  appInfo: {
    alignItems: 'center',
  },
  appIconContainer: {
    width: 72,
    height: 72,
    borderRadius: 0,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  appName: {
    fontSize: 32,
    fontWeight: '300',
    color: '#ffffff',
    marginBottom: 8,
    fontFamily: 'monospace',
    letterSpacing: 2,
  },
  appVersion: {
    fontSize: 12,
    color: '#666666',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffff',
    marginTop: 32,
    marginBottom: 16,
    marginLeft: 0,
    fontFamily: 'monospace',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  section: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#1a1a1a',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
    backgroundColor: 'transparent',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    marginRight: 16,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: 4,
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  settingSubtitle: {
    fontSize: 12,
    color: '#666666',
    fontFamily: 'monospace',
    letterSpacing: 0.3,
  },
  dangerText: {
    color: '#ff4444',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderRadius: 0,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#1a1a1a',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '300',
    color: '#ffffff',
    marginBottom: 8,
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  statLabel: {
    fontSize: 11,
    color: '#666666',
    textAlign: 'center',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  footer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 32,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
  },
  footerText: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 8,
    fontFamily: 'monospace',
  },
  copyrightText: {
    fontSize: 10,
    color: '#444444',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
});

export default SettingsScreen;
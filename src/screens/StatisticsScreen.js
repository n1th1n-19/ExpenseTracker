import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { useExpenses } from '../context/ExpenseContext';
import {
  categories,
  formatCurrency,
  getMonthlyTotal,
  getCategoryTotal
} from '../utils/helpers';

const { width } = Dimensions.get('window');

const StatisticsScreen = () => {
  const { expenses } = useExpenses();

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const stats = useMemo(() => {
    const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const monthlyTotal = getMonthlyTotal(expenses, currentMonth, currentYear);
    const expenseCount = expenses.length;
    const avgExpense = expenseCount > 0 ? totalAmount / expenseCount : 0;

    const categoryStats = categories.map(category => {
      const total = getCategoryTotal(expenses, category.id);
      const count = expenses.filter(expense => expense.category === category.id).length;
      const percentage = totalAmount > 0 ? (total / totalAmount) * 100 : 0;
      return {
        ...category,
        total,
        count,
        percentage
      };
    }).filter(stat => stat.count > 0).sort((a, b) => b.total - a.total);

    const last7Days = expenses.filter(expense => {
      const expenseDate = new Date(expense.date);
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      return expenseDate >= sevenDaysAgo;
    });

    const weeklyTotal = last7Days.reduce((sum, expense) => sum + expense.amount, 0);

    return {
      totalAmount,
      monthlyTotal,
      weeklyTotal,
      expenseCount,
      avgExpense,
      categoryStats
    };
  }, [expenses, currentMonth, currentYear]);

  const StatCard = ({ title, value, subtitle, color = '#ffffff' }) => (
    <View style={[styles.statCard, { borderLeftColor: color }]}>
      <Text style={styles.statTitle}>{title}</Text>
      <Text style={styles.statValue}>{value}</Text>
      {subtitle && <Text style={styles.statSubtitle}>{subtitle}</Text>}
    </View>
  );

  const CategoryBar = ({ category, total, percentage }) => (
    <View style={styles.categoryRow}>
      <View style={styles.categoryInfo}>
        <View style={styles.categoryIcon}>
          <Text style={styles.categoryEmoji}>{category.icon}</Text>
        </View>
        <Text style={styles.categoryName}>{category.name}</Text>
      </View>
      <View style={styles.categoryStats}>
        <Text style={styles.categoryAmount}>{formatCurrency(total)}</Text>
        <View style={styles.progressBarContainer}>
          <View
            style={[
              styles.progressBar,
              {
                width: `${Math.min(percentage, 100)}%`
              }
            ]}
          />
        </View>
        <Text style={styles.percentage}>{percentage.toFixed(1)}%</Text>
      </View>
    </View>
  );

  const SpendingChart = () => {
    const last7Days = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dayExpenses = expenses.filter(expense => {
        const expenseDate = new Date(expense.date);
        return expenseDate.toDateString() === date.toDateString();
      });
      const dayTotal = dayExpenses.reduce((sum, exp) => sum + exp.amount, 0);
      last7Days.push({
        day: date.toLocaleDateString('en', { weekday: 'short' }).toUpperCase(),
        amount: dayTotal,
        date: date
      });
    }

    const maxAmount = Math.max(...last7Days.map(d => d.amount)) || 100;

    return (
      <View style={styles.chartContainer}>
        <View style={styles.chartBars}>
          {last7Days.map((day, index) => (
            <View key={index} style={styles.chartBarContainer}>
              <View style={styles.chartBarWrapper}>
                <View
                  style={[
                    styles.chartBar,
                    {
                      height: `${Math.max((day.amount / maxAmount) * 100, 2)}%`
                    }
                  ]}
                />
              </View>
              <Text style={styles.chartLabel}>{day.day}</Text>
              <Text style={styles.chartValue}>
                {day.amount > 0 ? formatCurrency(day.amount).replace('₹', '') : '0'}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  if (expenses.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No expenses to analyze</Text>
        <Text style={styles.emptySubtext}>Add some expenses to see statistics</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.statsGrid}>
          <StatCard
            title="Total Spent"
            value={formatCurrency(stats.totalAmount)}
            subtitle={`${stats.expenseCount} expenses`}
          />
          <StatCard
            title="This Month"
            value={formatCurrency(stats.monthlyTotal)}
            color="#ffffff"
          />
          <StatCard
            title="Last 7 Days"
            value={formatCurrency(stats.weeklyTotal)}
            color="#ffffff"
          />
          <StatCard
            title="Average"
            value={formatCurrency(stats.avgExpense)}
            subtitle="per expense"
            color="#ffffff"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Last 7 Days</Text>
        <SpendingChart />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Spending by Category</Text>
        <View style={styles.categoryContainer}>
          {stats.categoryStats.map((categoryData, index) => (
            <CategoryBar
              key={categoryData.id}
              category={categoryData}
              total={categoryData.total}
              percentage={categoryData.percentage}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Insights</Text>
        <View style={styles.insightsContainer}>
          <View style={styles.insightCard}>
            <Text style={styles.insightTitle}>Top Category</Text>
            <View style={styles.insightContent}>
              <Text style={styles.insightEmoji}>
                {stats.categoryStats[0]?.icon || '📝'}
              </Text>
              <Text style={styles.insightText}>
                {stats.categoryStats[0]?.name || 'No data'}
              </Text>
            </View>
          </View>

          <View style={styles.insightCard}>
            <Text style={styles.insightTitle}>Monthly Avg</Text>
            <Text style={styles.insightAmount}>
              {formatCurrency(stats.monthlyTotal)}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    backgroundColor: '#000000',
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: 8,
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  emptySubtext: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    fontFamily: 'monospace',
    letterSpacing: 0.3,
  },
  section: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: 20,
    fontFamily: 'monospace',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  statsGrid: {
    gap: 16,
  },
  statCard: {
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#1a1a1a',
  },
  statTitle: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 8,
    fontFamily: 'monospace',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '300',
    color: '#ffffff',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  statSubtitle: {
    fontSize: 10,
    color: '#444444',
    marginTop: 8,
    fontFamily: 'monospace',
    letterSpacing: 0.3,
  },
  categoryContainer: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    padding: 0,
    borderWidth: 1,
    borderColor: '#1a1a1a',
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  categoryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryIcon: {
    width: 32,
    height: 32,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    backgroundColor: 'transparent',
  },
  categoryEmoji: {
    fontSize: 14,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffff',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  categoryStats: {
    alignItems: 'flex-end',
    flex: 1,
  },
  categoryAmount: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: 8,
    fontFamily: 'monospace',
    letterSpacing: 0.3,
  },
  progressBarContainer: {
    width: 64,
    height: 4,
    backgroundColor: '#1a1a1a',
    borderRadius: 0,
    marginBottom: 4,
  },
  progressBar: {
    height: '100%',
    borderRadius: 0,
    backgroundColor: '#ffffff',
  },
  percentage: {
    fontSize: 10,
    color: '#666666',
    fontFamily: 'monospace',
    letterSpacing: 0.3,
  },
  insightsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  insightCard: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 0,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1a1a1a',
  },
  insightTitle: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 12,
    fontFamily: 'monospace',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  insightContent: {
    alignItems: 'center',
  },
  insightEmoji: {
    fontSize: 20,
    marginBottom: 8,
  },
  insightText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  insightAmount: {
    fontSize: 16,
    fontWeight: '300',
    color: '#ffffff',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  chartContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#1a1a1a',
    borderRadius: 0,
    padding: 20,
  },
  chartBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 120,
    marginBottom: 16,
  },
  chartBarContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 2,
  },
  chartBarWrapper: {
    height: 80,
    width: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  chartBar: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 0,
    minHeight: 2,
  },
  chartLabel: {
    fontSize: 10,
    color: '#666666',
    marginTop: 8,
    fontFamily: 'monospace',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  chartValue: {
    fontSize: 9,
    color: '#444444',
    marginTop: 2,
    fontFamily: 'monospace',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
});

export default StatisticsScreen;
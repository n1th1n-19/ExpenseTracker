export const categories = [
  { id: 'food', name: 'Food', icon: 'restaurant-outline', color: '#FF6B6B' },
  { id: 'transport', name: 'Transport', icon: 'car-outline', color: '#4ECDC4' },
  { id: 'entertainment', name: 'Entertainment', icon: 'film-outline', color: '#45B7D1' },
  { id: 'shopping', name: 'Shopping', icon: 'bag-outline', color: '#96CEB4' },
  { id: 'bills', name: 'Bills', icon: 'receipt-outline', color: '#FECA57' },
  { id: 'health', name: 'Health', icon: 'medical-outline', color: '#FF9FF3' },
  { id: 'education', name: 'Education', icon: 'school-outline', color: '#54A0FF' },
  { id: 'other', name: 'Other', icon: 'ellipsis-horizontal-outline', color: '#8E8E8E' }
];

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount);
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const getMonthlyTotal = (expenses, month, year) => {
  return expenses
    .filter(expense => {
      const expenseDate = new Date(expense.date);
      return expenseDate.getMonth() === month && expenseDate.getFullYear() === year;
    })
    .reduce((total, expense) => total + expense.amount, 0);
};

export const getCategoryTotal = (expenses, categoryId) => {
  return expenses
    .filter(expense => expense.category === categoryId)
    .reduce((total, expense) => total + expense.amount, 0);
};

export const filterExpensesByDateRange = (expenses, startDate, endDate) => {
  return expenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expenseDate >= startDate && expenseDate <= endDate;
  });
};

export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
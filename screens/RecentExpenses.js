import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../context/expenses-context';
import { getDateMinusDays } from '../util/date';

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  
  const recentExpenses = expensesCtx.expenses.filter((expenses) => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 7);
    return expenses.date > sevenDaysAgo;
  });
  return (
      <ExpensesOutput expenses={recentExpenses} expensesPeriod="LAst 7 Days"/>
  )
}

const styles = StyleSheet.create({
  flex: 1
  }
);

export default RecentExpenses
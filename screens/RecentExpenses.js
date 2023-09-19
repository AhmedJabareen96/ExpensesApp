import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../context/expenses-context';

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
      <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="LAst 7 Days"/>
  )
}

const styles = StyleSheet.create({
  flex: 1
  }
);

export default RecentExpenses
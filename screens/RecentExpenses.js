import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const RecentExpenses = () => {
  return (
      <ExpensesOutput expensesPeriod="LAst 7 Days"/>
  )
}

const styles = StyleSheet.create({
  flex: 1
  }
);

export default RecentExpenses
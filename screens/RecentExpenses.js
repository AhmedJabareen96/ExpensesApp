import { View, Text } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const RecentExpenses = () => {
  return (
    <View>
      <ExpensesOutput expensesPeriod="LAst 7 Days"/>
    </View>
  )
}

export default RecentExpenses
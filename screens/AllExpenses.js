import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const AllExpenses = () => {
  return (
      <ExpensesOutput expensesPeriod="Total"/>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


export default AllExpenses
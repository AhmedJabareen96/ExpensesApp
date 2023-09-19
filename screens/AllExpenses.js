import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../context/expenses-context';

const AllExpenses = () => {

  const expensesCtx = useContext(ExpensesContext);
  return (
      <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total"/>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


export default AllExpenses
import { View, StyleSheet } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import {GlobalStyles} from '../../constants/styles'


const ExpensesOutput = ({ expenses, expensesPeriod}) => {
  return (
    <View style={styles.container}>
    <View >
       <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
        <ExpensesList expenses={expenses}/>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 12,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    }
});

export default ExpensesOutput
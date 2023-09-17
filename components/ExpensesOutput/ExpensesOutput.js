import { View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

const DUMMY_EXPENSES = [
    {
        id:'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2023-09-17')
    },
    {
        id:'e2',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date('2023-09-16')
    },
    {
        id:'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2023-09-10')
    },
    {
        id:'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2023-08-10'),
    },
    {
        id:'e5',
        description: 'Another bol',
        amount: 15.99,
        date: new Date('2023-02-10')
    }
];

const ExpensesOutput = ({ expenses, expensesPeriod}) => {
  return (
    <View>
       <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
        <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  )
}

export default ExpensesOutput
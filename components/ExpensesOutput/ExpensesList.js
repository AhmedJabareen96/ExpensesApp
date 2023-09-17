import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import ExpenseItem from '../ExpenseItem';


function renderExpenseItem(itemData){
  return(
   <ExpenseItem {...itemData.item}/>
  );
}


const ExpensesList = ({ expenses }) => {
  return (
      <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => {
        return item.id
      }}
      />
  )
}

const styles = StyleSheet.create({
    container: {
    }
});

export default ExpensesList
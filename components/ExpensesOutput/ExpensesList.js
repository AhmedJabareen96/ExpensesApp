import { View, Text, FlatList } from 'react-native'
import React from 'react'


function renderExpenseItem(itemData){
  return(
    <Text> {itemData.item.description}</Text>
  );
}


const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => {
        return item.id
      }}
      />
    </View>
  )
}

export default ExpensesList
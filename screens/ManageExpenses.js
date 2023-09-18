import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const ManageExpenses = ({ route, navigation }) => {
  
  const editedExpenseId = route.params?.expenseId;

  // if editedExpenseId is defined then we are in editting mode
  const isEditing = !!editedExpenseId // turn into boolean

    useLayoutEffect(() => {
      navigation.setOptions({
        title: isEditing ? 'Edit Expense' : ' Add Expense'
      });
    }, [isEditing, navigation])


  return (
      <Text>ManageExpenses</Text>
  )
}

export default ManageExpenses
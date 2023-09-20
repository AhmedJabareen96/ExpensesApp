import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Input from './Input'

const ExpenseForm = () => {

    function amountChangeHandler(){

    }
  return (

      <View>
        <Input label="amount" textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler
        }}/>
        <Input label="date" textInputConfig={{
            placeholder: 'yyyy-mm-dd',
            maxLength: 10,
            onChangeText: () => {}

        }}/>
        <Input label="description" textInputConfig={{
            multiline: true,
            numberOfLines: 5,
            autoCapitalize: 'none'
        }}/>
      </View>
    
  )
}



export default ExpenseForm
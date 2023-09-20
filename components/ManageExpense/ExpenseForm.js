import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Input from './Input'

const ExpenseForm = () => {

    function amountChangeHandler(){

    }
  return (

      <View style={styles.formStyle}>
        <View style={styles.fieldContainer}>
        <Input style={styles.rowInput} label="amount" textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler
        }}/>
        <Input style={styles.rowInput} label="date" textInputConfig={{
            placeholder: 'yyyy-mm-dd',
            maxLength: 10,
            onChangeText: () => {}

        }}/>
        </View>
        <Input label="description" textInputConfig={{
            multiline: true,
            numberOfLines: 5,
            autoCapitalize: 'none'
        }}/>
      </View>
    
  )
}

const styles = StyleSheet.create({
    formStyle: {
        margin: 2
    },
    fieldContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    }
});



export default ExpenseForm
import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'

const ExpenseForm = () => {
    const [inputVals, setInputVals] = useState({
        amount: '',
        date: '',
        description: ''
    });
    function inputChangedValue(inputIdentifier, enteredText){
        setInputVals((prev) => {
            return {...prev, [inputIdentifier]: enteredText}
        });
    }
  return (

      <View style={styles.formStyle}>
        <View style={styles.fieldContainer}>
        <Input style={styles.rowInput} label="amount" textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedValue.bind(this, 'amount'),
            value: inputVals.amount
        }}/>
        <Input style={styles.rowInput} label="date" textInputConfig={{
            placeholder: 'yyyy-mm-dd',
            maxLength: 10,
            onChangeText: () => {},
            value: inputVals.date

        }}/>
        </View>
        <Input label="description" textInputConfig={{
            multiline: true,
            numberOfLines: 5,
            autoCapitalize: 'none',
            value: inputVals.description
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
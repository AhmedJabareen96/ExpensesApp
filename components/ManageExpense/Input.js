import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles';

const Input = ({label, textInputConfig}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...textInputConfig}/>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 12
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary400,
        marginBottom: 4

    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 2,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.primary700,
        textAlignVertical: 'top'
    },

});

export default Input
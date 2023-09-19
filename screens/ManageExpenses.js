import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import CustomButton from '../components/UI/CustomButton';
import {ExpensesContext} from '../context/expenses-context'

const ManageExpenses = ({ route, navigation }) => {
  
  const editedExpenseId = route.params?.expenseId;

  // if editedExpenseId is defined then we are in editting mode
  const isEditing = !!editedExpenseId // turn into boolean
  const expensesCtx = useContext(ExpensesContext);

  function deleteExpenseHander() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if(isEditing){
      expensesCtx.updateExpense()
    }
    navigation.goBack();
  }

    useLayoutEffect(() => {
      navigation.setOptions({
        title: isEditing ? 'Edit Expense' : ' Add Expense'
      });
    }, [isEditing, navigation])


  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <CustomButton style={styles.button} mode='flat' onPress={cancelHandler}> Cancel </CustomButton>
          <CustomButton style={styles.button} mode='' onPress={confirmHandler}> {isEditing ? 'Update' : 'Add'} </CustomButton>
        </View>
        <View style={styles.deleteContainer}>
        {
          isEditing && <IconButton icon='trash' color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHander}/>
        }
        </View>
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: '50%',
    marginHorizontal: 6
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
});

export default ManageExpenses
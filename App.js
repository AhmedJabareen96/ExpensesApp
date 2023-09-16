import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const ExpensesOverview = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Recent Expenses" component={RecentExpenses}/>
        <Tab.Screen name="AllExpenses" component={AllExpenses}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
          <Stack.Navigator initialRouteName='ExpensesOverview'>
            <Stack.Screen name='ManageExpense' component={ManageExpenses}/>
            <Stack.Screen name='ExpensesOverview' component={ExpensesOverview}/>
          </Stack.Navigator>
      </NavigationContainer>
    </>


  );
}


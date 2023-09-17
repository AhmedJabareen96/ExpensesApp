import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles'
import {Ionicons} from '@expo/vector-icons'
import IconButton from './components/UI/IconButton';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const ExpensesOverview = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: GlobalStyles.colors.primary500
      },
      headerTintColor: 'white',
      tabBarStyle: {
        backgroundColor: GlobalStyles.colors.primary500
      },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      tabBarInactiveTintColor: 'white',
      headerRight: ({ tintColor}) => {
        return <IconButton icon='add' size={24} color={tintColor} 
          onPress={() => console.log("pressed!")}
        />
      }
    }}>
        <Tab.Screen name="Recent Expenses" component={RecentExpenses} options={
          {
            title: 'Recent Expenses',
            tabBarLabel:'Recent',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name='hourglass' size={size} color={color}/>
            }
          }
        }/>
        <Tab.Screen name="AllExpenses" component={AllExpenses} options={{
          
            title: 'All Expenses',
            tabBarLabel:'All Expenses',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name='calendar' size={size} color={color}/>
            }
          
        }}/>
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
            <Stack.Screen name='ExpensesOverview' component={ExpensesOverview} options={{
              headerShown: false
              
            }}/>
          </Stack.Navigator>
      </NavigationContainer>
    </>


  );
}


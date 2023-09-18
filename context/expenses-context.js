import { createContext, useReducer } from "react";
import { DUMMY_EXPENSES } from "../components/ExpensesOutput/ExpensesOutput";

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ sescription, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, { sescription, amount, date}) => {}
});


function expensesReducer(state, action) {
    switch (action.type){
        case 'ADD':
            const id =  new Date().toString() + Math.random().toString();
            return [{...action.payload}, ...state];
        case 'UPDATE':
            const updateExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const itemToUpdate = state[updateExpenseIndex];
            const newObj = {...itemToUpdate, ...action.payload.data};
            const updateExpenses = [...state];
            updateExpenses[updateExpenseIndex] = newObj;
            return updateExpenses;
        case 'DELETE':
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

function ExpensesContextProvider({ children } ) {
    // define state
    //define functions
    // define initial state
    function addExpense(expenseData){
        dispatch({type: 'ADD', payload: expenseData});
    }

    function deleteExpense(id){
        dispatch({type: 'DELETE', payload: id});
    }

    function editExpense(id, expenseData){
        dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
    }

    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    return <ExpensesContext.Provider> {children} </ExpensesContext.Provider>
} 

export default ExpensesContextProvider; 
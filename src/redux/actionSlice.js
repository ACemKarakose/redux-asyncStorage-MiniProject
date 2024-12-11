import {createSlice} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";


const initialState = {

    name : null,
    counter : 0,
}


const actionSlice = createSlice({
    name : 'taskTest',
    initialState,
    reducers : {

        setName : (state , action) => {
            state.name = action.payload
        },
        setCounter : (state, action) => {
            state.counter = action.payload
        },
        setIncrease : (state , action) => {
            state.counter  = state.counter + action.payload;
        },
        setDecrease : (state, action) => {
            state.counter = state.counter - action.payload;
        }
    }
})

export const {setName,setCounter,setIncrease,setDecrease} = actionSlice.actions;



export  const loadCradential = () => async dispatch => {
    try {

        const name =  await AsyncStorage.getItem('name')
        const counter =  await AsyncStorage.getItem('counter')

        if (name){
            dispatch(setName(name))
        }else {
            console.log("Name value is null.")
        }if (counter){
            dispatch(setCounter(JSON.parse(counter)))
        }else {
            console.log("counter value is null.")
        }


    }catch (e) {
        console.log("Error in => " , e)
    }
}

export const saveName = (name) => async  dispatch => {

    try {
        dispatch(setName(name))
        await AsyncStorage.setItem('name', name)
    }catch (e) {
        console.log("Error in => " , e)
    }
}

export const  deleteName = () => async dispatch => {
    try {
        dispatch(setName(null))
        await AsyncStorage.removeItem('name')
    }catch (e) {
        console.log("Error in => " , e)
    }
}

export const saveIncrease = (value) => async  (dispatch, getState) => {

    try {
        dispatch(setIncrease(value))
        const state = getState();
        const counterValue = state.taskTest?.counter
        await AsyncStorage.setItem('counter', JSON.stringify(counterValue))
    }catch (e) {
        console.log("Error in => " , e)
    }
}

export const saveDecrease = (value) => async  (dispatch, getState) => {

    try {
        dispatch(setDecrease(value))
        const state = getState();
        const counterValue = state.taskTest?.counter
        await AsyncStorage.setItem('counter', JSON.stringify(counterValue))
    }catch (e) {
        console.log("Error in => " , e)
    }
}


export default actionSlice.reducer;

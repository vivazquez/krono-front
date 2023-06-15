import {createContext, useReducer } from 'react';

export const Store = createContext();


const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null,
}

const reducer = (state, action)=> {
    switch(action.type){
        case 'USER_LOGIN':
            return {...state, userInfo: action.payload}; 
        case 'USER_SIGNOUT':
            return {...state, userInfo: null};
    }
}

export const StoreProvider =(props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};
    return (
        <Store.Provider value={value}>{props.children}</Store.Provider>
    )
} 
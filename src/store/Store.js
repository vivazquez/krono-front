import {createContext, useReducer } from 'react';

export const Store = createContext();


const initialState = {
    banners: [],
    collections: []
}

const reducer = (state, action)=> {
    switch(action.type){
        case 'HOME_BANNERS':
            return {...state, banners: action.payload}; 
        case 'GEM_COLLECTIONS':
            return {...state, collections: action.payload};
    }
}

export const StoreProvider =(props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};
    return (
        <Store.Provider value={value}>{props.children}</Store.Provider>
    )
} 
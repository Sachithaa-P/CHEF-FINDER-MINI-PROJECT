// // store.js
// import { createStore, combineReducers } from "redux";
// import rootReducer from './reducer';

// // const rootReducer = combineReducers({
// //   auth: rootReducer,
// // });

// const store = createStore(rootReducer);

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import caseReducer from "./userSlice"
import { createSlice } from '@reduxjs/toolkit'


export default configureStore({
    reducer:{
        case : caseReducer
    }
})
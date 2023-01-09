import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

// console.log(counterReducer)

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
})

// console.log(store)
export default store;
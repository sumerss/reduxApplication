import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';

// console.log(counterReducer)

const store = configureStore({
    reducer: counterReducer
})

export default store;
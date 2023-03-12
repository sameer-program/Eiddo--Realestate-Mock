import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../app/counterSlice'
import cartReducer from '../app/cartSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
})
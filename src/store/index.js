import { configureStore, combineReducers } from "@reduxjs/toolkit"
import recipeReducer from "./recipe"

const reducers = combineReducers({
  recipeReducer,
})

const store = configureStore({
  reducer: reducers,
})

export default store

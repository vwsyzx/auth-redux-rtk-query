import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from '../api/userSlice/userSlice'
import {api} from '../api/api'

const rootReducer = combineReducers({
    userSlice,
    [api.reducerPath]: api.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(api.middleware)
    }
})

export default store

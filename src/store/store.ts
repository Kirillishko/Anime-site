import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {animeApi} from "../services/AnimeService";


const rootReducer = combineReducers({
    [animeApi.reducerPath] : animeApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(animeApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
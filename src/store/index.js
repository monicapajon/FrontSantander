import {configureStore} from '@reduxjs/toolkit';
import eventoReducer from './reducers/eventoReducer';
import filtroReducer from './reducers/filtroReducer';

export const store = configureStore({
    reducer: {
        eventos: eventoReducer,
        filtro: filtroReducer
    }
})
import React,{createContext, userContext, useReducer} from "react";
import { initialState } from './Reducer';

export const DataLayerContext= createContext();

export const DataLayer=({initialState,reducer,children})=>(
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
        </DataLayerContext.Provider>

);

export const useDataLayerValue=()=>userContext(DataLayerContext);
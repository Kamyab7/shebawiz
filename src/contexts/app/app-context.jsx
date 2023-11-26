import {createContext, useContext, useEffect, useReducer} from "react";
import appReducer from "./app-reducer.jsx";


const AppContext = createContext();
const initialState = {
    theme: localStorage.getItem('theme') || 'dark',
};
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const changeTheme = (theme) => {
        dispatch({type: 'CHANGE_THEME', payload: theme})
    }
    useEffect(() => {
        localStorage.setItem('theme',state.theme);
    }, [state.theme]);
    return <AppContext.Provider value={{...state,changeTheme}}>
        {children}
    </AppContext.Provider>
}
const useAppContext = () => {
    return useContext(AppContext);
}
export {useAppContext, AppProvider};
import {createContext, useContext, useReducer} from "react";
import appReducer from "./app-reducer.jsx";


const AppContext = createContext();
const initialState = {
};
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return <AppContext.Provider value={{state, }}>
        {children}
    </AppContext.Provider>
}
const useAppContext = () => {
    return useContext(AppContext);
}
export {useAppContext,AppProvider};
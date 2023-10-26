import {createContext, useContext, useState} from "react";
import samanBank from "@assets/bank-iran/saman.png";

const BankContext = createContext();
const BankProvider = ({children}) => {
    const [bank, setBank] = useState({name:'',image:samanBank});
    return (
        <BankContext.Provider value={{bank, setBank}}>
            {children}
        </BankContext.Provider>
    )
}
const useBankContext = () => {
    return useContext(BankContext)
}
export {useBankContext, BankProvider}
import {createContext, useContext, useState} from "react";
import defaultImage from "@assets/bank-iran/no-img.png";

const BankContext = createContext();
const BankProvider = ({children}) => {
    const [bank, setBank] = useState({image:defaultImage});
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
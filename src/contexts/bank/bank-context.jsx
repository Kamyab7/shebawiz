import {createContext, useContext, useState} from "react";
import defaultImage from "@assets/bank-iran/no-img.png";
import ayandehBank from "@assets/bank-iran/ayandeh.png";
import eghtesadnovinBank from "@assets/bank-iran/eghtesad.png";
import karafarinBank from "@assets/bank-iran/karafarin.png";
import keshavarziBank from "@assets/bank-iran/keshavarsi.png";
import maskanBank from "@assets/bank-iran/maskan.png";
import meliBank from "@assets/bank-iran/meli.png";
import mellatBank from "@assets/bank-iran/mellat.png";
import parsianBank from "@assets/bank-iran/parsian.png";
import pasargadBank from "@assets/bank-iran/pasargad.png";
import postBank from "@assets/bank-iran/postbank.png";
import refahBank from "@assets/bank-iran/refah.png";
import saderatBank from "@assets/bank-iran/saderat.png";
import samanBank from "@assets/bank-iran/saman.png";
import sanatmadanBank from "@assets/bank-iran/sanatmadan.png";
import sarmayeBank from "@assets/bank-iran/sarmaye.png";
import sepahBank from "@assets/bank-iran/sepah.png";

const BankContext = createContext();
const BankProvider = ({children}) => {
    const [bank, setBank] = useState({image: defaultImage});
    const banksData = [
        //{id: 1, name: "انصار", image: ansarBank},
        {id: "062", name: "آینده", image: ayandehBank},
        //{id: 3, name: "دی", image: deyBank},
        {id: "055", name: "اقتصاد نوین", image: eghtesadnovinBank},
        //{id: 5, name: "گردشگری", image: gardeshgariBank},
        //{id: 6, name: "قوامین", image: ghavaminBank},
        //{id: 7, name: "ایران زمین", image: iranzaminBank},
        {id: "053", name: "کارآفرین", image: karafarinBank},
        {id: "016", name: "کشاورزی", image: keshavarziBank},
        //{id: 10, name: "خاورمیانه", image: khavarmiyanehBank},
        {id: "014", name: "مسکن", image: maskanBank},
        //{id: 12, name: "مهر اقتصاد", image: mehrBank},
        {id: "017", name: "ملی", image: meliBank},
        {id: "012", name: "ملت", image: mellatBank},
        {id: "054", name: "پارسیان", image: parsianBank},
        {id: "057", name: "پاسارگاد", image: pasargadBank},
        {id: "021", name: "پست بانک", image: postBank},
        {id: "013", name: "رفاه", image: refahBank},
        //{id: 19, name: "رسالت", image: resalatBank},
        {id: "019", name: "صادرات", image: saderatBank},
        {id: 21, name: "سامان", image: samanBank},
        {id: 22, name: "صنعت معدن", image: sanatmadanBank},
        {id: "058", name: "سرمایه", image: sarmayeBank},
        {id: "015", name: "سپه", image: sepahBank},
        //{id: 25, name: "شهر", image: shahrBank},
        //{id: 26, name: "سینا", image: sinaBank},
        //{id: 27, name: "تجارت", image: tejaratBank},
        //{id: 28, name: "توسعه", image: toseBank},
    ];

    const resetBank = () => {
        setBank({image: defaultImage, id: undefined});
    };
    return (
        <BankContext.Provider value={{bank, setBank, resetBank,banksData}}>
            {children}
        </BankContext.Provider>
    )
}
const useBankContext = () => {
    return useContext(BankContext)
}
export {useBankContext, BankProvider}
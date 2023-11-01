import samanBank from '@assets/bank-iran/saman.png';
import mellatBank from '@assets/bank-iran/mellat.png';
import ansarBank from '@assets/bank-iran/ansar.png';
import ayandehBank from '@assets/bank-iran/ayandeh.png';
import deyBank from '@assets/bank-iran/day.png';
import eghtesadnovinBank from '@assets/bank-iran/eghtesad.png';
import gardeshgariBank from '@assets/bank-iran/gardeshgari.png';
import ghavaminBank from '@assets/bank-iran/ghavamin.png';
import iranzaminBank from '@assets/bank-iran/iranzamin.png';
import karafarinBank from '@assets/bank-iran/karafarin.png';
import keshavarziBank from '@assets/bank-iran/keshavarsi.png';
import khavarmiyanehBank from '@assets/bank-iran/khavarmiyaneh.png';
import maskanBank from '@assets/bank-iran/maskan.png';
import mehrBank from '@assets/bank-iran/mehreqtesad.png';
import meliBank from '@assets/bank-iran/meli.png';
import parsianBank from '@assets/bank-iran/parsian.png';
import pasargadBank from '@assets/bank-iran/pasargad.png';
import postBank from '@assets/bank-iran/postbank.png';
import refahBank from '@assets/bank-iran/refah.png';
import resalatBank from '@assets/bank-iran/resalat.png';
import saderatBank from '@assets/bank-iran/saderat.png';
import sanatmadanBank from '@assets/bank-iran/sanatmadan.png';
import sarmayeBank from '@assets/bank-iran/sarmaye.png';
import sepahBank from '@assets/bank-iran/sepah.png';
import shahrBank from '@assets/bank-iran/shahr.png';
import sinaBank from '@assets/bank-iran/sina.png';
import tejaratBank from '@assets/bank-iran/tejarat.png';
import toseBank from '@assets/bank-iran/tosehe.png';
import {useEffect, useRef, useState} from "react";
import {useBankContext} from "../../../contexts/bank/bank-context.jsx";
import BankList from "./bank-list.jsx";
import '../../../../public/css/styles/bank.css';

const ChangeBank = ({onBankSelected}) => {
    const banks = [
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
    const [show, setShow] = useState(false);
    const ref = useRef();
    const {bank, setBank} = useBankContext();
    useEffect(() => {
        const checkIfClickOutside = e => {
            if (show && ref.current && !ref.current.contains(e.target)) {
                setShow(false);
            }
        }
        document.addEventListener('mousedown', checkIfClickOutside);
        return () => {
            document.removeEventListener('mousedown', checkIfClickOutside);
        }
    }, [show])
    useEffect(() => {
        setShow(false)
    }, [bank]);
    const handleBankChange = (newBank) => {
        setBank(newBank);
        setShow(false);
        onBankSelected(newBank.id);
    };
    return (
        <div className='dropdow'>
            <a className='nav-flag dropdown-toggle' onClick={() => setShow(true)}>
                <img src={bank.image} alt={bank.name}/>
            </a>
            <div className={`dropdown-menu dropdown-menu-end custom-scroll ${show ? 'show' : undefined}`}
                 style={{
                     backgroundColor: '#F8F8F8',
                     textAlign: 'right',
                     maxHeight: '200px',
                     overflowY: "auto",
                     borderRadius: '10px',
                     boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
                     padding: '10px'
                 }}
                 ref={ref}>
                <BankList banks={banks} changeBanks={handleBankChange}/>
            </div>
        </div>
    )
}
export default ChangeBank;
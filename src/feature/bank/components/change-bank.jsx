import {useEffect, useRef, useState} from "react";
import {useBankContext} from "../../../contexts/bank/bank-context.jsx";
import BankList from "./bank-list.jsx";
import '../../../../public/css/styles/bank.css';

const ChangeBank = ({onBankSelected,setBankDetails}) => {
    const [show, setShow] = useState(false);
    const ref = useRef();
    const {bank, setBank,banksData} = useBankContext();
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
        setBankDetails({
            name: newBank.name,
            id: newBank.id,
            image: newBank.image,
        });
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
                <BankList banks={banksData} changeBanks={handleBankChange}/>
            </div>
        </div>
    )
}
export default ChangeBank;
import {useEffect, useRef, useState} from "react";
import ReactiveButton from "reactive-button";
import {AccountType} from "../../../utilities/AccountTypes.ts";
import BankTypes from "./bank-types.jsx";

const ChangeBankAccountType = ({onBankTypeChange}) => {
    const [show, setShow] = useState(false);
    const ref = useRef();
    const [bankType, setBankType] = useState('نوع حساب');
    const translateBankType = (type) => {
        switch (type) {
            case AccountType.Seporde:
                return 'سپرده';
            case AccountType.Tashilat:
                return 'تسهیلات';
            default:
                return '';
        }
    };
    const changeBankType = (selectedBankType) => {
        setBankType(translateBankType(selectedBankType));
        setShow(false);
        onBankTypeChange(selectedBankType);
    }
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
    }, [bankType]);
    return (
        <div className='dropdow mt-2'>
            <ReactiveButton
                shadow
                animation
                idleText={bankType}
                style={{ borderRadius: '5px' }}
                size='small'
                onClick={() => setShow(true)}
                type='button'/>
            <div className={`dropdown-menu dropdown-menu-end custom-scroll ${show ? 'show' : undefined}`}
                 style={{
                     backgroundColor: '#F8F8F8',
                     textAlign: 'right',
                     borderRadius: '10px',
                     boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
                     padding: '10px'
                 }}
                 ref={ref}>
                <BankTypes changeBankType={changeBankType} translateBankType={translateBankType}/>
            </div>
        </div>
    )
}
export default ChangeBankAccountType;

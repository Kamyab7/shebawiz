import {AccountType} from "../../../utilities/AccountTypes.ts";

const BankTypes = ({changeBankType,translateBankType}) => {
    return (
        <>
            {Object.values(AccountType).map((type) => (
                (type === AccountType.Seporde || type === AccountType.Tashilat) && (
                    <a
                        key={type}
                        className={`dropdown-item fw-bolder d-flex align-items-center gap-2 ${localStorage.getItem('theme') === 'dark' ? 'dropdown-menu-dark text-light' : 'dropdown-menu-light text-dark'}`}
                        onClick={() => changeBankType(type)}
                    >
            <span className='align-middle'>
                {translateBankType(type)}
            </span>
                    </a>
                )))}
        </>
    )
}
export default BankTypes;
const BankList = ({banks, changeBanks}) => {
    return (
        <>
            {banks.map((bank) => (
                <a
                    key={bank.id}
                    className={`dropdown-item fw-bolder d-flex align-items-center gap-2 ${localStorage.getItem('theme') === 'dark' ? 'dropdown-menu-dark text-light' : 'dropdown-menu-light text-dark'}`}
                    onClick={() => changeBanks(bank)}
                >
                    <img src={bank.image} width="20px" className="ms-2" alt={bank.name}/>
                    <span className="align-middle">{bank.name}</span>
                </a>
            ))}
        </>
    )
}
export default BankList;
import ChangeTheme from "../components/change-theme.jsx";

const TopNav = () => {
    return (
        <nav className='navbar bg-light '
             style={{direction: 'rtl', width: '100%', boxShadow: '0px 3px 20px #545968'}}>
            <div className='d-flex align-items-center gap-3 me-3'>
                <h2 className="h2 fw-bolder pe-1">شبــــاویــــز</h2>
            </div>
            <div className='justify-content-end ms-3 gap-3'>
                <ChangeTheme/>
            </div>
        </nav>
    )
}
export default TopNav;
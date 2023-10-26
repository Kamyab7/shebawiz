import MainPage from "./feature/identity/components/main-page.jsx";
import {BankProvider} from "./contexts/bank/bank-context.jsx";

function App() {
    return (
        <BankProvider>
            <MainPage/>
        </BankProvider>
    )
}

export default App

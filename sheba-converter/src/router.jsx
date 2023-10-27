import {createBrowserRouter} from "react-router-dom";
import {BankProvider} from "./contexts/bank/bank-context.jsx";
import MainPage from "./feature/identity/components/main-page.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <BankProvider>
                <MainPage/>
            </BankProvider>
        )
    }
])
export default router;
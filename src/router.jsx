import {createBrowserRouter} from "react-router-dom";
import {BankProvider} from "./contexts/bank/bank-context.jsx";
import MainPage from "./feature/identity/components/main-page.jsx";
import IdentityLayout from "./layouts/identity-layout.jsx";

const router = createBrowserRouter([
    {
        element: <IdentityLayout/>,
        children: [
            {
                path: '/',
                element: (
                    <BankProvider>
                        <MainPage/>
                    </BankProvider>
                )
            }
        ]
    }
])
export default router;
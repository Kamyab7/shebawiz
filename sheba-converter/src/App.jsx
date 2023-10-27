import MainPage from "./feature/identity/components/main-page.jsx";
import {BankProvider} from "./contexts/bank/bank-context.jsx";
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
function App() {
    return (
      <RouterProvider router={router}/>
    )
}

export default App

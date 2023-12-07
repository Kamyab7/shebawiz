import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import React, {useEffect} from "react";
import {useAppContext} from "./contexts/app/app-context.jsx";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {Helmet, HelmetProvider} from "react-helmet-async";

function App() {
    const {theme} = useAppContext();
    useEffect(() => {
        const stylesheet = document.getElementById('theme-stylesheet');
        if (stylesheet) {
            stylesheet.href = `/css/${theme}.css`;
            if (theme === 'light') {
                document.body.style.backgroundColor = '#DAD7D7';
                document.body.style.transition = 'all 0.3s ease'
            } else {
                document.body.removeAttribute('style');
                document.body.style.transition = 'all 0.3s ease'
            }
        }
    }, [theme]);
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>شباویز</title>
                    <meta name="description" content="تبدیل رایگان شماره کارت و شماره حساب به شماره شبا بانک‌ها"/>
                    <meta name="keywords"
                          content="تبدیل رایگان شماره کارت,بانک,شماره شبا,شماره حساب,شماره کارت,تبدیل شماره حساب به شماره شبا,تبدیل شماره کارت به شماره شبا,تبدیل شماره کارت به شماره حساب"/>
                    <meta property="og:title" content="شباویز"/>
                    <meta property="og:description"
                          content="تبدیل رایگان شماره کارت و شماره حساب به شماره شبا بانک‌ها"/>
                    <meta property="og:url" content="https://shebawiz.ir"/>
                    <meta name="twitter:title" content="شباویز"/>
                    <meta name="twitter:description"
                          content="تبدیل رایگان شماره کارت و شماره حساب به شماره شبا بانک‌ها"/>
                </Helmet>
                <RouterProvider router={router}/>
                <ToastContainer rtl={true}/>
            </HelmetProvider>
        </>
    )
}

export default App

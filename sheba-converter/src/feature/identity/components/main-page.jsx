import Card from "../../../components/card.jsx";
import Carousel from "../../../components/carousel.jsx";
import ReactiveButton from "reactive-button";
import {useState} from "react";


const MainPage = () => {
    const CARDS = 3;
    const [state, setState] = useState('idle');
    const onClickHandler = () => {
        setState('loading');

        setTimeout(() => {
            setState('success');
        }, 2000);
    };
    return (
        <>
            <div className='text-center mt-7'>
                <div className="elementor-image-box-content">
                    <h2 className="elementor-image-box-title">تبدیلگر شبا</h2>
                    <p className="elementor-image-box-description lead">تبدیل شماره کارت و شماره حساب به شماره شبا بانک‌ها</p>
                </div>
            </div>
            <Carousel>
                {[...new Array(CARDS)].map((_, i) => (
                    <Card
                        key={i}
                        title={`${i === 1 ? 'کارت به شبا' : i === 2 ? 'حساب به شبا' : 'کارت به حساب'}`}
                        content={
                            <div className="mb-3" style={{direction: "rtl"}}>
                                <label className="form-label">
                                    {i === 2 ? 'شماره حساب' : 'شماره کارت'}
                                </label>
                                <input autoComplete="off" required={true} name="input_card_no"
                                       id="input_card_no2"
                                       className="form-control form-control-lg bg-transparent text-bg-dark"
                                       placeholder={`${i === 2 ? 'شماره حساب را وارد کنید ' : 'شماره کارت را وارد نمایید  '}`}/>
                                <div className='text-center mt-4'>
                                    <ReactiveButton
                                        shadow
                                        rounded
                                        buttonState={state}
                                        idleText="دریافت شماره شبا"
                                        loadingText="در حال تبدیل ..."
                                        successText="عملیات با موفقیت انجام شد"
                                        errorText="عملیات نا موفق !"
                                        onClick={onClickHandler}
                                    />
                                </div>
                            </div>
                        }
                    />
                ))}
            </Carousel>
        </>
    )
}
export default MainPage;
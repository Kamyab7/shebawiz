import Card from "../../../components/card.jsx";
import Carousel from "../../../components/carousel.jsx";
import ReactiveButton from "reactive-button";
import {useState} from "react";
import Lottie from "lottie-react";
import logo from "@assets/creditcard.json";
import ChangeBank from "../../bank/components/change-bank.jsx";
import developing from '@assets/developing.json';
import {useForm} from "react-hook-form";


const MainPage = () => {
    const CARDS = 3;
    const [selectedBankId, setSelectedBankId] = useState(21);
    const [state, setState] = useState('idle');
    const {register, formState: {errors}, handleSubmit, watch} = useForm();
    const onClickHandler = (data) => {
        const dataWithBankId = {...data, selectedBankId};
        setState('loading');
        setTimeout(() => {
            if (!errors.credit) {
                console.log(dataWithBankId);
                setState('success');
            } else {
                setState('error')
            }
        }, 2000);
    };
    return (
        <>
            <div className='text-center mt-4'>
                <h1 className="h2">تبدیلگر شبا</h1>
                <p className="lead">تبدیل شماره کارت و شماره حساب به شماره شبا بانک‌ها</p>
                <Lottie animationData={logo} style={{width: '50%', margin: '0px auto'}}/>
            </div>
            <div className='mb-7 '>
                <Carousel>
                    {[...new Array(CARDS)].map((_, i) => (
                        <Card
                            onSubmit={handleSubmit(onClickHandler)}
                            key={i}
                            title={`${i === 1 ? 'کارت به شبا' : i === 2 ? 'حساب به شبا' : 'کارت به حساب'}`}
                            content={
                                <div className="mb-3" style={{direction: "rtl"}}>
                                    <label className="form-label">
                                        {i === 2 ? 'شماره حساب' : 'شماره کارت'}
                                    </label>
                                    <input {...register(`credit-${i}`, {
                                        required: 'شماره کارت وارد نشده است !',
                                        minLength: 16,
                                        maxLength: 16,
                                        // custom validator
                                        validate: value => {
                                            if (watch('credit') === null) {
                                                return 'شماره کارت اشتباه است'
                                            }
                                        }
                                        // custom validator
                                    })}
                                           autoComplete="off"
                                           className={`form-control form-control-lg bg-transparent text-bg-dark ${errors.credit && 'is-invalid'}`}
                                           placeholder={`${i === 2 ? 'شماره حساب را وارد کنید ' : 'شماره کارت را وارد نمایید  '}`}/>
                                    {
                                        errors.credit && errors.credit.type === 'required' && (
                                            <p className='text-danger small fw-bold mt-1'>
                                                {errors.credit?.message}
                                            </p>
                                        )
                                    }{
                                    errors.credit && (errors.credit.type === 'minLength' || errors.credit.type === 'maxLength') &&
                                    (
                                        <p className='text-danger small fw-bold mt-1'>
                                            شماره کارت صحیح نیست
                                        </p>
                                    )
                                }{
                                    errors.credit && errors.credit.type === 'validate' && (
                                        <p className='text-danger small fw-bold mt-1'>
                                            {errors.credit?.message}
                                        </p>
                                    )
                                }
                                    {i === 2 && <ChangeBank onBankSelected={(bankId) => setSelectedBankId(bankId)}/>}
                                    {i === 1 || i === 0 ? (
                                        <div
                                            className="cover justify-content-center align-items-center d-flex"
                                            style={{
                                                position: "absolute",
                                                borderRadius: '1rem',
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                background: "rgba(0, 0, 0, 0.5)",
                                                zIndex: 2,
                                            }}>
                                            <div className='container flex-column text-center mb-lg-7'>
                                                <div className='mb-0'
                                                     style={{width: '50%', margin: '0px auto'}}>
                                                    <Lottie animationData={developing}/>
                                                </div>
                                                <span className='fw-bolder text-bg-light bg-transparent h1'>در حال توسعه ...</span>
                                            </div>
                                        </div>
                                    ) : null}
                                    <div className='text-center mt-4'>
                                        <ReactiveButton
                                            shadow
                                            rounded
                                            buttonState={state}
                                            idleText="دریافت شماره شبا"
                                            loadingText="در حال تبدیل ..."
                                            successText="عملیات با موفقیت انجام شد"
                                            style={{fontSize: 13}}
                                            errorText="عملیات ناموفق !"
                                            onClick={onClickHandler}
                                            type='submit'
                                        />
                                    </div>
                                </div>
                            }
                        />
                    ))}
                </Carousel>
            </div>
        </>
    )
}
export default MainPage;
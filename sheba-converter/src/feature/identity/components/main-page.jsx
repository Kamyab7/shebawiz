import Card from "../../../components/card.jsx";
import Carousel from "../../../components/carousel.jsx";
import ReactiveButton from "reactive-button";
import {useState} from "react";
import Lottie from "lottie-react";
import logo from "@assets/creditcard.json";
import ChangeBank from "../../bank/components/change-bank.jsx";
import {useForm} from "react-hook-form";
import DevelopingMode from "../../../components/developing-mode.jsx";
import Converter from "../../../utilities/converter.ts"

const MainPage = () => {
    const cards = 3;
    const [selectedBankId, setSelectedBankId] = useState();
    const [accountConvert, setAccountConvert] = useState('idle');
    const [cartConvert, setCartConvert] = useState('idle');
    const [cartToAccount, setCartToAccount] = useState('idle');
    const {register,
        formState: {errors},
        handleSubmit,
        watch} = useForm();
    const {
        register: registerId2,
        formState: {errors: errorsId2},
        handleSubmit: handleSubmitId2,
        watch: watchId2
    } = useForm();
    const {
        register: registerId,
        formState: {errors: errorsId},
        handleSubmit: handleSubmitId,
        watch: watchId
    } = useForm();
    const accountToShebaConvert = (inputName) => {
        const dataWithBankId = {selectedBankId, [inputName]: watch(inputName)};
        var converter=new Converter();
        var result=converter.AccountNumberToShebaNumber(dataWithBankId.accountToSheba,dataWithBankId.selectedBankId);
        alert(result);
        setAccountConvert('loading');
        setTimeout(() => {
            if (errors[inputName]) {
                console.log(dataWithBankId);
                setAccountConvert('success');
            } else {
                setAccountConvert('error')
            }
        }, 2000);
    };
    const cartToShebaConvert = (inputName) => {
        const data = {[inputName]: watchId2(inputName)};
        setCartConvert('loading');
        setTimeout(() => {
            if (errorsId2[inputName]) {
                console.log(data);
                setCartConvert('success');
            } else {
                setCartConvert('error')
            }
        }, 2000);
    };
    const cartToAccountConvert = (inputName) => {
        const data = {[inputName]: watchId(inputName)};
        setCartToAccount('loading');
        setTimeout(() => {
            if (errorsId[inputName]) {
                console.log(data);
                setCartToAccount('success');
            } else {
                setCartToAccount('error')
            }
        }, 2000);
    };
    return (
        <>
            <div className='text-center mt-4'>
                <h1 className="h2 fw-bolder">شبــــاویــــز</h1>
                <p className="text-muted lead fw-bold ">تبدیل رایگان شماره کارت و شماره حساب به شماره شبا بانک‌ها</p>
                <Lottie animationData={logo} style={{width: '50%', margin: '0px auto'}}/>
            </div>
            <div className='mb-7'>
                <Carousel>
                    {[...new Array(cards)].map((_, i) => (
                        i === 1 ? (
                            <Card
                                onSubmit={handleSubmit(accountToShebaConvert)}
                                key={i}
                                title={'حساب به شبا'}
                                content={
                                    <div className='mb-3' style={{direction: 'rtl'}}>
                                        <label className="form-label">
                                            شماره حساب
                                        </label>
                                        <input  {...register('accountToSheba', {
                                            required: 'شماره حساب وارد نشده است !',
                                            minLength: 13,
                                            maxLength: 13,
                                            // custom validator
                                            validate: value => {
                                                if (watch('accountToSheba') === null) {
                                                    return 'شماره کارت اشتباه است'
                                                }
                                            }
                                            // custom validator
                                        })}
                                                autoComplete="off"
                                                className={`form-control form-control-lg bg-transparent text-bg-dark ${errors.accountToSheba && 'is-invalid'}`}
                                                placeholder={'شماره حساب را وارد کنید '}/>
                                        {
                                            errors.accountToSheba && errors.accountToSheba.type === 'required' && (
                                                <p className='text-danger small fw-bold mt-1'>
                                                    {errors.accountToSheba?.message}
                                                </p>
                                            )
                                        }{
                                        errors.accountToSheba && (errors.accountToSheba.type === 'minLength' || errors.accountToSheba.type === 'maxLength') &&
                                        (
                                            <p className='text-danger small fw-bold mt-1'>
                                                شماره کارت صحیح نیست
                                            </p>
                                        )
                                    }{
                                        errors.accountToSheba && errors.accountToSheba.type === 'validate' && (
                                            <p className='text-danger small fw-bold mt-1'>
                                                {errors.accountToSheba?.message}
                                            </p>
                                        )
                                    }
                                        <ChangeBank onBankSelected={(bankId) => setSelectedBankId(bankId)}/>
                                        <div className='text-center mt-4'>
                                            <ReactiveButton
                                                shadow
                                                rounded
                                                buttonState={accountConvert}
                                                idleText="دریافت شماره شبا"
                                                loadingText="در حال تبدیل ..."
                                                successText="عملیات با موفقیت انجام شد"
                                                errorText="عملیات ناموفق !"
                                                onClick={() => accountToShebaConvert('accountToSheba')}
                                                type='submit'
                                            />
                                        </div>
                                    </div>
                                }
                            />
                        ) : i === 2 ? (
                            <Card
                                onSubmit={handleSubmitId2(cartToShebaConvert)}
                                key={i}
                                title={'کارت به شبا'}
                                content={
                                    <div className='mb-3' style={{direction: 'rtl'}}>
                                        <label className="form-label">
                                            شماره کارت
                                        </label>
                                        <input  {...registerId2('cartToSheba', {
                                            required: 'شماره کارت وارد نشده است !',
                                            minLength: 16,
                                            maxLength: 16,
                                            // custom validator
                                            validate: value => {
                                                if (watchId2('cartToSheba') === null) {
                                                    return 'شماره کارت اشتباه است'
                                                }
                                            }
                                            // custom validator
                                        })}
                                                autoComplete="off"
                                                className={`form-control form-control-lg bg-transparent text-bg-dark ${errorsId2.cartToSheba && 'is-invalid'}`}
                                                placeholder={'شماره حساب را وارد کنید '}/>
                                        {
                                            errorsId2.cartToSheba && errorsId2.cartToSheba.type === 'required' && (
                                                <p className='text-danger small fw-bold mt-1'>
                                                    {errorsId2.cartToSheba?.message}
                                                </p>
                                            )
                                        }{
                                        errorsId2.cartToSheba && (errorsId2.cartToSheba.type === 'minLength' || errorsId2.cartToSheba.type === 'maxLength') &&
                                        (
                                            <p className='text-danger small fw-bold mt-1'>
                                                شماره کارت صحیح نیست
                                            </p>
                                        )
                                    }{
                                        errorsId2.cartToSheba && errorsId2.cartToSheba.type === 'validate' && (
                                            <p className='text-danger small fw-bold mt-1'>
                                                {errorsId2.cartToSheba?.message}
                                            </p>
                                        )
                                    }
                                        <DevelopingMode/>
                                        <div className='text-center mt-4'>
                                            <ReactiveButton
                                                shadow
                                                rounded
                                                buttonState={cartConvert}
                                                idleText="دریافت شماره شبا"
                                                loadingText="در حال تبدیل ..."
                                                successText="عملیات با موفقیت انجام شد"
                                                errorText="عملیات ناموفق !"
                                                onClick={() => cartToShebaConvert('cartToSheba')}
                                                type='submit'
                                            />
                                        </div>
                                    </div>
                                }
                            />
                        ) : (
                            <Card
                                onSubmit={handleSubmitId(cartToAccountConvert)}
                                key={i}
                                title={'کارت به حساب'}
                                content={
                                    <div className='mb-3' style={{direction: 'rtl'}}>
                                        <label className="form-label">
                                            شماره کارت
                                        </label>
                                        <input  {...registerId('cartToAccount', {
                                            required: 'شماره کارت وارد نشده است !',
                                            minLength: 16,
                                            maxLength: 16,
                                            // custom validator
                                            validate: value => {
                                                if (watchId('cartToAccount') === null) {
                                                    return 'شماره کارت اشتباه است'
                                                }
                                            }
                                            // custom validator
                                        })}
                                                autoComplete="off"
                                                className={`form-control form-control-lg bg-transparent text-bg-dark ${errorsId.cartToAccount && 'is-invalid'}`}
                                                placeholder={'شماره حساب را وارد کنید '}/>
                                        {
                                            errorsId.cartToAccount && errorsId.cartToAccount.type === 'required' && (
                                                <p className='text-danger small fw-bold mt-1'>
                                                    {errorsId.cartToAccount?.message}
                                                </p>
                                            )
                                        }{
                                        errorsId.cartToAccount && (errorsId.cartToAccount.type === 'minLength' || errorsId.cartToAccount.type === 'maxLength') &&
                                        (
                                            <p className='text-danger small fw-bold mt-1'>
                                                شماره کارت صحیح نیست
                                            </p>
                                        )
                                    }{
                                        errorsId.cartToAccount && errorsId.cartToAccount.type === 'validate' && (
                                            <p className='text-danger small fw-bold mt-1'>
                                                {errorsId.cartToAccount?.message}
                                            </p>
                                        )
                                    }
                                        <DevelopingMode/>
                                        <div className='text-center mt-4'>
                                            <ReactiveButton
                                                shadow
                                                rounded
                                                buttonState={cartToAccount}
                                                idleText="دریافت شماره شبا"
                                                loadingText="در حال تبدیل ..."
                                                successText="عملیات با موفقیت انجام شد"
                                                errorText="عملیات ناموفق !"
                                                onClick={() => cartToAccountConvert('cartToAccount')}
                                                type='submit'
                                            />
                                        </div>
                                    </div>
                                }
                            />
                        )
                    ))}
                </Carousel>
            </div>
        </>
    )
}
export default MainPage;
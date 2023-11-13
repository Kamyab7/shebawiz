import {useState} from "react";
import ReactiveButton from "reactive-button";

const Result = ({result, bankDetails, onBackToDefault}) => {
    const [state, setState] = useState('idle');
    const backToDefaultHandler = () => {
        setState('loading');
        setTimeout(() => {
            onBackToDefault();
        }, 2000);
    };
    return (
        <div className='mb-3' style={{direction: 'rtl'}}>
            <div className='row d-flex align-items-center fs-5'>
                <p className='fw-bolder pe-0' style={{color:'#3B3B3B'}}>
                    شماره شبا : {result}
                </p>
                <p className='fw-bolder mt-2' style={{color:'#3B3B3B'}}>
                    نام بانک : {bankDetails.name}
                </p>
            </div>
            <div className='text-center mt-4'>
                <ReactiveButton
                    shadow
                    rounded
                    buttonState={state}
                    idleText="بازگشت "
                    loadingText="در حال بازگشت "
                    onClick={backToDefaultHandler}
                    type='submit'
                />
            </div>
        </div>
    )
}
export default Result
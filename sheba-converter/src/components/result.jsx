import {useState} from "react";
import ReactiveButton from "reactive-button";

const Result = ({result}) => {
    const [showResult, setShowResult] = useState(false);
    const [state, setState] = useState('idle');
    const onClickHandler = () => {
        setState('loading');
        setTimeout(() => {
            setShowResult(false)
        }, 2000);
    };
    return (
        <div className='mb-3' style={{direction: 'rtl'}}>
            <label className="form-label">
                شماره شبا
            </label>
            <input className='form-control form-control-lg bg-transparent text-bg-dark' value={result}
                   style={{direction: 'ltr'}} readOnly/>
            <div className='text-center mt-4'>
                <ReactiveButton
                    shadow
                    rounded
                    buttonState={state}
                    idleText="بازگشت "
                    loadingText="در حال بازگشت "
                    onClick={onClickHandler}
                    type='submit'
                />
            </div>
        </div>
    )
}
export default Result
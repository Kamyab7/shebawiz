import './style.css';

export const Card = ({title}) => (
    <div className="card">
        <div className='card-body'>
            <h2>{title}</h2>
            <form className='mt-5'>
                <div className="mb-3" style={{direction: "rtl"}}>
                    <label className="form-label">شماره کارت</label>
                    <input autoComplete="off" required='true' name="input_card_no"
                           id="input_card_no2" className="form-control form-control-lg bg-transparent text-bg-dark"
                           placeholder="شماره کارت را وارد نمایید  "/>
                </div>
            </form>
        </div>
    </div>
);
export default Card;

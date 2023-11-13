import '../../public/css/styles/style.css';
export const Card = ({title,content,onSubmit}) => {
    return (
        <div className="card">
            <div className='card-body'>
                <h2 className='fw-bolder' style={{color:'#4A4949'}}>{title}</h2>
                <form className='mt-5' onSubmit={onSubmit}>
                    {content}
                </form>
            </div>
        </div>
    )
};
export default Card;

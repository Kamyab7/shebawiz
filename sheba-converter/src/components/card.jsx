import './style.css';
export const Card = ({title,content}) => {
    return (
        <div className="card">
            <div className='card-body'>
                <h2>{title}</h2>
                <form className='mt-5'>
                    {content}
                </form>
            </div>
        </div>
    )
};
export default Card;

import Card from "../../../components/card.jsx";
import Carousel from "../../../components/carousel.jsx";

const MainPage = () => {
    const CARDS = 3;
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
                    />
                ))}
            </Carousel>
        </>
    )
}
export default MainPage;
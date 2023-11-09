import Lottie from "lottie-react";
import developing from "@assets/developing.json";

const DevelopingMode = () => {
    return(
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
            <div className='container flex-column text-center mb-2'>
                <div className='mb-0'
                     style={{width: '50%', margin: '0px auto'}}>
                    <Lottie animationData={developing}/>
                </div>
                <span className='fw-bolder bg-transparent h1' style={{color:'#FCFCFC'}}>در حال توسعه ...</span>
            </div>
        </div>
    )
}
export default DevelopingMode;
import WeddingImg from "../../Assets/Images/Frame bride.png"
import CakeImg from "../../Assets/Images/cake wedding.png"
import Brush from "../../Assets/Images/brush.svg"
const Wedding = () => {
    return (
        <div className="my-10 gap-6 flex flex-col items-center py-6">
            <div className="img-container grid grid-cols-4 gap-6 h-[160px] ">
                <div>
                    <img src={WeddingImg} alt="" />
                    </div>
                <div className="grid grid-rows-2 gap-6 overflow-hidden ">
                    <img className="rounded-2xl  outline-none" src={CakeImg} alt="" />
                    <img className="rounded-2xl  outline-none" src={CakeImg} alt="" />
                </div>
                <div className="grid grid-rows-2 gap-6 overflow-hidden ">
                    <img className="rounded-2xl  outline-none" src={CakeImg} alt="" />
                    <img className="rounded-2xl  outline-none" src={CakeImg} alt="" />
                </div>
            
              
                <div>
                    <img src={WeddingImg} alt="" />
                    </div>
            </div>
            <h4 className="text-2xl font-bold">کارت دعوت عروسی رو خودتون طراحی کنید</h4>
            <button  className="bg-baseRed flex h-12 w-[184px] justify-center items-center rounded-lg" type="button">
                <img src={Brush} alt="" />
                <p className="text-white text-sm font-medium mr-1 ">شروع طراحی</p>
            </button>
        </div>
    )
}

export default Wedding
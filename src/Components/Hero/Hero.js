import './Hero.css'
import HeroImg from '../../Assets/Images/3 girls 1.svg'
import Brush from "../../Assets/Images/brush.svg"
import Gol from "../../Assets/Images/goll3 1.svg"
import { useNavigate } from 'react-router-dom'
const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="lg:h-[444px] rounded-2xl bg-[#EDD5D8] flex flex-col-reverse lg:flex-row py-10 px-5 lg:px-16 items-center my-6">
            <div className="desc-container">
                <h1 className='text-lg lg:text-3xl text-center lg:text-right font-bold text-[#434343]'>آنلاین شاپ کاستومی</h1>
                <p className='font-normal text-[#434343] text-xs lg:text-lg lg:w-[384px] mt-4 mb-14'>آنلاین شاپ کاستومی محصولات متنوعی  داره و این امکان رو بهتون میده خودتون رنگ و طرح و نوشته ی روی محصولات رو انتخاب کنید </p>
               <div className='flex gap-2 lg:gap-6 justify-center lg:justify-normal px-4 lg:px-0 text-[10px] lg:text-base  '>
               <button className='h-12 lg:w-[184px] bg-baseRed rounded-lg flex-grow  font-medium flex items-center justify-center' type="button">
                    <img src={Brush} alt="" />
                    <p className='text-white mr-2'>شروع طراحی</p>
                </button>
               <button onClick={()=>navigate("/other-products")} className='h-12 flex-grow lg:w-[184px] border border-baseRed rounded-lg text-baseRed font-medium' type="button"><p>دیدن محصولات</p></button>
               
               </div>
            </div>
            <div className="image-container relative">
                <img src={HeroImg} className='w-[320px] lg:w-full'  alt="" />
                {/* <img src={Gol} className='absolute left-11 bottom-[-40px]' alt="" /> */}
                {/* <img src={Gol} className='absolute right-10 top-0 scale-x-[-1]' alt="" /> */}
            </div>
        </div>
    )
}

export default Hero
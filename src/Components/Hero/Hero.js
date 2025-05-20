import './Hero.css'
import HeroImg from '../../Assets/Images/3 girls 1.svg'
import Brush from "../../Assets/Images/brush.svg"
import Gol from "../../Assets/Images/goll3 1.svg"
import { useNavigate } from 'react-router-dom'
const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="h-[444px] rounded-2xl bg-[#EDD5D8] flex py-10 px-16 items-center my-6">
            <div className="desc-container">
                <h1 className='text-[32px] font-bold text-[#434343]'>آنلاین شاپ کاستومی</h1>
                <p className='font-normal text-[#434343] text-lg w-[384px] mt-4 mb-14'>آنلاین شاپ کاستومی محصولات متنوعی  داره و این امکان رو بهتون میده خودتون رنگ و طرح و نوشته ی روی محصولات رو انتخاب کنید </p>
               <div className='flex gap-6  '>
               <button className='h-12 w-[184px] bg-baseRed rounded-lg  font-medium flex items-center justify-center' type="button">
                    <img src={Brush} alt="" />
                    <p className='text-white mr-2'>شروع طراحی</p>
                </button>
               <button onClick={()=>navigate("/other-products")} className='h-12 w-[184px] border border-baseRed rounded-lg text-baseRed font-medium' type="button"><p>دیدن محصولات</p></button>
               
               </div>
            </div>
            <div className="image-container relative">
                <img src={HeroImg}  alt="" />
                <img src={Gol} className='absolute left-11 bottom-[-40px]' alt="" />
                {/* <img src={Gol} className='absolute right-10 top-0 scale-x-[-1]' alt="" /> */}
            </div>
        </div>
    )
}

export default Hero
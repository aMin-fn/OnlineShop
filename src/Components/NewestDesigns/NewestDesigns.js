import Brush from "../../Assets/Images/brush2.svg"
import { Link } from "react-router-dom"
import BuyImg from "../../Assets/Images/Group.png"
import BestsellerItem from "../BestsellerItem/BestsellerItem"
import AbazhorImg from "../../Assets/Images/abazhor.png"
import HeartImg from "../../Assets/Images/heart.png"


const NewestDesigns = () => {
  let temp = [];
  for (let index = 0; index < 4; index++) {
    temp.push(
      <BestsellerItem img={AbazhorImg} text="دارای رنگ بندی، قابل طراحی" title="آباژور" heart={HeartImg}></BestsellerItem> 
    )
  }
  return (
    <div>
      <div className="Bestsellers-header flex items-center justify-between lg:justify-normal gap-5">
        <img className="hidden lg:inline-block" src={Brush} alt="" />
        <h1 className='text-sm lg:text-2xl font-bold'>جدیدترین طرح های هفته</h1>
        <div className='hidden lg:block w-[755px] bg-[#D6D6D6] h-[1px]'></div>
        <Link className="text-baseRed text-sm font-medium">مشاهده بیشتر</Link>
      </div>
       <div className="h-[267px]  relative">
          <h4 className="text-sm lg:text-2xl lg:font-bold mb-4 lg:mb-0 lg:w-[253px] mr-[30px] mt-[43px]"> محصولاتی که طراحی شده رو ببینید و در صورت نیاز طرحشون رو مطابق سلیقه خودتون تغییر بدید</h4>
          <div className="flex justify-center   ">
            <img className="w-[80px] relative top-16    h-[118px]" src={BuyImg} alt="" />
            <img className="relative" src={BuyImg} alt="" />
          </div>
        </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-6  ">
        <div className="hidden lg:block h-[437px]  w-[288px] relative">
          <h4 className="text-2xl font-bold w-[253px] mr-[30px] mt-[43px]"> محصولاتی که طراحی شده رو ببینید و در صورت نیاز طرحشون رو مطابق سلیقه خودتون تغییر بدید</h4>
          <div className="flex   ">
            <img className="absolute left-[46px] bottom-[13px]" src={BuyImg} alt="" />
            <img className="w-[80px] absolute right-[31px] bottom-[13px]  h-[118px]" src={BuyImg} alt="" /></div>
        </div>
        {temp}

      </div>
    </div>
  )
}

export default NewestDesigns
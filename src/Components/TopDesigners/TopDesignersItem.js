import ProfImg from "../../Assets/Images/Profile pic.png"
import DesignImg from "../../Assets/Images/Frame 26087965.png"
import ProfAddSvg from "../../Assets/Images/profile-add.svg"
const TopDesignersItem = () => {
  return (
    <div className="p-4 lg:w-[288px] overflow-hidden gap-4 relative flex flex-col items-center justify-evenly border border-solid border-[#D6D6D6] rounded-2xl ">
        <div className="absolute top-0   w-full h-[72px] bg-[#F6EAEB]"></div>
        <div className="h-[112px] z-10 flex flex-col justify-end ">
            <img src={ProfImg} alt="" />
        </div>
        <div className="text-center ">
            <p className="h-[45px]">نگار زمانی</p>
            <p className="text-[10px] font-normal text-[#898989] flex flex-col lg:flex-row">
                <p>دنبال کنندگان : ۴۰۰</p>
                <p className="mx-3 hidden lg:block">  | تعداد طرح ها : ۵۶ |</p>
                <p className="mx-3 lg:hidden">   تعداد طرح ها : ۵۶ </p>
                <p> آمار فروش : ۳۷۰ </p>
            </p>
        </div>
        <div className="gap-3 hidden lg:flex">
            <img src={DesignImg} alt="" />
            <img src={DesignImg} alt="" />
            <img src={DesignImg} alt="" />
        </div>
        <div className="w-full">
            <button type="button" className="flex rounded-lg border border-baseRed broder-solid w-full lg:w-[272px] justify-center py-2">
                <img src={ProfAddSvg} alt="" />
                <p  className="text-baseRed font-medium text-sm">دنبال کردن</p>    
            </button>
        </div>
    </div>
  )
}

export default TopDesignersItem
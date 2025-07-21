import CategoryIcon from "../../Assets/Images/medal-star.svg"
import SpecialSaleImg from "../../Assets/Images/Frame 26086816.png"
const SpecialSale = () => {
    return (
        <div>
            <div className="category-header flex items-center justify-between">
                <img className="hidden lg:inline-block" src={CategoryIcon} alt="" />
                <h1 className='text-sm lg:text-2xl font-bold'>فروش ویژه</h1>
                <div className='hidden lg:block w-[1040px] bg-[#D6D6D6] h-[1px]'></div>
            </div>
            <div className="container grid grid-cols-2 my-6 items-stretch">
                <div className="h-full">
                    <img className="h-full w-full object-cover" src={SpecialSaleImg} alt="" />
                </div>
                <div className="grid grid-cols-2 gap-2 lg:gap-6 mr-4 h-full">
                    <img className="w-full h-full" src={SpecialSaleImg} alt="" />
                    <img className="w-full h-full" src={SpecialSaleImg} alt="" />
                    <img className="w-full h-full" src={SpecialSaleImg} alt="" />
                    <img className="w-full h-full" src={SpecialSaleImg} alt="" />
                </div>
            </div>

        </div>
    )
}

export default SpecialSale
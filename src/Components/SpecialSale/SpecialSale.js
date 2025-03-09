import CategoryIcon from "../../Assets/Images/medal-star.svg"
import SpecialSaleImg from "../../Assets/Images/Frame 26086816.png"
const SpecialSale = () => {
    return (
        <div>
            <div className="category-header flex items-center justify-between">
                <img src={CategoryIcon} alt="" />
                <h1 className='text-2xl font-bold'>فروش ویژه</h1>
                <div className='w-[1040px] bg-[#D6D6D6] h-[1px]'></div>
            </div>
            <div className="container grid grid-cols-2 my-6">
                <div>
                    <img src={SpecialSaleImg} alt="" />
                </div>
                <div className="grid grid-cols-2 gap-6 mr-4">
                    <img className="" src={SpecialSaleImg} alt="" />
                    <img className="" src={SpecialSaleImg} alt="" />
                    <img className="" src={SpecialSaleImg} alt="" />
                    <img className="" src={SpecialSaleImg} alt="" />

                </div>
            </div>
        </div>
    )
}

export default SpecialSale
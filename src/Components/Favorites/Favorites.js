import LikeSvg from "../../Assets/Images/like2.svg"
import BestsellerItem from "../BestsellerItem/BestsellerItem"
import PhoneImg from "../../Assets/Images/img3.png"
import heartSvg from "../../Assets/Images/Heart 3.svg"
import FlashSvg from "../../Assets/Images/Clip path group.svg"

const Favorites = () => {
    const temp = []
    for (let index = 0; index < 4; index++) {
        temp.push(
            <BestsellerItem img={PhoneImg} title="قاب موبایل آیفون" text="دارای رنگ بندی، قابل طراحی" heart={heartSvg}></BestsellerItem>
        )

    }
    return (
        <div className="">
            <div className="category-header flex items-center justify-between">
                <img src={LikeSvg} alt="" />
                <h1 className='text-2xl font-bold'>علاقمندی ها</h1>
                <div className='w-[1040px] bg-[#D6D6D6] h-[1px]'></div>
            </div>
            <div className="grid grid-cols-4 gap-6 mt-6  relative">
                {temp}
                <img className="absolute left-[-20px] top-[195px]" src={FlashSvg} alt="" />

            </div>
        </div>
    )
}

export default Favorites
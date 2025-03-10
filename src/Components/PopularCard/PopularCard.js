import StickerImg from "../../Assets/Images/2.png"
import LikeSvg from "../../Assets/Images/Like.svg"
import GalleyImg from "../../Assets/Images/gallery-add.svg"
import { Link } from "react-router-dom"
import ShapeSvg from "../../Assets/Images/like-shapes.svg"
const PopularCard = () => {
    const products = [
        0, 0, 0, 0, 0, 0, 0, 0
    ];
    return (
        <>
            <div className="Bestsellers-header flex items-center gap-5">
                <img src={ShapeSvg} alt="" />
                <h1 className='text-2xl font-bold'>طرح های پرطرفدار</h1>
                <div className='w-[841px] bg-[#D6D6D6] h-[1px]'></div>
                <Link className="text-baseRed text-sm font-medium">مشاهده بیشتر</Link>
            </div>
            <div className="grid grid-cols-4 gap-5 my-6">

                {products.map(() => {
                    return (
                        <div className="border border-[#CBCBCB] border-solid p-4 rounded-2xl h-[428px] flex flex-col  justify-between">
                            <div className="img-container">
                                <img src={StickerImg} alt="" />
                            </div>
                            <div className="desc flex justify-between w-full">
                                <p className="font-bold text-lg">استیکر</p>
                                <img src={LikeSvg} alt="" />
                            </div>
                            <p className="font-normal text-sm">قابل طراحی و چاپ بر روی انواع محصولات</p>

                            <div className="button">
                                <button type="button" className="flex text-baseRed py-2 px-6 justify-center border border-solid border-baseRed w-[256px] h-10 rounded-lg">
                                    <img src={GalleyImg} alt="" />
                                    <p className="font-medium text-sm mr-1 ">افزودن به گالری</p>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default PopularCard
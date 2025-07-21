import './Category.css'
import CategoryIcon from "../../Assets/Images/medal-star.svg"
import ProductImg from "../../Assets/Images/Frame 26087966.png"
import Product from '../Product/Product'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Category = () => {
    const products = [
        {
            img: ProductImg,
            text: "قاب موبایل"
        },
        {
            img: ProductImg,
            text: "کارت تبریک"
        },
        {
            img: ProductImg,
            text: "اکسسوری"
        },
        {
            img: ProductImg,
            text: "لوازم تحریر"
        },
        {
            img: ProductImg,
            text: "لباس"
        },
        {
            img: ProductImg,
            text: "دکور خانه"
        }
    ]
    return (
        <>
            <div className='hidden lg:block'>

                <div className="category-header flex items-center justify-between">
                    <img src={CategoryIcon} alt="" />
                    <h1 className='text-2xl font-bold'>دسته بندی محصولات</h1>
                    <div className='w-[929px] bg-[#D6D6D6] h-[1px]'></div>
                </div>
                <div className='grid grid-cols-6 gap-6 my-6'>

                    {products.map((item) => {
                        return <Product text={item.text} img={item.img}></Product>
                    })}
                </div>
            </div>
            <div className='lg:hidden'>
                <div className="category-header flex items-center justify-between">
                    <h1 className='text-sm mb-3 font-bold'>دسته بندی محصولات</h1>
                </div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3.5}
                >
                    {products.map((item) => {
                        return (
                            <SwiperSlide><Product text={item.text} img={item.img}></Product>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div></>
    )
}

export default Category
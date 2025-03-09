import './Category.css'
import CategoryIcon from "../../Assets/Images/medal-star.svg"
import ProductImg from "../../Assets/Images/Frame 26087966.png"
import Product from '../Product/Product'
const Category = () => {
    const products = [
        {
            img : ProductImg,
            text : "قاب موبایل"
        },
        {
            img : ProductImg,
            text : "کارت تبریک"
        },
        {
            img : ProductImg,
            text : "اکسسوری"
        },
        {
            img : ProductImg,
            text : "لوازم تحریر"
        },
        {
            img : ProductImg,
            text : "لباس"
        },
        {
            img : ProductImg,
            text : "دکور خانه"
        }
    ]
  return (
    <div>
        <div className="category-header flex items-center justify-between">
            <img src={CategoryIcon} alt="" />
            <h1 className='text-2xl font-bold'>دسته بندی محصولات</h1>
            <div className='w-[929px] bg-[#D6D6D6] h-[1px]'></div>
        </div>
        <div className='grid grid-cols-6 gap-6 my-6'>
           
            {products.map((item)=>{
                return <Product text={item.text} img={item.img}></Product>                
            })}
        </div>
    </div>
  )
}

export default Category
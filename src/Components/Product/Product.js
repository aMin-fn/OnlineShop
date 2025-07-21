import './Product.css'
import { Link } from 'react-router-dom'
import ProductImg from '../../Assets/Images/Frame 26087966.png';
const Product = ({text,img}) => {

    
  return (
    <div className='text-xs lg:text-base border border-[#D6D6D6] border-solid rounded-lg flex flex-col items-center  lg:h-[128px] justify-evenly'>
            <img className='p-1.5 lg:p-0' src={img} alt="" />
            <p className='mb-2 lg:mb-0'>{text}</p>
    </div>
  )
}

export default Product
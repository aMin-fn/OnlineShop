import './Product.css'
import { Link } from 'react-router-dom'
import ProductImg from '../../Assets/Images/Frame 26087966.png';
const Product = ({text,img}) => {

    
  return (
    <div className='border border-[#D6D6D6] border-solid rounded-lg flex flex-col items-center h-[128px] justify-evenly'>
            <img src={img} alt="" />
            <p>{text}</p>
    </div>
  )
}

export default Product
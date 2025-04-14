import './Header.css'
import MyNavbar from '../MyNavbar/MyNavbar.js'
import Logo from '../../Assets/Images/LOGO.svg'
import HeaderSearchLogo from "../../Assets/Images/search-normal.png"
import LoginSvg from "../../Assets/Images/Login.svg"
import ShoppingSvg from "../../Assets/Images/shopping-cart.svg"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header-container w-[1224px] m-auto bg-white'>
        <div className='top-header py-6 flex justify-between items-center'>
          <div className="logo flex">
            <img src={Logo} alt="" />
            <div><p className='text-4xl font-bold'><span className='text-baseRed'>ک</span>استومی</p>
            <p className='font-medium text-sm'>فروشگاه اینترنتی</p>
            </div>
          </div>
          <div className="input-container relative bg-white h-12 w-[596px] rounded-2xl ">
            <input type="text" placeholder='جستجو'  className='bg-transparent border border-solid border-[#D6D6D6]  rounded-2xl w-full h-full px-6 py-3  text-baseRed placeholder-baseRed'  />
            <img className='absolute left-6 bottom-3' src={HeaderSearchLogo} alt="" />
          </div>
          <div className="login-signup flex items-center">
            <img className='w-6' src={LoginSvg} alt="" />
            <Link className='font-medium text-[#434343] text-sm'>ورود | ثبت نام</Link>
          </div>
          <div className=" Shopping-cart flex items-center relative">
            <div>
            <img className='w-6 ' src={ShoppingSvg} alt="" />
            </div>
            <p className='font-medium text-[#434343]'>سبد خرید</p>
            <span className='absolute bottom-3 right-[-9px] bg-[#DCACB1] rounded-full w-4 h-4 flex items-center justify-center'>۰</span>
          </div>
        </div>
    </div>
  )
}

export default Header
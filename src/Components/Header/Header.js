import './Header.css'
import MyNavbar from '../MyNavbar/MyNavbar.js'
import Logo from '../../Assets/Images/LOGO.svg'
import HeaderSearchLogo from "../../Assets/Images/search-normal.png"
import LoginSvg from "../../Assets/Images/Login.svg"
import ShoppingSvg from "../../Assets/Images/shopping-cart.svg"
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar.js'
import Customi from "../../Assets/Images/کاستومی.svg"
import { useEffect, useState } from 'react'
import Tshirt from "../../Assets/Images/Frame 26088193.png"
const Header = () => {
    let temp = [];
    for (let index = 0; index < 8; index++) {
        temp.push(
            <li>
                <button onClick={() => setSidebar2(true)} className='flex justify-between w-full  items-center' href="">
                    <p>
                        پوشاک
                    </p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0003 20.6695C14.8103 20.6695 14.6203 20.5995 14.4703 20.4495L7.95027 13.9295C6.89027 12.8695 6.89027 11.1295 7.95027 10.0695L14.4703 3.54953C14.7603 3.25953 15.2403 3.25953 15.5303 3.54953C15.8203 3.83953 15.8203 4.31953 15.5303 4.60953L9.01027 11.1295C8.53027 11.6095 8.53027 12.3895 9.01027 12.8695L15.5303 19.3895C15.8203 19.6795 15.8203 20.1595 15.5303 20.4495C15.3803 20.5895 15.1903 20.6695 15.0003 20.6695Z" fill="#242424" />
                    </svg>

                </button>
            </li>
        )
    }
    const navigate = useNavigate();

    const [sidebar, setSidebar] = useState(false);
    const [sidebar2, setSidebar2] = useState(false);

    useEffect(() => {
        if (sidebar) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [sidebar]);

    return (
        <>
            <div className='header-container hidden lg:block w-[1224px] m-auto bg-white'>
                <div className='top-header py-6 flex justify-between items-center'>
                    <div onClick={() => navigate("/")} className="logo flex cursor-pointer">
                        <img src={Logo} alt="" />
                        <div><p className='text-4xl font-bold'><span className='text-baseRed'>ک</span>استومی</p>
                            <p className='font-medium text-sm'>فروشگاه اینترنتی</p>
                        </div>
                    </div>
                    <div className="input-container relative bg-white h-12 w-[596px] rounded-2xl ">
                        <input type="text" placeholder='جستجو' className='bg-transparent border border-solid border-[#D6D6D6]  rounded-2xl w-full h-full px-6 py-3  text-baseRed placeholder-baseRed' />
                        <img className='absolute left-6 bottom-3' src={HeaderSearchLogo} alt="" />
                    </div>
                    <div className="login-signup flex items-center">
                        <img className='w-6' src={LoginSvg} alt="" />
                        <Link to={'/user-login'} className='font-medium text-[#434343] text-sm'>ورود | ثبت نام</Link>
                    </div>
                    <div className=" Shopping-cart flex items-center relative">
                        <div>
                            <img className='w-6 ' src={ShoppingSvg} alt="" />
                        </div>
                        <Link to={"/shopping"} className='font-medium text-[#434343]'>سبد خرید</Link>
                        <span className='absolute bottom-3 right-[-9px] bg-[#DCACB1] rounded-full w-4 h-4 flex items-center justify-center'>۰</span>
                    </div>
                </div>
            </div>
            <div className='flex lg:hidden justify-between m-5 gap-3 items-center'>
                <button onClick={() => setSidebar(true)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" fill="#242424" />
                        <path d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z" fill="#242424" />
                        <path d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z" fill="#242424" />
                    </svg>

                </button>
                <div className='border border-[#D6D6D6] h-10 text-xs p-3  rounded-2xl flex justify-between items-center w-4/5'>
                    <div className='flex '>
                        <p>جستجو در </p>
                        <img className='' src={Customi} alt="" />
                    </div>
                    <img className='w-4 h-4' src={HeaderSearchLogo} alt="" />

                </div>
                <div>
                    <img src={Logo} alt="" />

                </div>
            </div>
            <div className={`fixed lg:hidden top-0 right-0 w-72 h-full bg-white z-50 transition-transform duration-700 ${sidebar ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className='flex flex-col gap-8 mt-5 p-5'>
                    {temp}
                </ul>
            </div>
            <div className={`fixed flex flex-col gap-7 p-6 pl-0 lg:hidden top-0 right-0 w-72 h-full bg-white z-50 transition-transform duration-700 ${sidebar2 ? 'translate-x-0' : 'translate-x-full'}`}>
                
                   
                <button onClick={() => setSidebar2(false)} className='flex gap-2 w-20  items-center' href="">
                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0253 15.6834C11.8669 15.6834 11.7086 15.6251 11.5836 15.5001C11.3419 15.2584 11.3419 14.8584 11.5836 14.6168L16.2003 10.0001L11.5836 5.38343C11.3419 5.14176 11.3419 4.74176 11.5836 4.5001C11.8253 4.25843 12.2253 4.25843 12.4669 4.5001L17.5253 9.55843C17.7669 9.8001 17.7669 10.2001 17.5253 10.4418L12.4669 15.5001C12.3419 15.6251 12.1836 15.6834 12.0253 15.6834Z" fill="#242424" />
                    <path d="M16.941 10.625H2.91602C2.57435 10.625 2.29102 10.3417 2.29102 10C2.29102 9.65833 2.57435 9.375 2.91602 9.375H16.941C17.2827 9.375 17.566 9.65833 17.566 10C17.566 10.3417 17.2827 10.625 16.941 10.625Z" fill="#242424" />
                </svg>
                    <p>
                        پوشاک
                    </p>
                </button>
               
                <div className='text-sm'>
                    <p>تیشرت زنانه</p>
                    <div className='flex gap-2 overflow-hidden mt-3'>
                        <img src={Tshirt} alt="" />
                        <img src={Tshirt} alt="" />
                        <img src={Tshirt} alt="" />
                        <img src={Tshirt} alt="" />
                        <img src={Tshirt} alt="" />
                    </div>
                </div>
                <div className='text-sm'>
                    <p>تیشرت مردانه</p>
                    <div className='flex gap-2 overflow-hidden mt-3'>
                        <img src={Tshirt} alt="" />
                        <img src={Tshirt} alt="" />
                        <img src={Tshirt} alt="" />
                        <img src={Tshirt} alt="" />
                        <img src={Tshirt} alt="" />
                    </div>
                </div>
                <div className='text-sm'>
                    <p>تیشرت بچگانه</p>
                    <div className='flex gap-2 overflow-hidden mt-3'>
                        <img src={Tshirt} alt="" />
                        <img src={Tshirt} alt="" />
                        <img src={Tshirt} alt="" />
                        <img src={Tshirt} alt="" />
                        <img src={Tshirt} alt="" />
                    </div>
                </div>
            </div>
            {sidebar && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setSidebar(false)}
                ></div>
            )}
        </>
    )
}

export default Header
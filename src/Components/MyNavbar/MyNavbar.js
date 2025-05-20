import './MyNavbar.css'
import magicpen from '../../Assets/Images/magicpen.svg'
import { Link } from 'react-router-dom'
import PhoneImg from "../../Assets/Images/Frame 26087459.svg"
import { useEffect, useRef, useState } from 'react'

const MyNavbar = () => {
  const [phone, setPhone] = useState(false);
  const phoneMenuRef = useRef(null);

  // Detect clicks outside the phone menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (phoneMenuRef.current && !phoneMenuRef.current.contains(event.target)) {
        setPhone(false);
      }
    };

    if (phone) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [phone]);

  return (
    <div className='flex justify-between py-6 bg-white relative'>
      <button className='flex items-center justify-center bg-baseRed rounded-lg text-white w-2/12 h-12' type='button'>
        <img width="24px" src={magicpen} alt="" />
        <p className='text-sm'>خودت طراحیش کن !</p>
      </button>
      <ul className='flex gap-4 items-center w-10/12 justify-evenly relative font-normal text-[#434343]'>
        <li><Link className='hover:text-baseRed'>پوشاک</Link></li>
        <li><Link className='hover:text-baseRed'>لوازم خانه</Link></li>
        <li><Link onClick={() => setPhone(true)} className='hover:text-baseRed'>قاب موبایل</Link></li>
        <li><Link className='hover:text-baseRed'>اکسسوری</Link></li>
        <li><Link className='hover:text-baseRed'>مدرسه و اداره</Link></li>
        <li><Link className='hover:text-baseRed'>کارت و پوستر</Link></li>
        <li><Link className='hover:text-baseRed'>جشن و مهمانی</Link></li>
        <div
          ref={phoneMenuRef}
          className={`absolute flex justify-evenly items-center w-[97%] h-[130px] bg-white left-0 -bottom-32 z-50 rounded-br-lg border-t border-[#EDEDED] ${phone ? "opacity-100" : "opacity-0"} transition-all duration-500`}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className='h-[104px] w-[88px]'>
              <img src={PhoneImg} alt="" />
              <p>آیفون</p>
            </div>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default MyNavbar

import './MyNavbar.css'
import magicpen from '../../Assets/Images/magicpen.svg'
import { Link } from 'react-router-dom'
const MyNavbar = () => {
  return (

        <div className='flex justify-between py-6 bg-white'>
          <button className='flex items-center justify-center bg-baseRed rounded-lg text-white w-2/12 h-12' type='button'>
            <img width="24px" src={magicpen} alt="" />
            <p className='text-sm'>خودت طراحیش کن !</p>
          </button>
          <ul className='flex gap-4 items-center w-10/12 justify-evenly font-normal text-[#434343]'>
            <li><Link>پوشاک</Link></li>
            <li><Link>لوازم خانه</Link></li>
            <li><Link>قاب موبایل</Link></li>
            <li><Link>اکسسوری</Link></li>
            <li><Link>مدرسه و اداره</Link></li>
            <li><Link>کارت و پوستر</Link></li>
            <li><Link>جشن و مهمانی</Link></li>
          </ul>
        </div>
  )
}

export default MyNavbar
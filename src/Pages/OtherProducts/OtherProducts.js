import React, { useState } from 'react'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import Header from '../../Components/Header/Header'
import MyFooter from '../../Components/MyFooter/MyFooter'
import { NavLink } from 'react-router-dom'
import BestsellerItem from "../../Components/BestsellerItem/BestsellerItem"
import HeartImg from "../../Assets/Images/heart.png"
import manImg from "../../Assets/Images/man.png"
import "./OtherProducts.css"

const OtherProducts = () => {
  const [todayDelivery, setTodayDelivery] = useState(false);
  const [available, setAvailable] = useState(false);
  return (
    <div>
      <Header />
      <hr />
      <div className='max-w-[1224px] m-auto'>
        <MyNavbar />
        <div className='flex'>
          <div className="right h-[480px] w-72 rounded-lg p-5 border border-[#D6D6D6]">
            <div className='flex justify-between mb-5'>
              <h4 className='text-base font-normal'>فیلتر ها </h4>
              <button className='text-baseRed font-bold text-[10px]'>حذف فیلترها</button>
            </div>
            <div className='flex flex-col gap-5'>
              <select className='w-full border-b border-[#D6D6D6] h-8 outline-none' name="" id="">
                <option value="">برند</option>
                <option value="">برند</option>
                <option value="">برند</option>
              </select>
              <select className='w-full border-b border-[#D6D6D6] h-8 outline-none' name="" id="">
                <option value="">اندازه</option>
                <option value="">اندازه</option>
                <option value="">اندازه</option>
              </select>
              <select className='w-full border-b border-[#D6D6D6] h-8 outline-none' name="" id="">
                <option value="">رنگ</option>
                <option value="">رنگ</option>
                <option value="">رنگ</option>
              </select>
              <div className='flex justify-between'>
                <p>ارسال امروز</p>
                <div className='border border-[#D6D6D6] rounded-2xl w-10 h-5 relative '>
                  <div onClick={() => setTodayDelivery(!todayDelivery)} className={`cursor-pointer w-4 h-4 absolute left-0.5 bottom-0.5  transition-all ${todayDelivery ? "translate-x-[19px] bg-baseRed" : "bg-[#898989]"} rounded-full`}></div>
                </div>
              </div>
              <div className='flex justify-between'>
                <p>فقط کالاهای موجود</p>
                <div className='border border-[#D6D6D6] rounded-2xl w-10 h-5 relative '>
                  <div onClick={() => setAvailable(!available)} className={`cursor-pointer w-4 h-4 absolute left-0.5 bottom-0.5 transition-all ${available ? "translate-x-[19px] bg-baseRed" : "bg-[#898989]"} rounded-full`}></div>
                </div>
              </div>

              <select className='w-full border-b border-[#D6D6D6] h-8 outline-none' name="" id="">
                <option value="">محدوده قیمت</option>
                <option value="">محدوده قیمت</option>
                <option value="">محدوده قیمت</option>
              </select>
              <select className='w-full border-b border-[#D6D6D6] h-8 outline-none' name="" id="">
                <option value="">مدل</option>
                <option value="">مدل</option>
                <option value="">مدل</option>
              </select>
              <select className='w-full  h-8 outline-none' name="" id="">
                <option value="">طرح</option>
                <option value="">طرح</option>
                <option value="">طرح</option>
              </select>
            </div>
          </div>
          <div className='mr-8'>
            <div>
              <ul className='flex gap-6'>
                <li><NavLink className="">پربازدیدترین </NavLink></li>
                <li><NavLink to="/">جدیدترین </NavLink></li>
                <li><NavLink to="/">پرفروش ترین </NavLink></li>
                <li><NavLink to="/">گران ترین </NavLink></li>
                <li><NavLink to="/">ارزان ترین </NavLink></li>
              </ul>
            </div>
            <div className='flex w-[950px] gap-6 flex-wrap mt-6'>
              <BestsellerItem img={manImg} title="تیشرت زنانه کد ۱۴۴۰" text="جنس نخ، رنگ بندی متنوع، قابل طراحی  " heart={HeartImg} ></BestsellerItem>
              <BestsellerItem img={manImg} title="تیشرت زنانه کد ۱۴۴۰" text="جنس نخ، رنگ بندی متنوع، قابل طراحی  " heart={HeartImg} ></BestsellerItem>
              <BestsellerItem img={manImg} title="تیشرت زنانه کد ۱۴۴۰" text="جنس نخ، رنگ بندی متنوع، قابل طراحی  " heart={HeartImg} ></BestsellerItem>
              <BestsellerItem img={manImg} title="تیشرت زنانه کد ۱۴۴۰" text="جنس نخ، رنگ بندی متنوع، قابل طراحی  " heart={HeartImg} ></BestsellerItem>
              <BestsellerItem img={manImg} title="تیشرت زنانه کد ۱۴۴۰" text="جنس نخ، رنگ بندی متنوع، قابل طراحی  " heart={HeartImg} ></BestsellerItem>
              <BestsellerItem img={manImg} title="تیشرت زنانه کد ۱۴۴۰" text="جنس نخ، رنگ بندی متنوع، قابل طراحی  " heart={HeartImg} ></BestsellerItem>
              <BestsellerItem img={manImg} title="تیشرت زنانه کد ۱۴۴۰" text="جنس نخ، رنگ بندی متنوع، قابل طراحی  " heart={HeartImg} ></BestsellerItem>
              <BestsellerItem img={manImg} title="تیشرت زنانه کد ۱۴۴۰" text="جنس نخ، رنگ بندی متنوع، قابل طراحی  " heart={HeartImg} ></BestsellerItem>
              <BestsellerItem img={manImg} title="تیشرت زنانه کد ۱۴۴۰" text="جنس نخ، رنگ بندی متنوع، قابل طراحی  " heart={HeartImg} ></BestsellerItem>

            </div>
          </div>
        </div>

        <div>

        </div>


      </div>
      <MyFooter />
    </div>
  )
}

export default OtherProducts
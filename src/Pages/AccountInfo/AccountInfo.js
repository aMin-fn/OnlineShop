import React from 'react'
import Profile from '../../Components/Profile/Profile'
import Header from '../../Components/Header/Header'
import MyFooter from '../../Components/MyFooter/MyFooter'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import BestsellerItem from '../../Components/BestsellerItem/BestsellerItem'
import HeartImg from "../../Assets/Images/heart.png"
import womenImg from "../../Assets/Images/women.png"
import Item from '../../Components/Item/Item'
import { NavLink } from 'react-router-dom'
const AccountInfo = () => {
    return (
        <div>
            <Header />
            <hr />
            <div className='max-w-[1224px] m-auto'>
                <MyNavbar />
                <h1 className='font-bold text-3xl my-5'>پروفایل</h1>
                <div className='flex gap-6'>
                    <Profile />
                    <div className='border border-solid border-[#EDEDED] h-[602px] w-[808px] rounded-2xl px-6'>
                        <h1 className='font-bold text-2xl my-5'>اطلاعات حساب کاربری</h1>
                        <div className='relative'>
                            <ul className='flex gap-7'>
                                <li>
                                    <NavLink className='py-1.5 px-2 ' to="/account-info">اطلاعات کاربری</NavLink>
                                </li>
                                <li>
                                    <NavLink className='py-1.5 px-2' to="/" >اطلاعات تماس</NavLink>
                                </li>

                            </ul>
                            <hr className='w-full mt-1.5  border-[#EDEDED]' />


                        </div>
                        <div className='w-full flex flex-col gap-8 my-8 items-center'>
                            <div className='flex gap-6'>
                                <div className='h-16 w-72 text-[#CBCBCB]'>
                                    <label htmlFor="">نام و نام خانوادگی </label>
                                    <input className='py-1.5 px-2 w-full border border-[#CBCBCB] rounded-lg h-10' type="text" placeholder='نگار زمانی' />
                                </div>
                                <div className='h-16 w-72 text-[#CBCBCB] relative'>
                                    <label htmlFor="">نام و نام خانوادگی </label>
                                    <input
                                        className="w-full h-10  placeholder:absolute placeholder:bottom-2 placeholder:left-2 px-3 border text-left border-[#CBCBCB] rounded-lg text-sm leading-10 placeholder:text-[#CBCBCB] placeholder:text-sm"
                                        type="password"
                                        placeholder="***********"
                                    />
                                </div>

                            </div>
                            <div className='flex gap-6'>
                                <div className='h-16 w-72 text-[#CBCBCB] flex flex-col'>
                                    <label htmlFor="">تحصیلات (اختیاری)</label>
                                    <select name="" id="" className='outline-none border border-[#CBCBCB] rounded-lg h-10 w-full'>
                                        <option value="">انتخاب کنید</option>
                                    </select>
                                </div>
                                <div className='h-16 w-72 text-[#CBCBCB] flex flex-col'>
                                    <label htmlFor="">شغل (اختیاری)</label>
                                    <select name="" id="" className='outline-none border border-[#CBCBCB] rounded-lg h-10 w-full'>
                                        <option value="">انتخاب کنید</option>
                                    </select>
                                </div>



                            </div>
                            <div className='flex gap-6'>
                                <div className='flex flex-col  text-[#CBCBCB] '>
                                    <label htmlFor="">تاریخ تولد</label>
                                    <input className='border w-72 h-10 rounded-lg mt-2 py-1.5 px-2' type="date" placeholder='۱۳۷۰/۰۱/۰۱' />
                                </div>
                                <div className='flex flex-col  text-[#CBCBCB] '>
                                    <label htmlFor="">آدرس ایمیل</label>
                                    <input className='text-left border w-72 h-10 rounded-lg mt-2 py-1.5 px-2' type="email" placeholder='n.zamani@gmail.com' />
                                </div>

                            </div>
                            <div className='flex gap-6'>
                                <div className='h-16 w-72 text-[#CBCBCB]'>
                                    <label htmlFor="">کلمه عبور جدید</label>
                                    <input  className='w-full border border-[#CBCBCB] rounded-lg h-10' type="password" placeholder='' />
                                </div>
                                <div className='h-16 w-72 text-[#CBCBCB]'>
                                    <label htmlFor="">تکرار کلمه عبور جدید</label>
                                    <input className='w-full border border-[#CBCBCB] rounded-lg h-10' type="password" placeholder='' />
                                </div>

                            </div>
                        </div>
                        <div className='w-full flex justify-end'>
                            <button className='bg-baseRed w-[184px] h-10 text-white rounded-lg ml-20'>
                            ثبت اطلاعات     
                            </button>
                        </div>
                    </div>

                </div>

            </div>
            <MyFooter />
        </div>
    )
}

export default AccountInfo
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import IphoneImg from "../../Assets/Images/Rectangle 8.png"
const Delivered = () => {
    return (
        <div>

            <div className='border border-solid border-[#EDEDED] rounded-lg w-full h-[306px] my-6 p-4 relative'>
                <div className='flex gap-2'>
                    <svg className='bg-green-500 rounded-full' width="24px" height="24px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003">

                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                        <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L10.4142 17C9.63316 17.7811 8.36683 17.781 7.58579 17L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z" fill="#ffffff" /> </g>

                    </svg>
                    <p>تحویل شده</p>
                </div>
                <div className='flex gap-6 my-4'>
                    <p>۳ شهریور ۱۴۰۲</p>
                    <p>کد سفارش ۳۵۴۵۳۴۵۲۱</p>
                    <p>مبلغ ۵۴۵,۰۰۰ تومان</p>
                    <p>تخفیف ۵۴۵,۰۰۰ تومان</p>
                </div>
                <hr className='absolute  w-full right-0 ' />
                <div className='flex gap-[18.5px] mt-8 mb-4'>
                    <img src={IphoneImg} alt="" />
                    <img src={IphoneImg} alt="" />
                    <img src={IphoneImg} alt="" />
                    <img src={IphoneImg} alt="" />
                    <img src={IphoneImg} alt="" />
                    <img src={IphoneImg} alt="" />
                    <img src={IphoneImg} alt="" />
                </div>
                <hr className='absolute  w-full right-0 ' />
                <div className='flex gap-2 justify-end mt-12'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9999 22.2478C11.1799 22.2478 10.3599 21.9878 9.6799 21.4778L4.46991 17.5778C3.49991 16.8478 2.91992 15.6878 2.91992 14.4778V1.75781H21.0799V14.4778C21.0799 15.6878 20.4999 16.8478 19.5299 17.5778L14.3199 21.4778C13.6399 21.9878 12.8199 22.2478 11.9999 22.2478ZM4.41992 3.24782V14.4678C4.41992 15.2078 4.7799 15.9178 5.3699 16.3678L10.5799 20.2678C11.4199 20.8978 12.5899 20.8978 13.4299 20.2678L18.6399 16.3678C19.2299 15.9178 19.5899 15.2078 19.5899 14.4678V3.24782H4.41992Z" fill="#A72F3B" />
                        <path d="M22 3.25H2C1.59 3.25 1.25 2.91 1.25 2.5C1.25 2.09 1.59 1.75 2 1.75H22C22.41 1.75 22.75 2.09 22.75 2.5C22.75 2.91 22.41 3.25 22 3.25Z" fill="#A72F3B" />
                        <path d="M16 8.75H8C7.59 8.75 7.25 8.41 7.25 8C7.25 7.59 7.59 7.25 8 7.25H16C16.41 7.25 16.75 7.59 16.75 8C16.75 8.41 16.41 8.75 16 8.75Z" fill="#A72F3B" />
                        <path d="M16 13.75H8C7.59 13.75 7.25 13.41 7.25 13C7.25 12.59 7.59 12.25 8 12.25H16C16.41 12.25 16.75 12.59 16.75 13C16.75 13.41 16.41 13.75 16 13.75Z" fill="#A72F3B" />
                    </svg>
                    <p className='text-baseRed font-medium'>مشاهده سفارش</p>
                </div>


            </div>
          
            <div className='border border-solid border-[#EDEDED] rounded-lg w-full h-[306px] my-6 p-4 relative'>
                <div className='flex gap-2'>
                    <svg className='bg-green-500 rounded-full' width="24px" height="24px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003">

                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                        <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L10.4142 17C9.63316 17.7811 8.36683 17.781 7.58579 17L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z" fill="#ffffff" /> </g>

                    </svg>
                    <p>تحویل شده</p>
                </div>
                <div className='flex gap-6 my-4'>
                    <p>۳ شهریور ۱۴۰۲</p>
                    <p>کد سفارش ۳۵۴۵۳۴۵۲۱</p>
                    <p>مبلغ ۵۴۵,۰۰۰ تومان</p>
                    <p>تخفیف ۵۴۵,۰۰۰ تومان</p>
                </div>
                <hr className='absolute  w-full right-0 ' />
                <div className='flex gap-[18.5px] mt-8 mb-4'>
                    <img src={IphoneImg} alt="" />
                    <img src={IphoneImg} alt="" />
                    <img src={IphoneImg} alt="" />
                    <img src={IphoneImg} alt="" />
                    <img src={IphoneImg} alt="" />
                    <img src={IphoneImg} alt="" />
                    <img src={IphoneImg} alt="" />
                </div>
                <hr className='absolute  w-full right-0 ' />
                <div className='flex gap-2 justify-end mt-12'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9999 22.2478C11.1799 22.2478 10.3599 21.9878 9.6799 21.4778L4.46991 17.5778C3.49991 16.8478 2.91992 15.6878 2.91992 14.4778V1.75781H21.0799V14.4778C21.0799 15.6878 20.4999 16.8478 19.5299 17.5778L14.3199 21.4778C13.6399 21.9878 12.8199 22.2478 11.9999 22.2478ZM4.41992 3.24782V14.4678C4.41992 15.2078 4.7799 15.9178 5.3699 16.3678L10.5799 20.2678C11.4199 20.8978 12.5899 20.8978 13.4299 20.2678L18.6399 16.3678C19.2299 15.9178 19.5899 15.2078 19.5899 14.4678V3.24782H4.41992Z" fill="#A72F3B" />
                        <path d="M22 3.25H2C1.59 3.25 1.25 2.91 1.25 2.5C1.25 2.09 1.59 1.75 2 1.75H22C22.41 1.75 22.75 2.09 22.75 2.5C22.75 2.91 22.41 3.25 22 3.25Z" fill="#A72F3B" />
                        <path d="M16 8.75H8C7.59 8.75 7.25 8.41 7.25 8C7.25 7.59 7.59 7.25 8 7.25H16C16.41 7.25 16.75 7.59 16.75 8C16.75 8.41 16.41 8.75 16 8.75Z" fill="#A72F3B" />
                        <path d="M16 13.75H8C7.59 13.75 7.25 13.41 7.25 13C7.25 12.59 7.59 12.25 8 12.25H16C16.41 12.25 16.75 12.59 16.75 13C16.75 13.41 16.41 13.75 16 13.75Z" fill="#A72F3B" />
                    </svg>
                    <p className='text-baseRed font-medium'>مشاهده سفارش</p>
                </div>


            </div>
          
        </div>
    )
}

export default Delivered
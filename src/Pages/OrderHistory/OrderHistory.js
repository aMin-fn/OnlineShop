import React from 'react'
import Profile from '../../Components/Profile/Profile'
import Header from '../../Components/Header/Header'
import MyFooter from '../../Components/MyFooter/MyFooter'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import BestsellerItem from '../../Components/BestsellerItem/BestsellerItem'
import HeartImg from "../../Assets/Images/heart.png"
import womenImg from "../../Assets/Images/women.png"
import Item from '../../Components/Item/Item'
import { Link, NavLink, Outlet } from 'react-router-dom'
import IphoneImg from "../../Assets/Images/Rectangle 12.png"
import "./OrderHistory.css"
const OrderHistory = () => {
    return (
        <div>
            <Header />
            <hr />
            <div className='max-w-[1224px] m-auto'>
                <MyNavbar />
                <h1 className='font-bold text-3xl my-5'>پروفایل</h1>
                <div className='flex gap-6'>
                    <Profile />
                    <div className='border border-solid border-[#EDEDED] h-[785px] w-[808px] rounded-2xl px-6'>
                        <h1 className='font-bold text-2xl my-5'>تاریخچه سفارشات</h1>
                        <div>
                            <ul className='flex gap-7'>
                                <li>
                                    <NavLink className='py-1.5 px-2 ' to="current">جاری ۲</NavLink>
                                </li>
                                <li>
                                    <NavLink className='py-1.5 px-2' to="delivered" >تحویل شده ۲۶</NavLink>
                                </li>
                                <li>
                                    <NavLink className='py-1.5 px-2' to="returned" >مرجوع شده ۴</NavLink>
                                </li>
                                <li>
                                    <NavLink className='py-1.5 px-2' to="canceled" >لغو شده ۴</NavLink>
                                </li>
                            </ul>
                        </div>
                        <Outlet />
                    </div>

                </div>

            </div>
            <MyFooter />
        </div>
    )
}

export default OrderHistory
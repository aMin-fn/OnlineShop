import React, { useEffect, useState } from 'react'
import Profile from '../../Components/Profile/Profile'
import Header from '../../Components/Header/Header'
import MyFooter from '../../Components/MyFooter/MyFooter'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import BestsellerItem from '../../Components/BestsellerItem/BestsellerItem'
import HeartImg from "../../Assets/Images/heart.png"
import womenImg from "../../Assets/Images/women.png"
import Item from '../../Components/Item/Item'

import axios from 'axios'
const UserProfile = () => {
    const [myFav, setMyFav] = useState([]);
        const [profile, setProfile] = useState({});

        const getprofile = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/accounts/profile/', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            console.log("✅ profile:", response.data);
            // بقیه کدها مثل setState یا نمایش داده‌ها...
            setProfile(response.data)
        } catch (error) {
            if (error.response) {
                // خطاهایی که از سمت سرور اومدن (مثلاً 401، 403، 500)
                console.error(`❌ Error ${error.response.status}:`, error.response.data);

                if (error.response.status === 401) {
                    // مثلاً بفرستش به صفحه لاگین یا پیام بده
                    alert("دسترسی غیرمجاز. لطفاً دوباره لاگین کنید.");
                }

            } else if (error.request) {
                // درخواست فرستاده شده ولی پاسخی نگرفتیم
                console.error("❌ No response from server:", error.request);
            } else {
                // خطای مربوط به ساختار خود کد یا axios
                console.error("❌ Request setup error:", error.message);
            }
        }
    };
    useEffect(() => {
        getprofile()
    }, [])
    const getFavorites = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/accounts/favorites/', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setMyFav(response.data)
            console.log("✅ Favorites:", response.data);
            // بقیه کدها مثل setState یا نمایش داده‌ها...

        } catch (error) {
            if (error.response) {
                // خطاهایی که از سمت سرور اومدن (مثلاً 401، 403، 500)
                console.error(`❌ Error ${error.response.status}:`, error.response.data);

                if (error.response.status === 401) {
                    // مثلاً بفرستش به صفحه لاگین یا پیام بده
                    alert("دسترسی غیرمجاز. لطفاً دوباره لاگین کنید.");
                }

            } else if (error.request) {
                // درخواست فرستاده شده ولی پاسخی نگرفتیم
                console.error("❌ No response from server:", error.request);
            } else {
                // خطای مربوط به ساختار خود کد یا axios
                console.error("❌ Request setup error:", error.message);
            }
        }
    };
    useEffect(() => {
        getFavorites()
    }, [])

    console.log(profile);
    



    return (
        <div>
            <Header />
            <hr />
            <div className='max-w-[1224px] m-auto'>
                <MyNavbar />
                <h1 className='font-bold text-3xl my-5'>پروفایل</h1>
                <div className='flex'>
                    <Profile />
                    <div className=' border border-solid border-[#EDEDED] rounded-2xl flex flex-col  w-[808px]  mr-6 ' >
                        <div className='px-6'>
                            <h1 className='font-bold text-2xl my-5'>سفارشات من </h1>
                            <div className='flex'>
                                <div className='flex-1'>
                                    <div className='flex justify-center'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#B95962" />
                                            <path d="M12 13C11.44 13 11 12.55 11 12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12C13 12.55 12.56 13 12 13Z" fill="#B95962" />
                                            <path d="M16 13C15.44 13 15 12.55 15 12C15 11.45 15.45 11 16 11C16.55 11 17 11.45 17 12C17 12.55 16.56 13 16 13Z" fill="#B95962" />
                                            <path d="M8 13C7.44 13 7 12.55 7 12C7 11.45 7.45 11 8 11C8.55 11 9 11.45 9 12C9 12.55 8.56 13 8 13Z" fill="#B95962" />
                                        </svg>
                                        <div className='mr-2 w-[100px]'>
                                            <p className='text-[#434343]'>۴۵ سفارش</p>
                                            <p className='text-xs text-[#434343]'>جاری</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-center mt-4 '>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#B95962" />
                                            <path d="M12 13C11.44 13 11 12.55 11 12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12C13 12.55 12.56 13 12 13Z" fill="#B95962" />
                                            <path d="M16 13C15.44 13 15 12.55 15 12C15 11.45 15.45 11 16 11C16.55 11 17 11.45 17 12C17 12.55 16.56 13 16 13Z" fill="#B95962" />
                                            <path d="M8 13C7.44 13 7 12.55 7 12C7 11.45 7.45 11 8 11C8.55 11 9 11.45 9 12C9 12.55 8.56 13 8 13Z" fill="#B95962" />
                                        </svg>
                                        <div className='mr-2 w-[100px]'>
                                            <p className='text-[#434343]'>۵۴ نظر</p>
                                            <p className='text-xs text-[#434343]'>ثبت شده</p>
                                        </div>

                                    </div>

                                </div>

                                <div className='flex-1 border-x border-solid border-[#EDEDED]'>
                                    <div className='flex justify-center'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#B95962" />
                                            <path d="M12 13C11.44 13 11 12.55 11 12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12C13 12.55 12.56 13 12 13Z" fill="#B95962" />
                                            <path d="M16 13C15.44 13 15 12.55 15 12C15 11.45 15.45 11 16 11C16.55 11 17 11.45 17 12C17 12.55 16.56 13 16 13Z" fill="#B95962" />
                                            <path d="M8 13C7.44 13 7 12.55 7 12C7 11.45 7.45 11 8 11C8.55 11 9 11.45 9 12C9 12.55 8.56 13 8 13Z" fill="#B95962" />
                                        </svg>
                                        <div className='mr-2 w-[100px]'>
                                            <p className='text-[#434343]'>۴۵ سفارش</p>
                                            <p className='text-xs text-[#434343]'>جاری</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-center mt-4 '>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#B95962" />
                                            <path d="M12 13C11.44 13 11 12.55 11 12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12C13 12.55 12.56 13 12 13Z" fill="#B95962" />
                                            <path d="M16 13C15.44 13 15 12.55 15 12C15 11.45 15.45 11 16 11C16.55 11 17 11.45 17 12C17 12.55 16.56 13 16 13Z" fill="#B95962" />
                                            <path d="M8 13C7.44 13 7 12.55 7 12C7 11.45 7.45 11 8 11C8.55 11 9 11.45 9 12C9 12.55 8.56 13 8 13Z" fill="#B95962" />
                                        </svg>
                                        <div className='mr-2 w-[100px]'>
                                            <p className='text-[#434343]'>۵۴ نظر</p>
                                            <p className='text-xs text-[#434343]'>ثبت شده</p>
                                        </div>

                                    </div>

                                </div>

                                <div className='flex-1'>
                                    <div className='flex justify-center'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#B95962" />
                                            <path d="M12 13C11.44 13 11 12.55 11 12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12C13 12.55 12.56 13 12 13Z" fill="#B95962" />
                                            <path d="M16 13C15.44 13 15 12.55 15 12C15 11.45 15.45 11 16 11C16.55 11 17 11.45 17 12C17 12.55 16.56 13 16 13Z" fill="#B95962" />
                                            <path d="M8 13C7.44 13 7 12.55 7 12C7 11.45 7.45 11 8 11C8.55 11 9 11.45 9 12C9 12.55 8.56 13 8 13Z" fill="#B95962" />
                                        </svg>
                                        <div className='mr-2 w-[100px]'>
                                            <p className='text-[#434343]'>۴۵ سفارش</p>
                                            <p className='text-xs text-[#434343]'>جاری</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-center mt-4 '>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#B95962" />
                                            <path d="M12 13C11.44 13 11 12.55 11 12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12C13 12.55 12.56 13 12 13Z" fill="#B95962" />
                                            <path d="M16 13C15.44 13 15 12.55 15 12C15 11.45 15.45 11 16 11C16.55 11 17 11.45 17 12C17 12.55 16.56 13 16 13Z" fill="#B95962" />
                                            <path d="M8 13C7.44 13 7 12.55 7 12C7 11.45 7.45 11 8 11C8.55 11 9 11.45 9 12C9 12.55 8.56 13 8 13Z" fill="#B95962" />
                                        </svg>
                                        <div className='mr-2 w-[100px]'>
                                            <p className='text-[#434343]'>۵۴ نظر</p>
                                            <p className='text-xs text-[#434343]'>ثبت شده</p>
                                        </div>

                                    </div>

                                </div>



                            </div>
                        </div>
                        <hr className='mt-4' />
                        <div className='pr-6'>
                            <div className='flex justify-between items-center px-6 '>
                                <h1 className='font-bold text-2xl my-5'>علاقه مندی های من</h1>
                                <a className='text-baseRed' href="">مشاهده بیشتر</a>
                            </div>
                            <div className='flex gap-6 z-0 relative '>
                                {myFav.map((item) => {
                                    return (
                                        <BestsellerItem img={item.image_url} text={item.description} title={item.name} heart={HeartImg} price={item.price} ></BestsellerItem>

                                    )

                                })}
                                <div className='absolute bottom-[45%] -left-5 z-10 border-2 border-solid border-[#86262F] rounded-full w-10 h-10 flex justify-center items-center '>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#86262F" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="#86262F"></path> </g></svg>
                                </div>
                            </div>
                            <hr className='mt-6' />

                        </div>
                        <div className='pr-6'>
                            <div className='flex justify-between items-center px-6'>
                                <h1 className='font-bold text-2xl my-5'>گالری من</h1>
                                <a className='text-baseRed' href="">مشاهده بیشتر</a>
                            </div>
                            <div className='flex overflow-auto gap-6'>
                                <BestsellerItem img={womenImg} title="کیف زنانه" text="دارای رنگ بندی، قابل طراحی" heart={HeartImg} ></BestsellerItem>
                                <BestsellerItem img={womenImg} title="کیف زنانه" text="دارای رنگ بندی، قابل طراحی" heart={HeartImg} ></BestsellerItem>
                                <BestsellerItem img={womenImg} title="کیف زنانه" text="دارای رنگ بندی، قابل طراحی" heart={HeartImg} ></BestsellerItem>

                            </div>
                            <hr className='mt-6' />

                        </div>
                        <div className='pr-6'>
                            <div className='flex justify-between items-center px-6'>
                                <h1 className='font-bold text-2xl my-5'>خرید های پرتکرار من </h1>
                                <a className='text-baseRed' href="">مشاهده بیشتر</a>
                            </div>
                            <div className='flex overflow-hidden gap-6'>
                                <Item />
                                <Item />
                                <Item />


                            </div>
                            <hr className='mt-6' />

                        </div>



                    </div>
                </div>

            </div>
            <MyFooter />

        </div>
    )
}

export default UserProfile
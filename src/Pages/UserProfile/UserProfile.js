import React, { useEffect, useState } from 'react'
import Profile from '../../Components/Profile/Profile'
import Header from '../../Components/Header/Header'
import MyFooter from '../../Components/MyFooter/MyFooter'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import BestsellerItem from '../../Components/BestsellerItem/BestsellerItem'
import HeartImg from "../../Assets/Images/heart.png"
import womenImg from "../../Assets/Images/women.png"
import Item from '../../Components/Item/Item'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios'
import { Link } from 'react-router-dom'
import StickerImg from "../../Assets/Images/2.png"
import GalleyImg from "../../Assets/Images/gallery-add.svg"
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
    const products = [0, 0, 0, 0, 0, 0, 0, 0];
    const [liked, setLiked] = useState(Array(products.length).fill(false));
    const [added, setAdded] = useState(Array(products.length).fill(false));

    const toggleLike = (index) => {
        const updatedLikes = [...liked];
        updatedLikes[index] = !updatedLikes[index];
        setLiked(updatedLikes);
    };
    const toggleAdd = (index) => {
        const updatedAdds = [...added];
        updatedAdds[index] = !updatedAdds[index];
        setAdded(updatedAdds);
    }; return (
        <div>
            <Header />
            <hr />
            <div className='max-w-[1224px] m-auto'>
                <MyNavbar />
                <h1 className='hidden lg:block font-bold text-3xl my-5'>پروفایل</h1>
                <div className='flex flex-col lg:flex-row'>
                    <Profile />
                    <div className=' border border-solid border-[#EDEDED] rounded-2xl flex flex-col  lg:w-[808px]  lg:mr-6 ' >
                        <div className='px-6'>
                            <h1 className='font-bold text-lg lg:text-2xl my-5'>سفارشات من </h1>
                            <div className='flex text-sm lg:text-base'>
                                <div className='flex-1 '>
                                    <div className='flex justify-center'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#B95962" />
                                            <path d="M12 13C11.44 13 11 12.55 11 12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12C13 12.55 12.56 13 12 13Z" fill="#B95962" />
                                            <path d="M16 13C15.44 13 15 12.55 15 12C15 11.45 15.45 11 16 11C16.55 11 17 11.45 17 12C17 12.55 16.56 13 16 13Z" fill="#B95962" />
                                            <path d="M8 13C7.44 13 7 12.55 7 12C7 11.45 7.45 11 8 11C8.55 11 9 11.45 9 12C9 12.55 8.56 13 8 13Z" fill="#B95962" />
                                        </svg>
                                        <div className='mr-2 lg:w-[100px]'>
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
                                        <div className='mr-2 lg:w-[100px]'>
                                            <p className='text-[#434343]'>۵۴ نظر</p>
                                            <p className='text-xs text-[#434343]'>ثبت شده</p>
                                        </div>

                                    </div>
                                </div>
                                <div className='flex-1 lg:border-x border-solid border-[#EDEDED]'>
                                    <div className='flex justify-center'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#B95962" />
                                            <path d="M12 13C11.44 13 11 12.55 11 12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12C13 12.55 12.56 13 12 13Z" fill="#B95962" />
                                            <path d="M16 13C15.44 13 15 12.55 15 12C15 11.45 15.45 11 16 11C16.55 11 17 11.45 17 12C17 12.55 16.56 13 16 13Z" fill="#B95962" />
                                            <path d="M8 13C7.44 13 7 12.55 7 12C7 11.45 7.45 11 8 11C8.55 11 9 11.45 9 12C9 12.55 8.56 13 8 13Z" fill="#B95962" />
                                        </svg>
                                        <div className='mr-2 lg:w-[100px]'>
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
                                        <div className='mr-2 lg:w-[100px]'>
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
                                        <div className='mr-2 lg:w-[100px]'>
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
                                        <div className='mr-2 lg:w-[100px]'>
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
                                <h1 className='font-bold text-sm lg:text-2xl my-5'>علاقه مندی های من</h1>
                                <a className='text-baseRed text-sm lg:text-base' href="">مشاهده بیشتر</a>
                            </div>
                            <div className='flex gap-6 z-0 relative '>
                                <Swiper
                                    spaceBetween={10}
                                    slidesPerView={2.25}
                                >
                                    {products.map((item) => {
                                        return (
                                            <SwiperSlide>                                            <BestsellerItem img={womenImg} title="کیف زنانه" text="دارای رنگ بندی، قابل طراحی" heart={HeartImg} ></BestsellerItem>

                                            </SwiperSlide>
                                        )
                                    })}

                                </Swiper>


                            </div>
                            <hr className='mt-6' />

                        </div>
                        <div className='pr-6'>
                            <div className='flex justify-between items-center px-6 '>
                                <h1 className='font-bold text-sm lg:text-2xl my-5'>گالری   من</h1>
                                <a className='text-baseRed text-sm lg:text-base' href="">مشاهده بیشتر</a>
                            </div>
                            <div className='flex gap-6 z-0 relative '>
                                <Swiper
                                    spaceBetween={10}
                                    slidesPerView={2.25}
                                >
                                    {products.map((item,index) => {
                                        return (
                                            <SwiperSlide>
                                                <div key={index} className="border border-[#CBCBCB] border-solid p-4 rounded-2xl flex flex-col justify-between">
                                                    <div className="img-container">
                                                        <img className="w-full" src={StickerImg} alt="" />
                                                    </div>

                                                    <div className="desc flex justify-between w-full">
                                                        <p className="font-bold text-sm lg:text-lg">استیکر</p>
                                                        {!liked[index] ? (
                                                            <svg onClick={() => toggleLike(index)} width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12 22.1496C11.69 22.1496 11.39 22.1096 11.14 22.0196C7.32 20.7096 1.25 16.0596 1.25 9.18961C1.25 5.68961 4.08 2.84961 7.56 2.84961C9.25 2.84961 10.83 3.50961 12 4.68961C13.17 3.50961 14.75 2.84961 16.44 2.84961C19.92 2.84961 22.75 5.69961 22.75 9.18961C22.75 16.0696 16.68 20.7096 12.86 22.0196C12.61 22.1096 12.31 22.1496 12 22.1496ZM7.56 4.34961C4.91 4.34961 2.75 6.51961 2.75 9.18961C2.75 16.0196 9.32 19.8196 11.63 20.6096C11.81 20.6696 12.2 20.6696 12.38 20.6096C14.68 19.8196 21.26 16.0296 21.26 9.18961C21.26 6.51961 19.1 4.34961 16.45 4.34961C14.93 4.34961 13.52 5.05961 12.61 6.28961C12.33 6.66961 11.69 6.66961 11.41 6.28961C10.48 5.04961 9.08 4.34961 7.56 4.34961Z" />
                                                            </svg>
                                                        ) : (
                                                            <svg onClick={() => toggleLike(index)} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M20.3115 4.96071C17.9773 2.58032 15.2743 3.58425 13.6007 4.64593C12.655 5.24582 11.345 5.24582 10.3993 4.64593C8.72564 3.58427 6.02272 2.58035 3.68853 4.96072C-1.85249 10.6114 7.64988 21.5 12 21.5C16.3502 21.5 25.8525 10.6114 20.3115 4.96071Z" fill="#A72F3B" />
                                                            </svg>
                                                        )}
                                                    </div>

                                                    <p className="font-normal text-xs lg:text-sm mt-2">قابل طراحی و چاپ بر روی انواع محصولات</p>
                                                    {added[index] ? (<div className="button">
                                                        <button onClick={() => toggleAdd(index)} type="button" className="flex bg-baseRed py-2 mt-3 lg:px-6 items-center justify-center border border-solid border-baseRed text-white w-full lg:w-[256px] h-10 rounded-lg">
                                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.50033 7.16667C5.48699 7.16667 4.66699 6.34667 4.66699 5.33333C4.66699 4.32 5.48699 3.5 6.50033 3.5C7.51366 3.5 8.33366 4.32 8.33366 5.33333C8.33366 6.34667 7.51366 7.16667 6.50033 7.16667ZM6.50033 4.5C6.04033 4.5 5.66699 4.87333 5.66699 5.33333C5.66699 5.79333 6.04033 6.16667 6.50033 6.16667C6.96033 6.16667 7.33366 5.79333 7.33366 5.33333C7.33366 4.87333 6.96033 4.5 6.50033 4.5Z" fill="white" />
                                                                <path d="M10.4997 15.1666H6.49967C2.87967 15.1666 1.33301 13.6199 1.33301 9.99992V5.99992C1.33301 2.37992 2.87967 0.833252 6.49967 0.833252H9.16634C9.43967 0.833252 9.66634 1.05992 9.66634 1.33325C9.66634 1.60659 9.43967 1.83325 9.16634 1.83325H6.49967C3.42634 1.83325 2.33301 2.92659 2.33301 5.99992V9.99992C2.33301 13.0733 3.42634 14.1666 6.49967 14.1666H10.4997C13.573 14.1666 14.6663 13.0733 14.6663 9.99992V6.66659C14.6663 6.39325 14.893 6.16659 15.1663 6.16659C15.4397 6.16659 15.6663 6.39325 15.6663 6.66659V9.99992C15.6663 13.6199 14.1197 15.1666 10.4997 15.1666Z" fill="white" />
                                                                <path d="M12.1396 4.79999C12.013 4.79999 11.8863 4.75333 11.7863 4.65333L10.813 3.67999C10.6196 3.48666 10.6196 3.16666 10.813 2.97333C11.0063 2.77999 11.3263 2.77999 11.5196 2.97333L12.1396 3.59333L14.3863 1.34666C14.5796 1.15333 14.8996 1.15333 15.093 1.34666C15.2863 1.53999 15.2863 1.85999 15.093 2.05333L12.493 4.65333C12.3996 4.75333 12.2663 4.79999 12.1396 4.79999Z" fill="white" />
                                                                <path d="M2.28017 13.133C2.12017 13.133 1.96017 13.053 1.86684 12.913C1.71351 12.6864 1.77351 12.373 2.00684 12.2197L5.29351 10.013C6.01351 9.52638 7.00684 9.58638 7.66017 10.1397L7.88017 10.333C8.21351 10.6197 8.78017 10.6197 9.10684 10.333L11.8802 7.95305C12.5868 7.34638 13.7002 7.34638 14.4135 7.95305L15.5002 8.88638C15.7068 9.06638 15.7335 9.37971 15.5535 9.59305C15.3735 9.79971 15.0602 9.82638 14.8468 9.64638L13.7602 8.71305C13.4268 8.42638 12.8602 8.42638 12.5268 8.71305L9.75351 11.093C9.04684 11.6997 7.93351 11.6997 7.22017 11.093L7.00017 10.8997C6.69351 10.6397 6.18684 10.613 5.84684 10.8464L2.56017 13.053C2.47351 13.1064 2.37351 13.133 2.28017 13.133Z" fill="white" />
                                                            </svg>

                                                            <p className="font-medium text-[10px] lg:text-sm mr-1">ذخیره شده</p>
                                                        </button>
                                                    </div>) : (<div className="button">
                                                        <button onClick={() => toggleAdd(index)} type="button" className="flex text-baseRed py-2 mt-3 lg:px-6 items-center justify-center border border-solid border-baseRed w-full lg:w-[256px] h-10 rounded-lg">
                                                            <img className="w-4 lg:w-auto" src={GalleyImg} alt="" />
                                                            <p className="font-medium text-[10px] lg:text-sm mr-1">افزودن به گالری</p>
                                                        </button>
                                                    </div>)}

                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}

                                </Swiper>


                            </div>
                            <hr className='mt-6' />

                        </div>
                        <div className='pr-6'>
                            <div className='flex justify-between items-center px-6 '>
                                <h1 className='font-bold text-sm lg:text-2xl my-5'>خرید های پرتکرار   من</h1>
                                <a className='text-baseRed text-sm lg:text-base' href="">مشاهده بیشتر</a>
                            </div>
                            <div className='flex gap-6 z-0 relative '>
                                <Swiper
                                    spaceBetween={10}
                                    slidesPerView={2.25}
                                >
                                    {products.map((item) => {
                                        return (
                                            <SwiperSlide>                                            <BestsellerItem img={womenImg} title="کیف زنانه" text="دارای رنگ بندی، قابل طراحی" heart={HeartImg} ></BestsellerItem>

                                            </SwiperSlide>
                                        )
                                    })}

                                </Swiper>


                            </div>
                            <hr className='mt-6' />

                        </div>



                    </div>
                </div>

            </div>
            <div className="bg-baseRed lg:hidden flex justify-evenly py-6 text-white text-xs font-light fixed bottom-0 z-30 w-full ">
                <Link to={"/"} className="flex flex-col items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="#CBCBCB" />
                        <path d="M17.6 22.5601H6.39996C4.57996 22.5601 2.91996 21.1601 2.61996 19.3701L1.28996 11.4001C1.06996 10.1601 1.67996 8.57007 2.66996 7.78007L9.59996 2.23007C10.94 1.15007 13.05 1.16007 14.4 2.24007L21.33 7.78007C22.31 8.57007 22.91 10.1601 22.71 11.4001L21.38 19.3601C21.08 21.1301 19.38 22.5601 17.6 22.5601ZM11.99 2.93007C11.46 2.93007 10.93 3.09007 10.54 3.40007L3.60996 8.96007C3.04996 9.41007 2.64996 10.4501 2.76996 11.1601L4.09996 19.1201C4.27996 20.1701 5.32996 21.0601 6.39996 21.0601H17.6C18.67 21.0601 19.72 20.1701 19.9 19.1101L21.23 11.1501C21.34 10.4501 20.94 9.39007 20.39 8.95007L13.46 3.41007C13.06 3.09007 12.52 2.93007 11.99 2.93007Z" fill="#CBCBCB" />
                    </svg>

                    <p className='text-white'>خانه</p>
                </Link>
                <Link to={""} className="flex flex-col items-center">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9299 18.3699C10.7799 18.3699 10.6399 18.3299 10.5099 18.2399C10.2999 18.0999 10.1799 17.8699 10.1799 17.6199C10.1799 17.4699 10.1699 17.3099 10.1499 17.1499C10.0599 16.4399 9.73991 15.8199 9.19991 15.2799C8.65991 14.7399 7.98991 14.3999 7.26991 14.3099C7.14991 14.2999 6.97991 14.2899 6.81991 14.2999C6.55991 14.3199 6.31991 14.2099 6.16991 13.9999C6.01991 13.7999 5.97991 13.5299 6.05991 13.2899C6.20991 12.8799 6.42991 12.5099 6.68991 12.2099L8.22991 10.2699C10.8799 6.95992 16.2499 2.97992 20.1799 1.39992C21.0199 1.07992 21.8999 1.26992 22.5099 1.86992C23.1399 2.49992 23.3299 3.39992 22.9999 4.21992C21.4199 8.15992 17.4499 13.5199 14.1399 16.1699L12.1699 17.7499C11.7999 18.0199 11.4999 18.1899 11.1999 18.3099C11.1199 18.3499 11.0199 18.3699 10.9299 18.3699ZM8.03991 12.9399C8.87991 13.1599 9.62991 13.5999 10.2599 14.2299C10.8899 14.8499 11.3099 15.5699 11.5199 16.3699L13.2099 15.0099C16.3499 12.4999 20.1199 7.40992 21.6099 3.66992C21.7599 3.29992 21.5499 3.03992 21.4499 2.94992C21.3799 2.87992 21.1199 2.65992 20.7199 2.80992C16.9999 4.30992 11.9099 8.07992 9.38991 11.2199L8.03991 12.9399Z" fill="#CBCBCB" />
                        <path d="M4.58035 22.7501C3.83035 22.7501 3.11035 22.4501 2.57035 21.9101C1.95035 21.2901 1.65035 20.4301 1.75035 19.5501L2.02035 17.0901C2.28035 14.6501 4.28035 12.8401 6.76035 12.7901C6.95036 12.7801 7.20035 12.7901 7.43035 12.8101C8.52035 12.9501 9.49036 13.4401 10.2704 14.2201C11.0404 14.9901 11.5004 15.9101 11.6404 16.9401C11.6704 17.1601 11.6904 17.4001 11.6904 17.6101C11.6904 18.9301 11.1804 20.1601 10.2604 21.0901C9.49036 21.8501 8.50035 22.3201 7.38035 22.4601L4.91035 22.7301C4.80035 22.7401 4.69035 22.7501 4.58035 22.7501ZM6.95035 14.3001C6.91035 14.3001 6.86035 14.3001 6.82035 14.3001C5.31035 14.3301 3.71035 15.3601 3.51035 17.2601L3.24035 19.7201C3.19035 20.1401 3.34035 20.5501 3.63035 20.8501C3.92035 21.1401 4.33035 21.2901 4.74035 21.2401L7.20035 20.9701C7.97035 20.8701 8.66036 20.5501 9.18036 20.0301C9.82036 19.3901 10.1804 18.5301 10.1804 17.6101C10.1804 17.4601 10.1704 17.3001 10.1504 17.1401C10.0604 16.4301 9.74035 15.8101 9.20035 15.2701C8.66035 14.7301 7.99035 14.3901 7.27035 14.3001C7.19035 14.3001 7.07035 14.3001 6.95035 14.3001Z" fill="#CBCBCB" />
                        <path d="M14.7398 15.2202C14.3298 15.2202 13.9898 14.8802 13.9898 14.4702C13.9898 12.2702 12.1998 10.4902 10.0098 10.4902C9.59977 10.4902 9.25977 10.1502 9.25977 9.74023C9.25977 9.33023 9.58977 8.99023 9.99977 8.99023C13.0198 8.99023 15.4798 11.4502 15.4798 14.4702C15.4898 14.8902 15.1498 15.2202 14.7398 15.2202Z" fill="#CBCBCB" />
                        <path d="M16.1804 22.7297C15.2504 22.7297 14.3204 22.2897 13.4304 21.3997C13.1404 21.1097 13.1404 20.6297 13.4304 20.3397C13.7204 20.0497 14.2004 20.0497 14.4904 20.3397C15.6704 21.5197 16.6804 21.5197 17.8604 20.3397L20.8204 17.3797C22.0104 16.1897 22.0104 15.1797 20.8204 13.9997L20.0804 13.2697C19.7904 12.9797 19.7804 12.4997 20.0704 12.2097C20.3604 11.9097 20.8404 11.9097 21.1304 12.1997L21.8704 12.9297C23.6504 14.7097 23.6504 16.6597 21.8704 18.4397L18.9104 21.3997C18.0404 22.2797 17.1104 22.7297 16.1804 22.7297Z" fill="#CBCBCB" />
                        <path d="M3.60977 11.2598C3.41977 11.2598 3.21977 11.1898 3.07977 11.0398C1.31977 9.26977 1.31977 7.30977 3.07977 5.53977L6.03977 2.57977C7.79977 0.819766 9.77977 0.819766 11.5398 2.57977L12.2798 3.31977C12.5698 3.60977 12.5698 4.08977 12.2798 4.37977C11.9898 4.66977 11.5098 4.66977 11.2198 4.37977L10.4698 3.63977C9.28977 2.45977 8.26977 2.45977 7.09977 3.63977L4.13977 6.59977C2.95977 7.78977 2.95977 8.79977 4.13977 9.98977C4.42977 10.2798 4.42977 10.7598 4.13977 11.0498C3.98977 11.1898 3.79977 11.2598 3.60977 11.2598Z" fill="#CBCBCB" />
                        <path d="M8.05023 8.30004C7.86023 8.30004 7.67023 8.23004 7.52023 8.08004C7.23023 7.79004 7.23023 7.31004 7.52023 7.02004L11.2202 3.32004C11.5102 3.03004 11.9902 3.03004 12.2802 3.32004C12.5702 3.61004 12.5702 4.09004 12.2802 4.38004L8.58023 8.08004C8.43023 8.23004 8.24023 8.30004 8.05023 8.30004Z" fill="#CBCBCB" />
                        <path d="M17.6596 16.4302C17.4696 16.4302 17.2796 16.3602 17.1296 16.2102C16.8396 15.9202 16.8396 15.4402 17.1296 15.1502L20.0896 12.1902C20.3796 11.9002 20.8596 11.9002 21.1496 12.1902C21.4396 12.4802 21.4396 12.9602 21.1496 13.2502L18.1896 16.2102C18.0496 16.3602 17.8596 16.4302 17.6596 16.4302Z" fill="#CBCBCB" />
                    </svg>

                    <p>طراحی سفارشی</p>
                </Link>
                <Link to={""} className="flex  flex-col items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z" fill="#CBCBCB" />
                        <path d="M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z" fill="#CBCBCB" />
                        <path d="M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z" fill="#CBCBCB" />
                        <path d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z" fill="#CBCBCB" />
                    </svg>
                    <p className='text-white'>سبد خرید</p>
                </Link>
                <Link to={"/user-profile"} className="flex flex-col items-center">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z" fill="white" />
                        <path d="M12.5002 14.5C7.49016 14.5 3.41016 17.86 3.41016 22C3.41016 22.28 3.63016 22.5 3.91016 22.5H21.0902C21.3702 22.5 21.5902 22.28 21.5902 22C21.5902 17.86 17.5102 14.5 12.5002 14.5Z" fill="white" />
                    </svg>

                    <p>پروفایل</p>
                </Link>
            </div>
            <div className='hidden lg:block'>
                <MyFooter />
            </div>

        </div>
    )
}

export default UserProfile
import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import MyFooter from '../../Components/MyFooter/MyFooter'
import callSvg from "../../Assets/Images/call.svg"
import "../UserSignup/UserSignup.css"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import LoginSvg from "../../Assets/Images/login/login.svg"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


const UserLogin = () => {
    const nav = useNavigate()
    const [nextState, setNextState] = useState(false)

    const [userEmail, setUserEmail] = useState("")
    const [pass, setPass] = useState("")
    const [isWrong, setIsWrong] = useState(false)

   const loginUser = async () => {
  const payload = {
    email: userEmail,
    password: pass,
  };

  try {
    const response = await axios.post(
      'http://127.0.0.1:8000/api/token/',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if(response.status == 200)
    {
            
        localStorage.setItem('token',response.data.access);
            setIsWrong(false);
            nav('/')

    }

  } catch (error) {
    console.error("❌ Signup failed:", error.response?.data || error.message);
    setIsWrong(true);
  }
};

    return (
        <div className='flex flex-col min-h-screen font-iranyekan user-signup'>
            <Header />
            <hr className='mb-8' />
            {/* Main content goes here */}
            <div className="flex-grow w-[1224px] m-auto flex  justify-center items-center">
                <div className='w-2/4 flex flex-col justify-center items-center  '>
                    <div className='w-[330px]'>
                        <h1 className='font-bold text-2xl mb-[65px] text-center'>به کاستومی خوش آمدید</h1>
                        <div className='flex flex-col justify-center'>
                            <h5 className='mb-10 text-center font-semibold text-lg'>ورود | ثبت نام</h5>
                            <div className='flex flex-col mb-6'>
                                <label htmlFor="">ایمیل</label>
                                <input onChange={(e)=>setUserEmail(e.target.value)} className='border border-[#CBCBCB] w-full h-10 rounded-lg mt-1 py-1.5 px-2' type="text" />
                            </div>
                            <div className='flex flex-col mb-6'>
                                <label htmlFor="">کلمه عبور</label>
                                <input onChange={(e)=>setPass(e.target.value)} className='border border-[#CBCBCB] w-full h-10 rounded-lg mt-1 py-1.5 px-2' type="password" />
                                <p className='text-left text-xs mt-1 text-[#3C8F7C]'>فراموشی رمز عبور</p>
                            </div>
                            <p  className={`${isWrong ? '' : 'hidden'} text-red-700 text-xs text-center mb-2`}>ایمیل یا رمز عبور اشتباه است</p>
                            <p className='text-xs text-center font-semibold'>ورود و عضویت شما به منزله پذیرفتن قوانین و مقررات می باشد.</p>
                            <button onClick={loginUser} className='bg-baseRed py-2  left-6 bottom-6 px-6 w-full h-11 flex m-auto mt-8 justify-evenly text-sm rounded-lg text-white items-center'>
                                <p>ورود به سایت </p>


                            </button>
                            <Link className='text-[#A72F3B] text-center mt-4'>ثبت نام در سایت</Link>
                        </div>
                    </div>
                </div>
                <div className='w-2/4'>
                    <img src={LoginSvg} alt="" />
                </div>
            </div>

        </div>
    )
}

export default UserLogin

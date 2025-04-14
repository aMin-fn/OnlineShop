import React from 'react'
import Profile from '../../Components/Profile/Profile'
import Header from '../../Components/Header/Header'
import MyFooter from '../../Components/MyFooter/MyFooter'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'

const UserProfile = () => {
  return (
    <div>
        <Header/>
        <hr />
       <div className='max-w-[1224px] m-auto'>
       <MyNavbar/>
       <h1 className='font-bold text-3xl mb-5'>پروفایل</h1>
        <Profile/>
       </div>
       <MyFooter/>

    </div>
  )
}

export default UserProfile
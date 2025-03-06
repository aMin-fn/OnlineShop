import Header from '../../Components/Header/Header'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="bg-baseRed h-10 w-full flex justify-center items-center font-normal"><p className="text-white font-iranyekan text-sm font-light">با عضویت در کاستومی، اولین سفارش خود را ” رایگان” تحویل بگیرید </p></div>
      <Header></Header>
      <hr />
      <div className='max-w-[1224px] bg-slate-500 h-svh m-auto font-iranyekan'>
        <MyNavbar></MyNavbar>

      </div>
    </>

  )
}

export default Home
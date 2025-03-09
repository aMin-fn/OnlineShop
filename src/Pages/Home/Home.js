import Bestsellers from '../../Components/Bestsellers/Bestsellers'
import Category from '../../Components/Category/Category'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import PopularCard from '../../Components/PopularCard/PopularCard'
import SpecialSale from '../../Components/SpecialSale/SpecialSale'
import TopDesigners from '../../Components/TopDesigners/TopDesigners'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="bg-baseRed h-10 w-full flex justify-center items-center font-normal"><p className="text-white font-iranyekan text-sm font-light">با عضویت در کاستومی، اولین سفارش خود را ” رایگان” تحویل بگیرید </p></div>
      <Header></Header>
      <hr />
      <div className='max-w-[1224px] h-svh m-auto font-iranyekan'>
        <MyNavbar></MyNavbar>
        <Hero></Hero>
        <Category></Category>
        <Bestsellers></Bestsellers>
        <SpecialSale></SpecialSale>
        <PopularCard></PopularCard>
        <TopDesigners></TopDesigners>

      </div>
    </>

  )
}

export default Home
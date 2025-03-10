import Bestsellers from '../../Components/Bestsellers/Bestsellers'
import Category from '../../Components/Category/Category'
import Favorites from '../../Components/Favorites/Favorites'
import Footer from '../../Components/MyFooter/MyFooter'
import Gift from '../../Components/Gift/Gift'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import NewestDesigns from '../../Components/NewestDesigns/NewestDesigns'
import PopularCard from '../../Components/PopularCard/PopularCard'
import SpecialSale from '../../Components/SpecialSale/SpecialSale'
import TopDesigners from '../../Components/TopDesigners/TopDesigners'
import Wedding from '../../Components/Wedding/Wedding'
import './Home.css'
import MyFooter from "../../Components/MyFooter/MyFooter"

const Home = () => {
  return (
    <>
      <div className="bg-baseRed h-10 w-full flex justify-center items-center font-normal"><p className="text-white font-iranyekan text-sm font-light">با عضویت در کاستومی، اولین سفارش خود را ” رایگان” تحویل بگیرید </p></div>
      <Header></Header>
      <hr />
      <div className='max-w-[1224px]  m-auto font-iranyekan h-auto'>
        <MyNavbar></MyNavbar>
        <Hero></Hero>
        <Category></Category>
        <Bestsellers></Bestsellers>
        <SpecialSale></SpecialSale>
        <PopularCard></PopularCard>
        <TopDesigners></TopDesigners>
        <Gift></Gift>
        <NewestDesigns></NewestDesigns>
        <Wedding></Wedding>
        <Favorites></Favorites>


      </div>
      <MyFooter></MyFooter>
    </>

  )
}

export default Home
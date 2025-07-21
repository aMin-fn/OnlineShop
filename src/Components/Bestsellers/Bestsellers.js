import CategoryIcon from "../../Assets/Images/medal-star.svg"
import { Link } from "react-router-dom"
import BestsellerItem from "../BestsellerItem/BestsellerItem"
import manImg from "../../Assets/Images/img.png"
import HeartImg from "../../Assets/Images/heart.png"


const Bestsellers = () => {
    const products = [
        {
            img: manImg,
            title: "تیشرت مردانه",
            text: "دارای رنگ بندی، قابل طراحی"
        },
        {
            img: manImg,
            title: "تیشرت مردانه",
            text: "دارای رنگ بندی، قابل طراحی"
        },
        {
            img: manImg,
            title: "تیشرت مردانه",
            text: "دارای رنگ بندی، قابل طراحی"
        },
        {
            img: manImg,
            title: "تیشرت مردانه",
            text: "دارای رنگ بندی، قابل طراحی"
        },
        {
            img: manImg,
            title: "تیشرت مردانه",
            text: "دارای رنگ بندی، قابل طراحی"
        },
        {
            img: manImg,
            title: "تیشرت مردانه",
            text: "دارای رنگ بندی، قابل طراحی"
        },
        {
            img: manImg,
            title: "تیشرت مردانه",
            text: "دارای رنگ بندی، قابل طراحی"
        },
        {
            img: manImg,
            title: "تیشرت مردانه",
            text: "دارای رنگ بندی، قابل طراحی"
        }

    ]
    return (
        <div>
            <div className="Bestsellers-header flex items-center justify-between gap-5 mt-6">
                <img className="hidden lg:inline-block" src={CategoryIcon} alt="" />
                <h1 className='text-sm lg:text-2xl font-bold'>پر فروش ترین ها</h1>
                <div className='hidden lg:block w-[841px] bg-[#D6D6D6] h-[1px]'></div>
                <Link className="text-baseRed text-sm font-medium">مشاهده بیشتر</Link>
            </div>
            <div  className='grid grid-cols-2 lg:grid-cols-4 gap-6 my-6'>
                {products.map((item) => {
                    return <BestsellerItem img={item.img} title={item.title} text={item.text} heart={HeartImg} ></BestsellerItem>
                })}
            </div>
        </div>
    )
}

export default Bestsellers
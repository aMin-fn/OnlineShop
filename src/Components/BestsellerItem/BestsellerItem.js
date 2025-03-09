import HeartSvg from "../../Assets/Images/heart.png"
const BestsellerItem = ({img,title,text}) => {
  return (
    <div className="p-4 border-[#CBCBCB] border-solid border rounded-2xl ">
        <img src={img} alt="" />
        <h4 className="font-bold text-lg my-3 relative">
            {title}
            <img className="absolute left-0 top-0" src={HeartSvg} alt="" />
            </h4>
        <p>{text}</p>
        <p className="text-left mt-8 font-bold text-xl">۱۵۰,۰۰۰ تومان</p>
    </div>
  )
}

export default BestsellerItem
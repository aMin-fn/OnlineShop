import { useNavigate } from 'react-router-dom'

const BestsellerItem = ({img,title,text,heart,price}) => {
      const navigate = useNavigate();

  return (
    <div onClick={()=>navigate("/selected-products")} className="p-4 cursor-pointer border-[#CBCBCB] border-solid border rounded-2xl w-[288px] ">
        <img src={img} alt="" />
        <h4 className="font-bold text-lg my-3 relative">
            {title}
            <img className="absolute left-0 top-0" src={heart} alt="" />
            </h4>
        <p>{text}</p>
        <p className="text-left mt-8 font-bold text-xl">{price} تومان</p>
    </div>
  )
}

export default BestsellerItem
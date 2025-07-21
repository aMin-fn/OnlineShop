import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const BestsellerItem = ({ img, title, text, heart, price }) => {
  const navigate = useNavigate();
  const [liked,setLiked] = useState(false);
  return (
    <div  className="p-4  border-[#CBCBCB] border-solid border rounded-2xl  lg:w-[288px] ">
      <img className='w-full' src={img} alt="" />
      <h4 className="font-bold flex justify-between items-center text-sm lg:text-lg my-3 relative">
        {title}
        <svg onClick={()=>setLiked(prev=>!prev)} className={`${liked ? "hidden" : ""}`} width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22.1496C11.69 22.1496 11.39 22.1096 11.14 22.0196C7.32 20.7096 1.25 16.0596 1.25 9.18961C1.25 5.68961 4.08 2.84961 7.56 2.84961C9.25 2.84961 10.83 3.50961 12 4.68961C13.17 3.50961 14.75 2.84961 16.44 2.84961C19.92 2.84961 22.75 5.69961 22.75 9.18961C22.75 16.0696 16.68 20.7096 12.86 22.0196C12.61 22.1096 12.31 22.1496 12 22.1496ZM7.56 4.34961C4.91 4.34961 2.75 6.51961 2.75 9.18961C2.75 16.0196 9.32 19.8196 11.63 20.6096C11.81 20.6696 12.2 20.6696 12.38 20.6096C14.68 19.8196 21.26 16.0296 21.26 9.18961C21.26 6.51961 19.1 4.34961 16.45 4.34961C14.93 4.34961 13.52 5.05961 12.61 6.28961C12.33 6.66961 11.69 6.66961 11.41 6.28961C10.48 5.04961 9.08 4.34961 7.56 4.34961Z" />
        </svg>
        <svg onClick={()=>setLiked(prev=>!prev)} className={`${!liked ? "hidden" : ""}`} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.3115 4.96071C17.9773 2.58032 15.2743 3.58425 13.6007 4.64593C12.655 5.24582 11.345 5.24582 10.3993 4.64593C8.72564 3.58427 6.02272 2.58035 3.68853 4.96072C-1.85249 10.6114 7.64988 21.5 12 21.5C16.3502 21.5 25.8525 10.6114 20.3115 4.96071Z" fill="#A72F3B" />
        </svg>


      </h4>
      <p className='text-xs lg:text-base'>{text}</p>
      <p className="text-left mt-8 font-bold text-sm lg:text-xl">{price} تومان</p>
    </div>
  )
}

export default BestsellerItem
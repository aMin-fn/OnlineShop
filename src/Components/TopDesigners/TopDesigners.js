import TopDesignersItem from "./TopDesignersItem"
import StarSvg from "../../Assets/Images/star.svg"
const TopDesigners = () => {
  let temp = [];
  for (let index = 0; index < 8; index++) {
    temp.push(
      <TopDesignersItem></TopDesignersItem>
    )
  }

  return (
    <div>
      <div className="category-header flex items-center justify-between">
        <img src={StarSvg} alt="" />
        <h1 className='text-2xl font-bold'>طراحان برتر</h1>
        <div className='w-[1053px] bg-[#D6D6D6] h-[1px]'></div>
      </div>
      <div className="grid grid-cols-4 my-6 gap-8">
        {temp}
      </div>
    </div>
  )
}

export default TopDesigners
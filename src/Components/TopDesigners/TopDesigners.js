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
        <img className="hidden lg:inline-block" src={StarSvg} alt="" />
        <h1 className='text-sm  lg:text-2xl font-bold'>طراحان برتر</h1>
        <div className='hidden lg:block w-[1053px] bg-[#D6D6D6] h-[1px]'></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 my-6 gap-6 lg:gap-8">
        {temp}
      </div>
    </div>
  )
}

export default TopDesigners
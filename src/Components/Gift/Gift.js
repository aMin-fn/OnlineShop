import DaddyImg from "../../Assets/Images/dadi 1.png"
const Gift = () => {
    return (
        <div className="mt-[50px] mb-10 grid lg:grid-cols-2 gap-6 ">
            <div className="flex rounded-2xl bg-[#EDD5D8] overflow-hidden justify-between">
                <div className="desc  w-[243px] m-3 lg:m-6 gap-4 lg:gap-6 flex  flex-col  ">
                    <h4 className="text-sm lg:text-2xl lg:font-bold">محصولات مناسب هدیه دادن به آقایان</h4>
                    <button className="text-baseRed">دیدن محصولات</button>
                    <button className="hidden lg:inline-block border border-solid border-baseRed rounded-lg h-12 w-[139px] text-sm font-medium text-baseRed" type="button">دیدن محصولات</button>
                </div>
                <div className="img-container">
                    <img className="h-full" src={DaddyImg} alt="" />
                </div>

            </div>
            <div className="flex rounded-2xl bg-[#EDD5D8] overflow-hidden justify-between">
                <div className="desc  w-[243px] m-3 lg:m-6 gap-4 lg:gap-6 flex  flex-col  ">
                    <h4 className="text-sm lg:text-2xl lg:font-bold">محصولات مناسب هدیه دادن به آقایان</h4>
                    <button className="text-baseRed">دیدن محصولات</button>
                    <button className="hidden lg:inline-block border border-solid border-baseRed rounded-lg h-12 w-[139px] text-sm font-medium text-baseRed" type="button">دیدن محصولات</button>
                </div>
                <div className="img-container">
                    <img className="h-full" src={DaddyImg} alt="" />
                </div>

            </div>
            

        </div>
    )
}

export default Gift
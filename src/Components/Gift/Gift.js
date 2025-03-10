import DaddyImg from "../../Assets/Images/dadi 1.png"
const Gift = () => {
    return (
        <div className="mt-[50px] mb-10 grid grid-cols-2 gap-6 h-[188px] ">
            <div className="flex rounded-2xl bg-[#EDD5D8] overflow-hidden justify-between">
                <div className="desc  w-[243px] m-6 gap-6 flex  flex-col  ">
                    <h4 className="text-2xl font-bold">محصولات مناسب هدیه دادن به آقایان</h4>
                    <button className="border border-solid border-baseRed rounded-lg h-12 w-[139px] text-sm font-medium text-baseRed" type="button">دیدن محصولات</button>
                </div>
                <div className="img-container">
                    <img src={DaddyImg} alt="" />
                </div>

            </div>
            <div className="flex rounded-2xl bg-[#EDD5D8] overflow-hidden justify-between">
                <div className="desc  w-[243px] m-6 gap-6 flex  flex-col  ">
                    <h4 className="text-2xl font-bold">محصولات مناسب هدیه دادن به آقایان</h4>
                    <button className="border border-solid border-baseRed rounded-lg h-12 w-[139px] text-sm font-medium text-baseRed" type="button">دیدن محصولات</button>
                </div>
                <div className="img-container">
                    <img src={DaddyImg} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Gift
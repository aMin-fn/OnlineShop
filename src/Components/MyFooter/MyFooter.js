import PinterestSvg from "../../Assets/Images/Pinterest svg.svg"
import FooterImg from "../../Assets/Images/01.png"
const MyFooter = () => {
  return (
    <div className="mt-14 h-[536px] font-iranyekan">
      <div className="top bg-[#641C23] w-full ">
        <div className="max-w-[1224px] flex justify-between m-auto items-center h-[180px]  ">
          <div className="right">
            <p className="font-normal text-sm text-white">برای دریافت آخرین اخبار و تخفیف های جدید،ایمیل خود را وارد نمایید</p>
            <input type="text" placeholder="ایمیل شما" className="text-white py-[6px] px-2 w-[392px] h-10 bg-transparent border border-solid border-white rounded-lg mt-1 ml-3" />
            <button type="button" className="py-2 px-6 bg-baseRed rounded-lg text-white ">ثبت</button>
          </div>
          <div className="left h-20 ml-20 ">
            <p className="text-sm font-normal text-white">ما را در شبکه های اجتماعی دنبال کنید</p>
            <div className="flex justify-evenly mt-6">
              <img src={PinterestSvg} alt="" />
              <img src={PinterestSvg} alt="" />
              <img src={PinterestSvg} alt="" />
              <img src={PinterestSvg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-baseRed bottom  w-full   ">
        <div className="flex max-w-[1224px] h-[356px] m-auto items-center justify-between ">
          <div className="right flex h-[228px] w-[696px] justify-between text-white font-normal text-sm p-2">
            <div>
              <p className="underline underline-offset-8 decoration-white font-bold">همراه با کاستومی</p>
              <ul className="flex flex-col gap-5 mt-6">
                <li><a href="">فروش محصولات</a></li>
                <li><a href="">فرصت همکاری</a></li>
                <li><a href="">تماس با ما </a></li>
                <li><a href="">نقشه سایت</a></li>
              </ul>
            </div>
            <div>
              <p className="underline underline-offset-8 decoration-white font-bold">همراه با کاستومی</p>
              <ul className="flex flex-col gap-5 mt-6">
                <li><a href="">فروش محصولات</a></li>
                <li><a href="">فرصت همکاری</a></li>
                <li><a href="">تماس با ما </a></li>
                <li><a href="">نقشه سایت</a></li>
              </ul>
            </div>
            <div>
              <p className="underline underline-offset-8 decoration-white font-bold">همراه با کاستومی</p>
              <ul className="flex flex-col gap-5 mt-6">
                <li><a href="">فروش محصولات</a></li>
                <li><a href="">فرصت همکاری</a></li>
                <li><a href="">تماس با ما </a></li>
                <li><a href="">نقشه سایت</a></li>
              </ul>
            </div>


          </div>
          <div className="left  text-white text-center  ">
            <div className="title">
              <h6 className="font-bold text-lg">فروشگاه اینترنتی کاستومی</h6>
            </div>
            <div className="text text-xs font-normal flex justify-between gap-8 mt-[41px] mb-[72px]">
              <div className="right flex gap-4">
                <p > تماس با پشتیبانی : </p>
                <p> ۰۲۱-۳۴۵۶۰۰۰ </p>
              </div>
              <div className="left">
                <p>پاسخگویی ۲۴ ساعته ، ۷ روز هفته </p>
              </div>
            </div>
            <div className="imgs flex gap-8 justify-center">
              <img src={FooterImg} alt="" />
              <img src={FooterImg} alt="" />
              <img src={FooterImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyFooter
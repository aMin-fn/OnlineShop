import { useState } from "react"
import StickerImg from "../../Assets/Images/2.png"
import GalleyImg from "../../Assets/Images/gallery-add.svg"
import ShapeSvg from "../../Assets/Images/like-shapes.svg"
import { Link } from "react-router-dom"

const PopularCard = () => {
    const products = [0, 0, 0, 0, 0, 0, 0, 0];
    const [liked, setLiked] = useState(Array(products.length).fill(false));
    const [added, setAdded] = useState(Array(products.length).fill(false));

    const toggleLike = (index) => {
        const updatedLikes = [...liked];
        updatedLikes[index] = !updatedLikes[index];
        setLiked(updatedLikes);
    };
    const toggleAdd = (index) => {
        const updatedAdds = [...added];
        updatedAdds[index] = !updatedAdds[index];
        setAdded(updatedAdds);
    };

    return (
        <>
            <div className="Bestsellers-header flex items-center justify-between lg:justify-normal gap-5">
                <img className="hidden lg:inline-block" src={ShapeSvg} alt="" />
                <h1 className='text-sm lg:text-2xl font-bold'>طرح های پرطرفدار</h1>
                <div className='hidden lg:block w-[841px] bg-[#D6D6D6] h-[1px]'></div>
                <Link className="text-baseRed text-sm font-medium">مشاهده بیشتر</Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 my-6">
                {products.map((_, index) => (
                    <div key={index} className="border border-[#CBCBCB] border-solid p-4 rounded-2xl flex flex-col justify-between">
                        <div className="img-container">
                            <img className="w-full" src={StickerImg} alt="" />
                        </div>

                        <div className="desc flex justify-between w-full">
                            <p className="font-bold text-sm lg:text-lg">استیکر</p>
                            {!liked[index] ? (
                                <svg onClick={() => toggleLike(index)} width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22.1496C11.69 22.1496 11.39 22.1096 11.14 22.0196C7.32 20.7096 1.25 16.0596 1.25 9.18961C1.25 5.68961 4.08 2.84961 7.56 2.84961C9.25 2.84961 10.83 3.50961 12 4.68961C13.17 3.50961 14.75 2.84961 16.44 2.84961C19.92 2.84961 22.75 5.69961 22.75 9.18961C22.75 16.0696 16.68 20.7096 12.86 22.0196C12.61 22.1096 12.31 22.1496 12 22.1496ZM7.56 4.34961C4.91 4.34961 2.75 6.51961 2.75 9.18961C2.75 16.0196 9.32 19.8196 11.63 20.6096C11.81 20.6696 12.2 20.6696 12.38 20.6096C14.68 19.8196 21.26 16.0296 21.26 9.18961C21.26 6.51961 19.1 4.34961 16.45 4.34961C14.93 4.34961 13.52 5.05961 12.61 6.28961C12.33 6.66961 11.69 6.66961 11.41 6.28961C10.48 5.04961 9.08 4.34961 7.56 4.34961Z" />
                                </svg>
                            ) : (
                                <svg onClick={() => toggleLike(index)} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.3115 4.96071C17.9773 2.58032 15.2743 3.58425 13.6007 4.64593C12.655 5.24582 11.345 5.24582 10.3993 4.64593C8.72564 3.58427 6.02272 2.58035 3.68853 4.96072C-1.85249 10.6114 7.64988 21.5 12 21.5C16.3502 21.5 25.8525 10.6114 20.3115 4.96071Z" fill="#A72F3B" />
                                </svg>
                            )}
                        </div>

                        <p className="font-normal text-xs lg:text-sm mt-2">قابل طراحی و چاپ بر روی انواع محصولات</p>
                        {added[index] ? (<div className="button">
                            <button onClick={() => toggleAdd(index)} type="button" className="flex bg-baseRed py-2 mt-3 lg:px-6 items-center justify-center border border-solid border-baseRed text-white w-full lg:w-[256px] h-10 rounded-lg">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.50033 7.16667C5.48699 7.16667 4.66699 6.34667 4.66699 5.33333C4.66699 4.32 5.48699 3.5 6.50033 3.5C7.51366 3.5 8.33366 4.32 8.33366 5.33333C8.33366 6.34667 7.51366 7.16667 6.50033 7.16667ZM6.50033 4.5C6.04033 4.5 5.66699 4.87333 5.66699 5.33333C5.66699 5.79333 6.04033 6.16667 6.50033 6.16667C6.96033 6.16667 7.33366 5.79333 7.33366 5.33333C7.33366 4.87333 6.96033 4.5 6.50033 4.5Z" fill="white" />
                                    <path d="M10.4997 15.1666H6.49967C2.87967 15.1666 1.33301 13.6199 1.33301 9.99992V5.99992C1.33301 2.37992 2.87967 0.833252 6.49967 0.833252H9.16634C9.43967 0.833252 9.66634 1.05992 9.66634 1.33325C9.66634 1.60659 9.43967 1.83325 9.16634 1.83325H6.49967C3.42634 1.83325 2.33301 2.92659 2.33301 5.99992V9.99992C2.33301 13.0733 3.42634 14.1666 6.49967 14.1666H10.4997C13.573 14.1666 14.6663 13.0733 14.6663 9.99992V6.66659C14.6663 6.39325 14.893 6.16659 15.1663 6.16659C15.4397 6.16659 15.6663 6.39325 15.6663 6.66659V9.99992C15.6663 13.6199 14.1197 15.1666 10.4997 15.1666Z" fill="white" />
                                    <path d="M12.1396 4.79999C12.013 4.79999 11.8863 4.75333 11.7863 4.65333L10.813 3.67999C10.6196 3.48666 10.6196 3.16666 10.813 2.97333C11.0063 2.77999 11.3263 2.77999 11.5196 2.97333L12.1396 3.59333L14.3863 1.34666C14.5796 1.15333 14.8996 1.15333 15.093 1.34666C15.2863 1.53999 15.2863 1.85999 15.093 2.05333L12.493 4.65333C12.3996 4.75333 12.2663 4.79999 12.1396 4.79999Z" fill="white" />
                                    <path d="M2.28017 13.133C2.12017 13.133 1.96017 13.053 1.86684 12.913C1.71351 12.6864 1.77351 12.373 2.00684 12.2197L5.29351 10.013C6.01351 9.52638 7.00684 9.58638 7.66017 10.1397L7.88017 10.333C8.21351 10.6197 8.78017 10.6197 9.10684 10.333L11.8802 7.95305C12.5868 7.34638 13.7002 7.34638 14.4135 7.95305L15.5002 8.88638C15.7068 9.06638 15.7335 9.37971 15.5535 9.59305C15.3735 9.79971 15.0602 9.82638 14.8468 9.64638L13.7602 8.71305C13.4268 8.42638 12.8602 8.42638 12.5268 8.71305L9.75351 11.093C9.04684 11.6997 7.93351 11.6997 7.22017 11.093L7.00017 10.8997C6.69351 10.6397 6.18684 10.613 5.84684 10.8464L2.56017 13.053C2.47351 13.1064 2.37351 13.133 2.28017 13.133Z" fill="white" />
                                </svg>

                                <p className="font-medium text-[10px] lg:text-sm mr-1">ذخیره شده</p>
                            </button>
                        </div>) : (<div className="button">
                            <button onClick={() => toggleAdd(index)} type="button" className="flex text-baseRed py-2 mt-3 lg:px-6 items-center justify-center border border-solid border-baseRed w-full lg:w-[256px] h-10 rounded-lg">
                                <img className="w-4 lg:w-auto" src={GalleyImg} alt="" />
                                <p className="font-medium text-[10px] lg:text-sm mr-1">افزودن به گالری</p>
                            </button>
                        </div>)}

                    </div>
                ))}
            </div>
        </>
    );
};

export default PopularCard;

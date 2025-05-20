import Delivered from "./Components/Delivered/Delivered";
import Order from "./Components/Order/Order";
import AccountInfo from "./Pages/AccountInfo/AccountInfo";
import Home from "./Pages/Home/Home";
import OrderHistory from "./Pages/OrderHistory/OrderHistory";
import OtherProducts from "./Pages/OtherProducts/OtherProducts";
import SelectedProduct from "./Pages/SelectedProduct/SelectedProduct";
import Shopping from "./Pages/Shopping/Shopping";
import UserProfile from "./Pages/UserProfile/UserProfile";
import UserSignup from "./Pages/UserSignup/UserSignup";
import Canceled  from "./Components/Canceled/Canceled"
import Returned from "./Components/Returned/Returned";
const routes = [
    {path:"/" , element :<Home></Home> },
    {path:"/user-signup" , element :<UserSignup/> },
    {path:"/user-profile" , element :<UserProfile/> },
    {path:"/order-history" , element :<OrderHistory/> , children :
        [
                {path:"delivered" , element :<Delivered/> },
                {path:"current" , element :<Order/> },
                {path:"canceled" , element : <Canceled/> },
                {path:"returned" , element : <Returned/> },
        ]
     },
    {path:"/account-info" , element :<AccountInfo/> },
    {path:"/other-products" , element :<OtherProducts/> },
    {path:"/selected-products" , element : <SelectedProduct/>},
    {path:"/shopping" , element : <Shopping/>},

];
export default routes;

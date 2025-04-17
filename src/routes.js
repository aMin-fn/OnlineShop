import AccountInfo from "./Pages/AccountInfo/AccountInfo";
import Home from "./Pages/Home/Home";
import OrderHistory from "./Pages/OrderHistory/OrderHistory";
import OtherProducts from "./Pages/OtherProducts/OtherProducts";
import SelectedProduct from "./Pages/SelectedProduct/SelectedProduct";
import Shopping from "./Pages/Shopping/Shopping";
import UserProfile from "./Pages/UserProfile/UserProfile";
import UserSignup from "./Pages/UserSignup/UserSignup";

const routes = [
    {path:"/home" , element :<Home></Home> },
    {path:"/user-signup" , element :<UserSignup/> },
    {path:"/user-profile" , element :<UserProfile/> },
    {path:"/order-history" , element :<OrderHistory/> },
    {path:"/account-info" , element :<AccountInfo/> },
    {path:"/other-products" , element :<OtherProducts/> },
    {path:"/selected-products" , element : <SelectedProduct/>},
    {path:"/shopping" , element : <Shopping/>},

];
export default routes;
